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
          {PROJECTS.map((p) => {
            const Card = p.link ? "a" : "article";

            return (
              <Card
                key={p.title}
                {...(p.link ? { href: p.link, target: "_blank", rel: "noreferrer" } : {})}
                className="glass-panel project-card reveal"
              >
                {p.image && (
                  <div className="project-image-wrap">
                    <img className="project-image" src={p.image} alt={p.imageAlt || `Tela do projeto ${p.title}`} />
                  </div>
                )}
                <div className="project-top">
                  <h3>{p.title}</h3>
                  {p.link && <ExternalLink size={16} className="project-icon" aria-label="Abrir projeto" />}
                </div>
                <p>{p.description}</p>
                <div className="skill-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag tag-small">
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
