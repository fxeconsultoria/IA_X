# Deploy no Vercel - IA_X Gestão e Tecnologia

## 🚀 Guia Completo de Deploy

### Pré-requisitos
- Conta no Vercel (vercel.com)
- Projeto com build criado (pasta `dist/`)

### Método 1: Deploy via Interface Web (Recomendado)

1. **Acesse o Vercel**
   - Vá para https://vercel.com
   - Faça login com GitHub, GitLab ou email

2. **Importe o Projeto**
   - Clique em "New Project"
   - Faça upload da pasta do projeto ou conecte via Git

3. **Configurações de Build**
   - Framework Preset: `Vite`
   - Build Command: `pnpm run build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`

4. **Deploy**
   - Clique em "Deploy"
   - Aguarde o processo (2-3 minutos)
   - Receba a URL do site

### Método 2: Deploy via CLI

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Fazer login
vercel login

# 3. Navegar para o projeto
cd /caminho/para/iasm-website

# 4. Deploy
vercel --prod

# 5. Seguir as instruções no terminal
```

### Método 3: Deploy via GitHub (Automático)

1. **Criar Repositório GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - IA_X Gestão e Tecnologia"
   git remote add origin https://github.com/seu-usuario/ia-x-website.git
   git push -u origin main
   ```

2. **Conectar ao Vercel**
   - No Vercel, clique em "Import Git Repository"
   - Selecione o repositório criado
   - Configure as opções de build
   - Deploy automático a cada push

### ⚙️ Configurações Importantes

#### Variáveis de Ambiente (se necessário)
```
VITE_WHATSAPP_NUMBER=5511999999999
VITE_COMPANY_EMAIL=contato@iax-gestao.com.br
```

#### Redirects e Rewrites
Criar arquivo `vercel.json` na raiz:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 🔧 Troubleshooting

#### Erro de Build
- Verificar se todas as dependências estão no `package.json`
- Confirmar que o comando `pnpm run build` funciona localmente

#### Erro 404
- Verificar se o Output Directory está configurado como `dist`
- Adicionar arquivo `vercel.json` para SPAs

#### Performance
- Imagens otimizadas automaticamente pelo Vercel
- CDN global incluído
- HTTPS automático

### 📊 Monitoramento

#### Analytics
- Ativar Vercel Analytics no dashboard
- Monitorar visitantes e performance

#### Logs
- Acessar logs de build e runtime no dashboard
- Debugar erros em tempo real

### 🔄 Atualizações

#### Deploy Manual
1. Fazer alterações no código
2. Executar `pnpm run build`
3. Fazer novo deploy via CLI ou interface

#### Deploy Automático (GitHub)
1. Fazer push para o repositório
2. Deploy automático será executado
3. Verificar status no dashboard

### 📱 Domínio Personalizado

1. **Adicionar Domínio**
   - No dashboard do projeto
   - Ir em "Settings" > "Domains"
   - Adicionar domínio personalizado

2. **Configurar DNS**
   - Apontar CNAME para `cname.vercel-dns.com`
   - Ou A record para IP do Vercel

3. **SSL Automático**
   - Certificado SSL gerado automaticamente
   - HTTPS forçado por padrão

### ✅ Checklist Final

- [ ] Build local funcionando
- [ ] Todas as imagens carregando
- [ ] Links funcionando
- [ ] Formulário testado
- [ ] WhatsApp button funcionando
- [ ] Responsividade verificada
- [ ] SEO tags configuradas
- [ ] Deploy realizado
- [ ] URL funcionando
- [ ] Domínio configurado (opcional)

### 🆘 Suporte

Em caso de problemas:
1. Verificar documentação oficial: https://vercel.com/docs
2. Consultar logs de build no dashboard
3. Testar build localmente primeiro
4. Verificar configurações de framework

---

**Projeto**: IA_X Gestão e Tecnologia Website  
**Tecnologia**: React + Vite  
**Hospedagem**: Vercel  
**Status**: Pronto para deploy

