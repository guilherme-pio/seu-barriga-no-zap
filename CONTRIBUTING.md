# 🤝 Como Contribuir / How to Contribute

---

## 🇧🇷 Português

Ficou com uma ideia genial de como perturbar um devedor? Manda ver! Veja abaixo como adicionar sua solução ao repositório.

### Passo a passo

**1. Fork o repositório**

Clique em **Fork** lá no canto superior direito do GitHub.

**2. Clone o seu fork**

```bash
git clone https://github.com/SEU-USUARIO/seu-barriga-do-zap.git
cd seu-barriga-do-zap
```

**3. Crie a pasta da sua solução**

As soluções ficam dentro de `solucoes/` e seguem o padrão:

```
solucoes/
└── NN-nome-da-solucao/
    ├── README.md        ← obrigatório
    └── (seus arquivos)  ← código, configs, etc.
```

- `NN` = próximo número disponível (ex: `02`, `03`...)
- `nome-da-solucao` = nome curto em kebab-case (ex: `python-selenium`, `n8n-flow`, `ai-agent`)

**Exemplo:**
```
solucoes/02-python-selenium/
solucoes/03-n8n-workflow/
solucoes/04-ai-agent-langchain/
```

**4. Escreva o README da sua solução**

Cada solução precisa de um `README.md` com pelo menos:

```markdown
# 🐛 [Nome da Solução]

Breve descrição do que faz e como funciona.

## Requisitos
- O que precisa estar instalado/configurado

## Como usar
Passo a passo claro

## Configuração
Quais variáveis/parâmetros editar

## Demo (opcional)
Print, GIF ou vídeo funcionando
```

**5. Abra um Pull Request**

```bash
git add .
git commit -m "feat: adiciona solucao-NN-nome-da-solucao"
git push origin main
```

Depois abra o PR no GitHub descrevendo sua solução. Use o título no formato:  
`feat: adiciona solucao-NN-nome-da-solucao`

---

### 💡 Ideias de soluções

Sem inspiração? Aqui vão algumas ideias:

- 🤖 Agente de IA que adapta o tom da cobrança com base nas respostas
- 🔁 Fluxo no n8n com integração de calendário
- 🐍 Bot em Python com Selenium/Playwright
- 📱 Shortcut do iOS/Android
- 🌐 Extensão de navegador
- ⚙️ Script com a API oficial do WhatsApp Business
- 🎭 Bot que manda memes progressivamente mais dramáticos

---

## 🇺🇸 English

Got a brilliant idea for annoying a debtor? Go for it! Here's how to add your solution to the repo.

### Step by step

**1. Fork the repository**

Click **Fork** in the top-right corner of GitHub.

**2. Clone your fork**

```bash
git clone https://github.com/YOUR-USERNAME/seu-barriga-do-zap.git
cd seu-barriga-do-zap
```

**3. Create your solution folder**

Solutions live inside `solucoes/` and follow this pattern:

```
solucoes/
└── NN-solution-name/
    ├── README.md        ← required
    └── (your files)     ← code, configs, etc.
```

- `NN` = next available number (e.g., `02`, `03`...)
- `solution-name` = short kebab-case name (e.g., `python-selenium`, `n8n-flow`, `ai-agent`)

**4. Write your solution's README**

Each solution needs a `README.md` with at least:

```markdown
# 🐛 [Solution Name]

Brief description of what it does and how it works.

## Requirements
- What needs to be installed/configured

## How to use
Clear step-by-step instructions

## Configuration
Which variables/parameters to edit

## Demo (optional)
Screenshot, GIF or video of it working
```

**5. Open a Pull Request**

```bash
git add .
git commit -m "feat: add solution-NN-solution-name"
git push origin main
```

Then open a PR on GitHub describing your solution. Use the title format:  
`feat: add solution-NN-solution-name`

---

### 💡 Solution ideas

No inspiration? Here are some ideas:

- 🤖 AI agent that adapts the tone based on replies
- 🔁 n8n workflow with calendar integration
- 🐍 Python bot with Selenium/Playwright
- 📱 iOS/Android Shortcut
- 🌐 Browser extension
- ⚙️ Script using the official WhatsApp Business API
- 🎭 Bot that sends progressively more dramatic memes
