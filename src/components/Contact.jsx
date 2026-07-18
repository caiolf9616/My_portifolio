import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../data/profile.js";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Sem <form>: montamos um link "mailto:" com os dados preenchidos.
  // Isso abre o cliente de e-mail padrão do visitante, com tudo já escrito.
  const handleSend = () => {
    const subject = encodeURIComponent(`Contato via portfólio — ${form.name || "Visitante"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div className="glass-panel contact-panel reveal">
          <p className="eyebrow">Vamos conversar</p>
          <h2 className="section-title">Entre em contato</h2>

          <div className="contact-grid">
            <div className="contact-fields">
              <label className="field">
                <span>Nome</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome"
                />
              </label>
              <label className="field">
                <span>E-mail</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="voce@email.com"
                />
              </label>
              <label className="field">
                <span>Mensagem</span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Conte um pouco sobre o projeto..."
                />
              </label>
              <button className="btn btn-primary" onClick={handleSend}>
                Enviar mensagem <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="contact-socials">
              <a href={`mailto:${PROFILE.email}`} className="social-link">
                <Mail size={18} /> {PROFILE.email}
              </a>
              <a href={PROFILE.github} className="social-link">
                <Github size={18} /> GitHub
              </a>
              <a href={PROFILE.linkedin} className="social-link">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
