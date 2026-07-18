# Portfólio — Liquid Glass

Portfólio pessoal em React + Vite, com efeito de vidro translúcido
("liquid glass") inspirado no design da Apple, e alternância entre
tema claro e escuro.

## Como rodar

```bash
npm install
npm run dev
```

Depois abra o endereço que aparecer no terminal (normalmente
http://localhost:5173).

Para gerar a versão de produção (arquivos otimizados para publicar):

```bash
npm run build
```

Os arquivos finais vão para a pasta `dist/`. Você pode publicar essa
pasta em qualquer serviço de hospedagem estática (Vercel, Netlify,
GitHub Pages, etc).

## Estrutura de pastas

```
portfolio/
├── index.html              # HTML raiz, carrega o React
├── package.json            # dependências e scripts
├── vite.config.js          # configuração do Vite
└── src/
    ├── main.jsx             # ponto de entrada: monta o React na página
    ├── App.jsx               # componente raiz, organiza as seções
    ├── data/
    │   └── profile.js        # TODO O CONTEÚDO do site (edite aqui!)
    ├── hooks/
    │   ├── useTheme.js          # lógica do tema claro/escuro
    │   └── useRevealOnScroll.js # animação de fade-in ao rolar
    ├── components/
    │   ├── AmbientBackground.jsx/.css   # fundo animado ("água")
    │   ├── Navbar.jsx/.css              # menu fixo no topo
    │   ├── Hero.jsx/.css                # seção inicial
    │   ├── About.jsx/.css               # seção "sobre"
    │   ├── Projects.jsx/.css            # grid de projetos
    │   ├── Contact.jsx/.css             # formulário de contato
    │   └── Footer.jsx/.css              # rodapé
    └── styles/
        ├── variables.css     # cores dos temas dark/light
        ├── base.css           # reset + estilos globais
        ├── glass.css          # a classe .glass-panel (o efeito de vidro)
        ├── animations.css     # keyframes dos blobs + scroll reveal
        └── responsive.css     # regras de mobile

```

## Para personalizar

1. **Conteúdo (nome, projetos, links):** edite só `src/data/profile.js`.
2. **Cores:** edite `src/styles/variables.css`.
3. **Novo componente:** crie um `MeuComponente.jsx` + `MeuComponente.css`
   dentro de `src/components/`, e importe no `App.jsx`.
