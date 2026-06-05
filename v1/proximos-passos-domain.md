# Próximos Passos - Domínio Cloudflare

## Status Atual
- ✅ Domínio registrado na Cloudflare
- ⏳ Zone em "pending" - aguardando propagação (1-24 horas)

---

## Após Propagação (quando status mudar para "active")

### 1. Acesse o Dashboard Cloudflare
```
https://dash.cloudflare.com
```
Selecione seu domínio na lista de zones.

### 2. Adicione Registros DNS

**Para sites estáticos (GitHub Pages, Netlify, Vercel):**

#### GitHub Pages:
```
Tipo: CNAME
Nome: @ (ou seu domínio raiz)
Valor: username.github.io
TTL: Auto
Proxy status: Laranja (ativado)

Tipo: CNAME
Nome: www
Valor: username.github.io
TTL: Auto
Proxy status: Laranja (ativado)
```

#### Vercel:
```
Tipo: A
Nome: @
Valor: 76.76.21.21
TTL: Auto
Proxy status: Laranja (ativado)

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
TTL: Auto
Proxy status: Laranja (ativado)
```

#### Netlify:
```
Tipo: CNAME
Nome: @
Valor: your-site.netlify.app
TTL: Auto
Proxy status: Laranja (ativado)

Tipo: CNAME
Nome: www
Valor: your-site.netlify.app
TTL: Auto
Proxy status: Laranja (ativado)
```

### 3. Configure SSL/TLS
1. Vá em **SSL/TLS** no menu lateral
2. Selecione **"Flexible"** (se seu hospedeiro já tem SSL) ou **"Full"** (recomendado se seu hospedeiro suporta)
3. Ative **"Always Use HTTPS"** (recomendado)

### 4. Verifique Funcionamento
- Acesse seu domínio no navegador
- Deve mostrar seu site
- Verifique se aparece o cadeado SSL (🔒) na barra de endereços

---

## Problemas Comuns

### DNS não propagou após 24h
- Aguarde mais algumas horas
- Verifique se os nameservers estão corretos: `xxx.cloudflare.com`

### Site não carrega (erro 404/502)
- Verifique se os registros DNS estão corretos
- Confirme que seu hospedeira tem o site configurado para o domínio
- Aguarde alguns minutos após criar registros DNS

### Erro de SSL/certificado
- No Cloudflare: SSL/TLS → Overview → "Overview" → espere o certificado emitir (pode demorar até 24h)
- Limpe cache do navegador

---

## Coisas Opcionais Depois

- Page Rules (redirecionamentos, cache)
- Firewall Rules (bloquear IPs, países)
- Analytics (grátis no plano Cloudflare)
- RegistrarAuto-renew: ative para não perder domínio

---

## Importante
- **Plano gratuito da Cloudflare é suficiente** para sites estáticos
- Não é necessário assinar nenhum plano pago
- Você pode fazer tudo isso gratuitamente
