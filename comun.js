// Utilidades de la web: rutas de las fotos, texto de las cartas y visor de fotos a pantalla completa.
window.Comun = (() => {
  const cartas = window.CARTAS;

  const rutaFoto = (c, n) => `fotos/${c.id}/${String(n).padStart(2, "0")}.jpg`;
  const fotosDe = (c) => Array.from({ length: c.fotos }, (_, k) => rutaFoto(c, k + 1));
  const textoFotos = (n) => (n === 1 ? "1 foto" : `${n} fotos`);
  const escapar = (s) =>
    String(s).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[ch]);
  const parrafos = (c) => c.texto.map((p) => `<p>${escapar(p)}</p>`).join("");
  const buscar = (id) => cartas.find((c) => c.id === id);

  // Visor de fotos
  const estilo = document.createElement("style");
  estilo.textContent = `
    .visor { width: 100vw; height: 100dvh; max-width: none; max-height: none; margin: 0; padding: 0; border: 0;
      background: rgb(14 32 52 / .94); color: #fff; }
    .visor[open] { display: grid; place-items: center; }
    .visor img { max-width: calc(100vw - 32px); max-height: calc(100dvh - 120px); border-radius: 4px; }
    .visor button { position: absolute; width: 48px; height: 48px; display: grid; place-items: center;
      border: 0; border-radius: 50%; background: rgb(255 255 255 / .14); color: #fff; font: inherit;
      font-size: 1.3rem; cursor: pointer; transition: background .2s, transform .15s; }
    .visor button:hover { background: rgb(255 255 255 / .26); }
    .visor button:active { transform: scale(.94); }
    .visor .cerrar { top: 16px; right: 16px; }
    .visor .ant { left: 16px; top: 50%; translate: 0 -50%; }
    .visor .sig { right: 16px; top: 50%; translate: 0 -50%; }
    .visor .cuenta { position: absolute; bottom: 22px; inset-inline: 0; margin: 0; text-align: center;
      font-size: .85rem; opacity: .8; font-variant-numeric: tabular-nums; }
    @media (max-width: 600px) { .visor .ant, .visor .sig { top: auto; bottom: 10px; translate: none; } }`;
  document.head.append(estilo);

  const visor = document.createElement("dialog");
  visor.className = "visor";
  visor.setAttribute("aria-label", "Foto ampliada");
  visor.innerHTML = `
    <img alt="">
    <button class="cerrar" data-v="cerrar" aria-label="Cerrar">✕</button>
    <button class="ant" data-v="ant" aria-label="Foto anterior">←</button>
    <button class="sig" data-v="sig" aria-label="Foto siguiente">→</button>
    <p class="cuenta"></p>`;
  document.body.append(visor);
  let lista = [];
  let actual = 0;
  let alt = "";
  function mostrar(k) {
    actual = (k + lista.length) % lista.length;
    const img = visor.querySelector("img");
    img.src = lista[actual];
    img.alt = `${alt}, foto ${actual + 1} de ${lista.length}`;
    visor.querySelector(".cuenta").textContent = `${actual + 1} / ${lista.length}`;
    visor.querySelector(".ant").hidden = visor.querySelector(".sig").hidden = lista.length < 2;
  }
  visor.addEventListener("click", (e) => {
    const v = e.target.closest("[data-v]")?.dataset.v;
    if (v === "cerrar" || e.target === visor) visor.close();
    else if (v === "ant") mostrar(actual - 1);
    else if (v === "sig") mostrar(actual + 1);
  });
  visor.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") mostrar(actual - 1);
    if (e.key === "ArrowRight") mostrar(actual + 1);
  });
  function abrirVisor(c, k) {
    lista = fotosDe(c);
    alt = `${c.nombre} con Ceci`;
    mostrar(k);
    visor.showModal();
  }

  return { cartas, rutaFoto, fotosDe, textoFotos, escapar, parrafos, buscar, abrirVisor };
})();
