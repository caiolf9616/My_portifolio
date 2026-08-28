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
  photo: "/Avatar.jpg",
  languages: ["Português(Nativo)", "Inglês(Avançado)", "Espanhol(Intermediário)"],
};

export const SKILLS = ["React", "Python", "Node.js", "JavaScript", "PostgreSQL", "Docker"];

export const PROJECTS = [
  {
    title: "Wash Car — Agendamento de Lava Jato",
    description:
      "Plataforma para agendar lavagens de forma rápida, acompanhar cada etapa do serviço pelo celular e visualizar vagas em tempo real.",
    tags: ["JavaScript", "HTML", "CSS", "Responsivo"],
    image: "/projects/wash-car.png",
    imageAlt: "Tela inicial do sistema Wash Car",
    link: "https://wa74washcar.vercel.app/",
  },
  {
    title: "Setup de Leitos V2",
    description:
      "Versão mais atual do sistema de leitos, com painel integrado, autenticação por login e senha e uma interface responsiva pensada para o uso em celulares.",
    tags: ["JavaScript", "Python", "Login", "Mobile"],
    link: null,
  },
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
];

export const NAV_ITEMS = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];
