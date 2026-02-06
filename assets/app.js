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

// Mobile menu
const overlay = document.getElementById("overlay");
document.getElementById("menuBtn")?.addEventListener("click", () => overlay.classList.add("show"));
document.getElementById("closeBtn")?.addEventListener("click", () => overlay.classList.remove("show"));
overlay?.addEventListener("click", (e) => { if(e.target === overlay) overlay.classList.remove("show"); });
function closeMenu(){ overlay?.classList.remove("show"); }

// Active link highlight
(function markActive(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(a => {
    if(a.getAttribute("href") === path) a.classList.add("active");
  });
})();

// Reveal on scroll
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

// Year
document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());

// Toast
let toastTimer;
function toast(msg){
  const t = document.getElementById("toast");
  if(!t) return;
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.style.display="none", 2400);
}

// Contact submit demo
function handleContactSubmit(e){
  e.preventDefault();
  toast("Mesaj alındı! (Demo) Gerçek mail gönderimi istersen bağlarız.");
}

// ===== ÜRÜNLER =====
function getParam(name){
  const url = new URL(location.href);
  return url.searchParams.get(name);
}

function renderProducts(){
  const mount = document.getElementById("productsGrid");
  if(!mount || !window.DOTEK_PRODUCTS) return;

  mount.innerHTML = window.DOTEK_PRODUCTS.map(p => {
    const svg = window.DOTEK_PRODUCT_SVG ? window.DOTEK_PRODUCT_SVG(p.svgTitle || p.name) : "";
    const tags = (p.tags || []).map(t => `<span class="chip">${t}</span>`).join("");
    return `
      <article class="feature product-card reveal" data-product="${p.id}">
        <div class="product-top">
          <div>
            <div class="product-title">${p.name}</div>
            <div class="product-sub">${p.short}</div>
          </div>

          <button class="kebab" type="button" aria-label="Ürün hakkında aç/kapat" data-kebab="${p.id}">⋮</button>
        </div>

        <div class="product-img" onclick="location.href='product.html?id=${encodeURIComponent(p.id)}'" style="cursor:pointer;">
          ${svg}
        </div>

        <div class="chip-row" style="margin-top:10px;">${tags}</div>

        <div class="product-actions">
          <a class="btn primary" href="product.html?id=${encodeURIComponent(p.id)}">Ürünü incele</a>
          <a class="btn" href="contact.html">Sipariş / Teklif</a>
        </div>

        <div class="product-mini" id="mini-${p.id}">
          <b>Ürün hakkında</b><br/>
          ${p.description}
        </div>
      </article>
    `;
  }).join("");

  // kebab toggles
  mount.querySelectorAll("[data-kebab]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute("data-kebab");
      const box = document.getElementById(`mini-${id}`);
      if(!box) return;
      box.classList.toggle("show");
    });
  });
}

function renderProductDetail(){
  const mount = document.getElementById("productDetail");
  if(!mount || !window.DOTEK_PRODUCTS) return;

  const id = getParam("id");
  const p = window.DOTEK_PRODUCTS.find(x => x.id === id) || window.DOTEK_PRODUCTS[0];
  const svg = window.DOTEK_PRODUCT_SVG ? window.DOTEK_PRODUCT_SVG(p.svgTitle || p.name) : "";
  const tags = (p.tags || []).map(t => `<span class="chip">${t}</span>`).join("");

  mount.innerHTML = `
    <div class="card reveal" style="padding:18px;">
      <div class="pill"><span class="dot"></span><span>Ürün Detayı</span></div>
      <h1 style="margin-top:12px;"><span class="grad">${p.name}</span></h1>
      <p class="lead">${p.short}</p>

      <div class="product-img" style="height:220px;">
        ${svg}
      </div>

      <div class="chip-row">${tags}</div>

      <div class="card" style="padding:16px; margin-top:12px; background: rgba(255,255,255,.03);">
        <div style="font-weight:900; letter-spacing:-.2px; margin-bottom:8px;">Ürün Açıklaması</div>
        <div style="color: var(--muted); line-height:1.7;">
          ${p.description}
        </div>
      </div>

      <div class="band" style="margin-top:14px;">
        <div>
          <h3>Sipariş / Teklif</h3>
          <p>Bu ürün için teklif almak veya sipariş vermek için bizimle iletişime geçin.</p>
        </div>
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <a class="btn" href="contact.html">Bize ulaşın</a>
          <a class="btn primary" href="contact.html">Sipariş ver</a>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderProductDetail();
});
