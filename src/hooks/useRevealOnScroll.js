import { useEffect } from "react";

/*
  Hook customizado: observa todos os elementos com className="reveal"
  e adiciona a classe "visible" assim que eles entram na tela.
  O IntersectionObserver é uma API nativa do navegador — bem mais
  performática do que ficar checando a posição de scroll manualmente.
*/
export function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // anima só uma vez
          }
        });
      },
      { threshold: 0.15 } // dispara quando 15% do elemento estiver visível
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
