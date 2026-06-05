# website-mateus

Portfolio pessoal — Mateus Sibila.

> Pasta renomeada de `meu-site`.

## Estrutura

| Pasta | Conteúdo |
|-------|----------|
| **`v2/`** | Site atual (portfolio escuro, single-page + Projects). **Use esta pasta para desenvolver e fazer deploy.** |
| **`v1/`** | Arquivos das versões anteriores (Beautiful Jekyll, referências, CSS antigo, docs de deploy). |

## Desenvolvimento local

**Importante:** o site vive dentro de `v2/`. Se correres Jekyll na pasta `website-mateus/` (raiz), vais ver `Not Found` em `/`.

```bash
cd v2
bundle install
bundle exec jekyll serve
```

Ou, a partir da raiz do repo:

```bash
./serve
```

Abrir http://localhost:4000 (não http://localhost:4000/v2/)

Se ainda der erro: para o servidor (`Ctrl+C`), confirma o directório com `pwd` (deve terminar em `.../website-mateus/v2`).

## Deploy

**GitHub Pages:** https://mateussibila.github.io/website-mateus/

Push para `main` → GitHub Actions faz build Jekyll e publica automaticamente.
