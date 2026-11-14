# 🎄 Natal LeTable - Landing Page de Conversão (Vite + Vercel)

Landing Page oficial de final de ano da **LeTable**, desenvolvida em **Vite**, focada em conversão, elegância visual e experiência fluida para o cliente.

Pronta para deploy imediato na **Vercel** com 0 configurações manuais!

---

## 🚀 Como Rodar Localmente

1. **Instalar as dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse no navegador: `http://localhost:3000`

3. **Testar o build de produção:**
   ```bash
   npm run build
   npm run preview
   ```

---

## ☁️ Como Fazer Deploy na Vercel

### Opção 1: Pelo painel web da Vercel (Recomendado via GitHub)
1. Suba este repositório para o seu **GitHub**:
   ```bash
   git add .
   git commit -m "feat: landing page de natal letable em vite"
   git push origin main
   ```
2. Acesse [vercel.com](https://vercel.com) e clique em **Add New Project**.
3. Importe o repositório `Natal-LeTable`.
4. O Vercel detectará automaticamente as configurações do **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **Deploy**! Em menos de 1 minuto seu site estará no ar com HTTPS gratuito.

### Opção 2: Pela CLI da Vercel
```bash
npx vercel
```
Para deploy em produção:
```bash
npx vercel --prod
```

---

## ⚙️ Configuração do WhatsApp

Abra o arquivo [src/main.js](file:///c:/Users/Kainã%20Freitas/Documents/GitHub/Natal-LeTable/src/main.js) e altere a constante na linha 14 com o número da LeTable (apenas dígitos, DDI + DDD + Telefone):

```javascript
export const WHATSAPP_NUMBER = "5511999999999";
```

---

## 📁 Estrutura do Projeto

```text
Natal-LeTable/
├── public/
│   └── favicon.svg           # Ícone festivo personalizado
├── src/
│   ├── main.js               # Lógica do builder de WhatsApp, FAQ, menu e exports
│   └── style.css             # Estilos luxuosos, tipografia e responsividade
├── index.html                # Ponto de entrada do Vite e estrutura semântica
├── package.json              # Dependências e scripts do Vite
├── vite.config.js            # Configuração do bundler Vite
├── vercel.json               # Configuração otimizada para a Vercel
└── .gitignore                # Ignora node_modules e dist
```
