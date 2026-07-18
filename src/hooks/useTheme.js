import { useEffect, useState } from "react";

/*
  Hook customizado: junta a lógica do tema (dark/light) num lugar só,
  para poder reutilizar em qualquer componente com "const { theme, toggleTheme } = useTheme()".

  A cada troca de "theme", ele escreve o atributo data-theme na tag <html>.
  Quem realmente muda as cores é o CSS em src/styles/variables.css,
  que tem uma seção para [data-theme="dark"] e outra para [data-theme="light"].
*/
export function useTheme(defaultTheme = "dark") {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
