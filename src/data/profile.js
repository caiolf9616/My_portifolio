// ------------------------------------------------------------
// TODO O CONTEÚDO DO SITE fica neste arquivo. Para personalizar
// seu portfólio, é só editar aqui — nenhum componente precisa mudar.
// ------------------------------------------------------------

export const PROFILE = {
  name: "Caio Fernandes",
  role: "Desenvolvedor(a) Full Stack",
  tagline:
    "Eu construo interfaces que parecem vivas — fluidas, translúcidas, com atenção obsessiva ao detalhe.",
  location: "Fortaleza, Brasil",
  email: "caiolopes0816@gmail.com",
  github: "https://github.com/caiolf9616",
  linkedin: "https://www.linkedin.com/in/caio-lopes-794662293/",
  photo:"/public/Avatar.jpg.jpeg",
  languages: ["Português(Nativo)", "Inglês(Avançado)", "Espanhol(Intermediário)"],
};

export const SKILLS = ["React", "Python", "Node.js", "JavaScript", "PostgreSQL", "Docker"];

export const PROJECTS = [
  {
    title: "Painel de Leitos — Hospital do Coração",
    description:
      "Painel que consulta em tempo real o status dos leitos preenchido pelas enfermarias. Assim que um leito fica apto, ele aparece como disponível, agilizando a regulação para que outro paciente possa ocupá-lo mais rápido.",
    tags: ["JavaScript", "Python", "html", "CSS"],
    link: "https://github.com/caiolf9616/painelSGA_Hm",
  },
  {
    title: "Painel de Medicamentos",
    description:
      "Projeto acadêmico que mostra quais medicações estão disponíveis na farmácia, evitando que pacientes se desloquem até lá só para descobrir que o remédio está em falta — além de reduzir o congestionamento das linhas telefônicas.",
    tags: ["react", "JavaScript", "Python", "CSS", "html"],
    link: "https://github.com/caiolf9616/consulta_de_medicamentos",
  },
  {
    title: "Diário da Família",
    description:
      "Diário digital privado para registrar fotos e datas importantes da minha filha, para guardarmos essas memórias e mostrarmos a ela quando crescer.",
    tags: ["JavaScript", "Node.js", "HTML", "CSS"],
    link: null ,
  },
  {
    title: "Glacier UI Kit",
    description:
      "Biblioteca de componentes open-source focada em acessibilidade e microinterações.",
    tags: ["TypeScript", "Storybook", "A11y"],
    link: "#",
  },
];

export const NAV_ITEMS = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];
