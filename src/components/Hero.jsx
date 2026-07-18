import { ArrowUpRight } from "lucide-react";
import { PROFILE, SKILLS } from "../data/profile.js";
import "./Hero.css";

export default function Hero({ onNav }) {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <p className="eyebrow reveal">Olá, eu sou</p>
        <h1 className="hero-title reveal">
          {PROFILE.name}
          <span className="hero-role">{PROFILE.role}</span>
        </h1>
        <p className="hero-tagline reveal">{PROFILE.tagline}</p>

        <div className="hero-actions reveal">
          <button className="btn btn-primary" onClick={() => onNav("projects")}>
            Ver projetos <ArrowUpRight size={16} />
          </button>
          <button className="btn btn-glass" onClick={() => onNav("contact")}>
            Entrar em contato
          </button>
        </div>

        <div className="glass-panel hero-card reveal">
          <div className="hero-card-row">
            <span className="dot" />
            <span>Disponível para novos projetos</span>
          </div>
          <div className="skill-tags">
            {SKILLS.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
