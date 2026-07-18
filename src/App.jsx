import { useTheme } from "./hooks/useTheme.js";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll.js";
import AmbientBackground from "./components/AmbientBackground.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const { theme, toggleTheme } = useTheme("dark");
  useRevealOnScroll();

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <AmbientBackground />
      <Navbar theme={theme} onToggleTheme={toggleTheme} onNav={handleNav} />
      <main>
        <Hero onNav={handleNav} />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
