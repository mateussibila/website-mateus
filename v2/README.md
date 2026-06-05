# Mateus Sibila — Portfolio (v2)

Site pessoal: página única (About, Skills, Experience, Projects preview, Education, Contact) + página **Projects**.

## Local

```bash
bundle install
bundle exec jekyll serve
```

http://localhost:4000

## Apresentação / PDF

Abrir no browser (ou Imprimir → Guardar como PDF):

**[`apresentacao-site.html`](apresentacao-site.html)** — resumo visual do site v2

Para PDF **fiel** ao site real: `jekyll serve` → http://localhost:4000 → **Cmd+P** → Guardar como PDF.

No diálogo de impressão (Chrome/Safari): activar **“Gráficos de fundo”** / **“Background graphics”**. O CSS inclui estilos `@media print` para manter o tema escuro e o layout.

## Deploy (GitHub Pages)

Site publicado em: **https://mateussibila.github.io/website-mateus/**

Push para `main` dispara o workflow `.github/workflows/pages.yml` (build Jekyll em `v2/` → GitHub Pages).

**Local** usa `baseurl: ""` · **produção** usa `_config.production.yml` (`baseurl: /website-mateus`).

1. Repo: https://github.com/mateussibila/website-mateus (privado)
2. Settings → Pages → Source: **GitHub Actions**
3. Build local: `bundle exec jekyll build --config _config.yml,_config.production.yml` → preview em `v2/_site/`

## Imagens

| Caminho | Uso |
|---------|-----|
| `assets/img/profile.jpg` | Foto hero + navbar |
| `assets/img/skills-visual.jpg` | Professional Summary (adicionar quando pronta) |
| `assets/img/logos/` | Logos das empresas (Experience) |
| `assets/img/icons/` | LinkedIn, GitHub, Ireland (contact) |
| `assets/img/source-website/` | Cópia dos ficheiros originais (`Downloads/images for website`) |

## Estrutura principal

```
v2/
├── index.html          # Home (single-page)
├── projects.html       # Projetos detalhados
├── _projects/          # Markdown dos projetos
├── _layouts/           # portfolio.html, redirect.html
├── _includes/portfolio/
├── assets/css/portfolio.css
├── assets/js/portfolio.js
└── _config.yml
```
