# Guia: Publicar Site no GitHub Pages + Cloudflare

## ✅ Domínio Cloudflare
Status: Pending → Aguardando propagação (1-24h)

---

## Etapa 1: Criar Repositório no GitHub

1. Acesse https://github.com e faça login
2. Clique em "+" (canto superior direito) → "New repository"
3. Nome do repositório: `seu-usuario.github.io`
   - **IMPORTANTE**: Deve ser EXATAMENTE `seu-username.github.io`
   - Substitua "seu-usuario" pelo seu nome de usuário do GitHub
4. Marque **"Public"** (obrigatório para Pages gratuito)
5. NÃO marque "Add a README file" (vamos enviar arquivos depois)
6. Clique em "Create repository"

---

## Etapa 2: Preparar Seus Arquivos

Você tem atualmente:
- `index01.html`
- `index02.html`

**Decida qual será a página principal:**
- Recomendo manter `index01.html` como `index.html`
- Ou mesclar os dois em um único `index.html`

**Estrutura final do projeto:**
```
seu-usuario.github.io/
├── index.html          (página principal)
├── estilo.css         (se tiver CSS)
├── script.js          (se tiver JavaScript)
└── imagens/           (pasta de imagens, se houver)
```

**No terminal (ou manualmente):**
```bash
# Renomeie index01.html para index.html
mv index01.html index.html
# Remova index02.html se não for usar
rm index02.html
```

---

## Etapa 3: Enviar arquivos para o GitHub

### Opção A: Via Website (mais fácil)
1. No repositório recém-criado, clique em **"upload an existing file"**
2. Arraste sua pasta `meu-site` ou selecione os arquivos
3. Clique em "Commit changes"

### Opção B: Via Git (recomendado)
```bash
cd /Users/sibila/Documents/projects/meu-site

# Inicializar git se ainda não foi
git init
git add .
git commit -m "Initial commit"

# Adicionar remote (substitua SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/seu-usuario.github.io.git

# Enviar
git push -u origin main
```

---

## Etapa 4: Ativar GitHub Pages

1. No repositório no GitHub, vá em **Settings**
2. Menu lateral: **Pages**
3. Em "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: `main` (ou `master`)
   - Pasta: `/ (root)`
4. Clique em **Save**

**Aguarde 1-2 minutos.** GitHub vai:
- Construir o site
- Dar uma URL temporária: `https://seu-usuario.github.io`
- Mostrar status em Settings → Pages

---

## Etapa 5: Adicionar Domínio Customizado

1. Em Settings → Pages (mesma página)
2. Seção **"Custom domain"**
3. Digite seu domínio: `seudominio.com` (sem www)
4. Marque **"Enforce HTTPS"** (recomendado)
5. Clique em **Save**

**Importante:**
- GitHub Pages **precisa** que você tenha `www.seudominio.com` configurado também
- Eles vão mostrar os registros DNS necessários:
  ```
  CNAME: seu-usuario.github.io
  A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
  ```

---

## Etapa 6: Configurar DNS no Cloudflare

**Quando sua zona Cloudflare estiver "active":**

1. Vá em https://dash.cloudflare.com
2. Selecione seu domínio
3. Menu: **DNS** → **Records**

**Adicione estes registros:**

### Para domínio raiz (`@` ou vazio):
```
Type: A
Name: @ (ou vazio)
Value: 185.199.108.153
TTL: Auto
Proxy status: Proxied (laranja)

Repita para cada IP (4 registros A no total):
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153
```

### Para subdomínio `www`:
```
Type: CNAME
Name: www
Value: seu-usuario.github.io
TTL: Auto
Proxy status: Proxied (laranja)
```

**Importante:** Se já houver registros `@` ou `www`, delete-os antes de adicionar estes.

---

## Etapa 7: Verificar Propagação

1. Volte no GitHub Pages (Settings → Pages)
2. O status deve mudar de "Checking DNS..." para **"Your site is published at..."**
3. Pode levar algumas horas (DNS propagação)

---

## Etapa 8: Testar

**Após status ativo no GitHub:**
1. Acesse: `https://seudominio.com`
2. Deve aparecer seu site
3. Verifique o cadeado SSL 🔒 na barra de endereços

**Teste também:**
- `https://www.seudominio.com` (deve redirecionar para raiz)
- `http://seudominio.com` (deve redirecionar para HTTPS)

---

## Troubleshooting

### GitHub Pages diz "Domain not Configured"
- DNS não propagou ainda - espere 1-24h
- Verifique se registros Cloudflare estão corretos
- Use: `dig seu-dominio.com` ou https://dnschecker.org

### Site não aparece (404/erro)
- Verifique que repositório está público
- Confirme que branch é `main` (não `master`)
- Veja logs em Settings → Pages → "Build logs"

### HTTPS não funciona (cadeado vermelho/ausente)
- Cloudflare pode levar até 24h para emitir certificado
- Certifique-se de ter ativado "Enforce HTTPS" no GitHub Pages
- Tente limpar cache do navegador ou usar navegação anônima

### Redirecionamento www → raiz não funciona
- Certifique-se que tem **os dois** registros:
  - A records para `@`
  - CNAME para `www`
- Ambos com proxy laranja ativo

---

## Notas Importantes

✅ **Gratuito**: GitHub Pages + Cloudflare DNS + SSL grátis
⚠️ **Limitações**:
- Apenas sites estáticos (HTML, CSS, JS)
- Limite de 100GB/mês de banda
- Builds levam até 10 minutos
- Não permite backend (PHP, Node.js, Python server-side)

🔒 **HTTPS**: Automático via Cloudflare + GitHub Pages
🌍 **CDN**: Cloudflare + GitHub Pages ambos tem CDN global

---

## Próximos Passos Após Funcionar

1. Configure domínio de e-mail (opcional) - Zoho Mail gratuito
2. Adicione Google Analytics
3. Configure PageSpeed Insights
4. Adicione meta tags para SEO
5. Configure redirects (se precisar)

---

**Precisa de ajuda com alguma etapa específica?**
