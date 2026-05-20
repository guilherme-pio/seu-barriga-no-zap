# 🐛 Solução 01 — Browser Console

> **Tecnologia:** JavaScript (Console do Navegador)  
> **Dificuldade:** 🟢 Fácil  
> **Requisitos:** Só um navegador com WhatsApp Web aberto

Roda direto no console do WhatsApp Web. Sem instalação, sem dependências. Você cola o script, configura o número e a mensagem, e o bot fica mandando até a pessoa responder.

---

## Como funciona

O script abre a conversa com cada número configurado, verifica se a última mensagem enviada já é a mensagem de cobrança — se não for, manda novamente. Repete no intervalo definido até você parar ou a pessoa responder.

```
Bot inicia
  └─► Abre conversa com contato
        └─► Última mensagem enviada == mensagem de cobrança?
              ├─ Sim → pula (já foi cobrado, aguarda resposta)
              └─ Não → envia a mensagem
  └─► Aguarda o intervalo configurado
  └─► Repete...
```

---

## Como usar

**1. Abra o WhatsApp Web**

Acesse [web.whatsapp.com](https://web.whatsapp.com) e faça o login normalmente com o QR Code.

**2. Abra o Console do Navegador**

- **Chrome/Edge:** `F12` → aba **Console**
- **Firefox:** `F12` → aba **Console**
- **Safari:** Ative o menu Desenvolvedor em Preferências → Avançado → "Mostrar menu Desenvolvedor"

**3. Edite as configurações no script**

Abra o arquivo [`bot.js`](./bot.js) e edite as três variáveis no topo:

```js
const PHONES = [
  '5531999999999',  // DDI + DDD + número (sem + ou espaços)
];

const MESSAGE = `Ei amigo, me paga!`;

const INTERVAL_MS = 60 * 60 * 1000; // intervalo entre tentativas (padrão: 1 hora)
```

**4. Cole o script no Console e pressione Enter**

Copie todo o conteúdo do `bot.js`, cole no console e pressione `Enter`. O bot vai iniciar automaticamente.

**5. Para parar o bot**

No console, digite:

```js
stopBot()
```

---

## Configurações

| Variável | Tipo | Descrição |
|----------|------|-----------|
| `PHONES` | `string[]` | Lista de números no formato `DDI+DDD+número` |
| `MESSAGE` | `string` | Mensagem a ser enviada. Suporta quebras de linha com `\n` |
| `INTERVAL_MS` | `number` | Intervalo em milissegundos entre cada ciclo de envio |

### Exemplos de intervalo

```js
const INTERVAL_MS = 30 * 60 * 1000;  // 30 minutos
const INTERVAL_MS = 60 * 60 * 1000;  // 1 hora (padrão)
const INTERVAL_MS = 24 * 60 * 60 * 1000; // 24 horas
```

---

## ⚠️ Avisos importantes

- **Mantenha o navegador aberto** — o script para se você fechar ou recarregar a aba
- **Não feche o console** — isso também encerra o script
- O WhatsApp Web pode desconectar por inatividade; se isso ocorrer, o script vai retornar erro no próximo ciclo
- Use intervalos razoáveis (1h+) para não parecer spam

---

## Créditos

Solução original por [@guilhermepioo](https://github.com/guilhermepioo)
