import { PROFILE } from "../data/profile.js";
import "./About.css";

export default function About() {
  const initials = PROFILE.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <section id="about" className="section">
      <div className="section-inner about-grid">
        <div className="glass-panel avatar-frame reveal">
          {PROFILE.photo ? (
            <img src={PROFILE.photo} alt={PROFILE.name} className="avatar-photo" />
          ) : (
            <div className="avatar-placeholder">{initials}</div>
          )}
        </div>

        <div className="glass-panel about-text reveal">
          <p className="eyebrow">Sobre mim</p>
          <h2 className="section-title">Quem constrói o que você está vendo</h2>
          <p className="body-text">
            Sou desenvolvedor Full Stack em formação, cursando Análise e Desenvolvimento de
            Sistemas na Universidade de Fortaleza (UNIFOR). Atualmente atuo na área de TI do
            Hospital do Coração, desenvolvendo soluções que automatizam processos e melhoram a
            gestão hospitalar. Gosto de criar aplicações que resolvem problemas reais, com foco
            em desenvolvimento web, automação e experiência do usuário.
          </p>
          <p className="body-text text-secondary">📍 {PROFILE.location}</p>
          <div className="skill-tags" style={{ marginTop: "14px" }}>
            {PROFILE.languages.map((lang) => (
              <span key={lang} className="tag tag-small">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}