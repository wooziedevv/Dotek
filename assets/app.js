(function initTheme(){
  const saved = localStorage.getItem("dotek_theme");
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  const theme = saved || (prefersDark ? "dark" : "light");
  document.documentElement.dataset.theme = theme;
})();

function toggleTheme(){
  const current = document.documentElement.dataset.theme || "dark";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("dotek_theme", next);
  toast(`Tema: ${next === "dark" ? "Koyu" : "Açık"}`);
}

const overlay = document.getElementById("overlay");
document.getElementById("menuBtn")?.addEventListener("click", () => overlay.classList.add("show"));
document.getElementById("closeBtn")?.addEventListener("click", () => overlay.classList.remove("show"));
overlay?.addEventListener("click", (e) => { if(e.target === overlay) overlay.classList.remove("show"); });
function closeMenu(){ overlay?.classList.remove("show"); }

(function markActive(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(a => {
    if(a.getAttribute("href") === path) a.classList.add("active");
  });
})();

(function reveal(){
  const els = [...document.querySelectorAll(".reveal")];
  if(!("IntersectionObserver" in window)){
    els.forEach(e=>e.classList.add("show"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    for(const ent of entries){
      if(ent.isIntersecting){
        ent.target.classList.add("show");
        io.unobserve(ent.target);
      }
    }
  }, { threshold: 0.15 });
  els.forEach(e=>io.observe(e));
})();

document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());

let toastTimer;
function toast(msg){
  const t = document.getElementById("toast");
  if(!t) return;
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.style.display="none", 2400);
}

function handleContactSubmit(e){
  e.preventDefault();
  toast("Mesaj alındı! (Demo) Backend bağlarsak gerçek gönderim olur.");
}
