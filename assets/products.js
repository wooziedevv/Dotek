window.DOTEK_PRODUCTS = [
  {
    id: "beton-test-cihazi",
    name: "Beton Test Cihazları",
    short: "Dayanım ve kalite kontrol için test sistemleri.",
    description:
      "Beton numune test süreçlerinde dayanım, kalite kontrol ve raporlama odaklı cihazlar. Projeye göre özelleştirilebilir seçenekler.",
    tags: ["Beton", "Test", "Laboratuvar"],
    svgTitle: "Beton"
  },
  {
    id: "bitum-asfalt-test",
    name: "Bitüm & Asfalt Test Cihazları",
    short: "Asfalt karışım analizleri ve bitüm testleri.",
    description:
      "Bitüm/asfalt performans testleri için güvenilir ölçüm ve analiz çözümleri. Laboratuvar süreçleriyle uyumlu tasarım.",
    tags: ["Bitüm", "Asfalt", "Test"],
    svgTitle: "Asfalt"
  },
  {
    id: "cimento-harc-test",
    name: "Çimento & Harç Test Cihazları",
    short: "Standartlara uygun ölçüm ve kontrol ekipmanları.",
    description:
      "Çimento ve harç testlerinde tekrarlanabilir ölçüm, sağlam gövde, kolay kullanım. İhtiyaca göre set/paket çözümler.",
    tags: ["Çimento", "Harç", "Test"],
    svgTitle: "Çimento"
  },
  {
    id: "toprak-test",
    name: "Toprak Test Cihazları",
    short: "Zemin analizi ve saha-lab süreçleri için çözümler.",
    description:
      "Toprak ve zemin testlerinde doğru veri akışı ve güvenli kullanım. Çalışma sahasına uygun, dayanıklı ekipman.",
    tags: ["Toprak", "Zemin", "Test"],
    svgTitle: "Toprak"
  },
  {
    id: "agrega-kaya-test",
    name: "Agrega & Kaya Test Cihazları",
    short: "Agrega/kaya numune analizleri için sistemler.",
    description:
      "Agrega ve kaya testleri için dayanıklı konstrüksiyon, hassas ölçüm ve uzun ömür. Laboratuvar süreçlerine uygun.",
    tags: ["Agrega", "Kaya", "Test"],
    svgTitle: "Agrega"
  },
  {
    id: "celik-genel-test",
    name: "Çelik & Genel Test Cihazları",
    short: "Genel test ihtiyaçlarına uygun cihaz ailesi.",
    description:
      "Çelik ve genel test uygulamaları için modüler çözümler. İmalat kalitesi ve servis desteği ile güvenli kullanım.",
    tags: ["Çelik", "Genel", "Test"],
    svgTitle: "Çelik"
  }
];

window.DOTEK_PRODUCT_SVG = function(title){
  return `
  <svg viewBox="0 0 900 450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title}">
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="rgba(225,29,72,.55)"/>
        <stop offset="1" stop-color="rgba(185,28,28,.25)"/>
      </linearGradient>
      <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="rgba(255,255,255,.18)"/>
        <stop offset="1" stop-color="rgba(255,255,255,.04)"/>
      </linearGradient>
    </defs>

    <rect x="0" y="0" width="900" height="450" rx="34" fill="rgba(0,0,0,.25)"/>
    <path d="M640 -80 L980 220 L660 520 L320 220 Z" fill="url(#g1)" opacity="0.85"/>
    <path d="M120 360 C220 220, 340 220, 440 360 C540 500, 660 500, 780 360" fill="none" stroke="url(#g2)" stroke-width="10" opacity="0.9"/>
    <circle cx="180" cy="160" r="54" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.16)" stroke-width="2"/>
    <circle cx="260" cy="240" r="26" fill="rgba(225,29,72,.22)" />
    <rect x="80" y="86" width="360" height="90" rx="18" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.14)"/>
    <text x="110" y="145" font-size="44" font-family="ui-sans-serif,system-ui" fill="rgba(255,255,255,.86)" font-weight="800">${title}</text>
  </svg>`;
};
