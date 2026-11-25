/* ==========================================================
   script.js — Grão & Afeto Café (seções 5, 7 & 8, 9 e 10)
   Interatividade: carrossel de redes sociais e cards da equipe.
   Os estados visuais ficam no CSS (classes "ativo" e "aberto").
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Seção 5: carrossel (autoplay + manual) ---------- */
  const slides = document.querySelectorAll(".slide");
  const pontos = document.querySelectorAll(".ponto");
  const btnAnterior = document.getElementById("ant");
  const btnProximo = document.getElementById("prox");
  let atual = 0;
  let timer;

  const mostrar = (indice) => {
    slides.forEach((slide, i) => slide.classList.toggle("ativo", i === indice));
    pontos.forEach((ponto, i) => ponto.classList.toggle("ativo", i === indice));
    atual = indice;
  };

  const proximo = () => mostrar((atual + 1) % slides.length);
  const anterior = () => mostrar((atual - 1 + slides.length) % slides.length);

  const iniciarAutoplay = () => {
    timer = setInterval(proximo, 4500);
  };

  // Ao interagir, reinicia a contagem do autoplay
  const navegar = (acao) => {
    clearInterval(timer);
    acao();
    iniciarAutoplay();
  };

  btnProximo.addEventListener("click", () => navegar(proximo));
  btnAnterior.addEventListener("click", () => navegar(anterior));
  pontos.forEach((ponto, i) => {
    ponto.addEventListener("click", () => navegar(() => mostrar(i)));
  });

  iniciarAutoplay();

  /* ---------- Seções 7 e 8: equipe (toque no celular) ---------- */
  const membros = document.querySelectorAll(".membro");

  membros.forEach((membro) => {
    membro.addEventListener("click", () => {
      const estavaAberto = membro.classList.contains("aberto");
      membros.forEach((outro) => outro.classList.remove("aberto"));
      if (!estavaAberto) membro.classList.add("aberto");
    });
  });
});
