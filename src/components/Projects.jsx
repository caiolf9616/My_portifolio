import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../data/profile.js";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <p className="eyebrow reveal">Trabalho selecionado</p>
        <h2 className="section-title reveal">Projetos</h2>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <a key={p.title} href={p.link} className="glass-panel project-card reveal">
              <div className="project-top">
                <h3>{p.title}</h3>
                <ExternalLink size={16} className="project-icon" />
              </div>
              <p>{p.description}</p>
              <div className="skill-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag tag-small">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
