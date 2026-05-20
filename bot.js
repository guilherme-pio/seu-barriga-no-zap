// ============================================================
//  ⚠️  AVISO LEGAL / LEGAL DISCLAIMER
// ============================================================
//
//  Este script é um PROJETO CÔMICO E EDUCACIONAL.
//  This script is a COMEDIC AND EDUCATIONAL PROJECT.
//
//  O uso de bots no WhatsApp viola os Termos de Serviço da
//  plataforma e pode resultar no banimento permanente da sua
//  conta. Não recomendamos o uso real.
//
//  Using bots on WhatsApp violates the platform's Terms of
//  Service and may result in permanent account ban.
//  We do not recommend actual use.
//
//  Leia / Read: https://github.com/SEU-USUARIO/seu-barriga-do-zap/blob/main/DISCLAIMER.md
//
// ============================================================
//  Seu Barriga do Zap — Solução 01: Browser Console
//  WhatsApp Web — Disparador Automático de Mensagens
// ============================================================
//  Cole este script no console do WhatsApp Web (F12 → Console)
// ============================================================

// ▶ CONFIGURAÇÕES — edite aqui
const PHONES = [
  '5531999999999',   // DDI + DDD + número (sem + ou espaços)
  // '5521988888888', // adicione mais números se quiser
];

const MESSAGE = `Ei amigo, blz?
Me paga o que me deve!`;

const INTERVAL_MS = 60 * 60 * 1000; // intervalo entre ciclos (padrão: 1 hora)
// Exemplos:
//   30 * 60 * 1000  → 30 minutos
//   60 * 60 * 1000  → 1 hora
//   24 * 60 * 60 * 1000 → 24 horas

// ============================================================
//  FUNÇÕES AUXILIARES
// ============================================================

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Retorna o texto da última mensagem ENVIADA (message-out) na conversa aberta.
 * Retorna null se não encontrar nenhuma mensagem de texto enviada.
 */
function getLastSentText() {
  const outMsgs = Array.from(document.querySelectorAll('.message-out'));
  for (let i = outMsgs.length - 1; i >= 0; i--) {
    const copyable = outMsgs[i].querySelector('.copyable-text');
    if (copyable) {
      const span = copyable.querySelector('span[dir="ltr"]');
      if (span) return span.innerText.trim();
    }
  }
  return null;
}

/**
 * Abre o painel "New chat", busca o número e clica no contato.
 */
async function openChat(phone) {
  // 1. Clicar no botão "New chat"
  const newChatBtn = document.querySelector('[data-testid="new-chat-outline"]')?.closest('button');
  if (!newChatBtn) throw new Error('Botão "New chat" não encontrado.');
  newChatBtn.click();
  await sleep(1200);

  // 2. Digitar o número no campo de busca
  const searchInput = document.querySelector('input[placeholder="Search name or number"]');
  if (!searchInput) throw new Error('Campo de busca não encontrado.');
  searchInput.focus();
  searchInput.click();

  // Limpar campo anterior
  searchInput.select();
  document.execCommand('delete');
  await sleep(300);

  // Digitar o número caractere a caractere (garante que o React capture)
  for (const char of phone) {
    searchInput.focus();
    document.execCommand('insertText', false, char);
    await sleep(30);
  }
  await sleep(2000); // aguardar resultado da busca

  // 3. Clicar no primeiro resultado encontrado
  const contact = document.querySelector('[data-testid="cell-frame-container"]');
  if (!contact) throw new Error(`Nenhum contato encontrado para o número: ${phone}`);
  contact.click();
  await sleep(1500); // aguardar conversa carregar
}

/**
 * Digita a mensagem no campo de texto e clica em Enviar.
 * Suporta quebras de linha com \n.
 */
async function sendMessage(text) {
  const compose = document.querySelector('[data-testid="conversation-compose-box-input"]');
  if (!compose) throw new Error('Campo de mensagem não encontrado.');

  compose.focus();
  document.execCommand('selectAll', false);
  document.execCommand('delete', false);
  await sleep(200);

  // Inserir texto linha a linha (Shift+Enter para quebrar linha no WhatsApp)
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    document.execCommand('insertText', false, lines[i]);
    if (i < lines.length - 1) {
      compose.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Enter',
        shiftKey: true,
        bubbles: true,
      }));
      await sleep(100);
    }
  }
  await sleep(500);

  // Clicar no botão Enviar
  const sendBtn = document.querySelector('button[aria-label="Send"]');
  if (!sendBtn) throw new Error('Botão de envio não encontrado. Verifique se o texto foi inserido.');
  sendBtn.click();
  await sleep(800);
}

// ============================================================
//  LOOP PRINCIPAL
// ============================================================

let running = true;

/** Para o script a qualquer momento: execute stopBot() no console. */
window.stopBot = () => {
  running = false;
  console.log('[Bot] ⛔ Parado pelo usuário.');
};

async function runBot() {
  console.log(`[Bot] 🚀 Iniciado!`);
  console.log(`[Bot] 📋 Contatos: ${PHONES.length} | Intervalo: ${INTERVAL_MS / 1000}s`);
  console.log('[Bot] 💡 Para parar, execute: stopBot()');

  while (running) {
    for (const phone of PHONES) {
      if (!running) break;

      try {
        console.log(`[Bot] 📲 Abrindo conversa com ${phone}...`);
        await openChat(phone);

        const lastSent = getLastSentText();
        console.log(`[Bot] 💬 Última mensagem enviada: "${lastSent}"`);

        if (lastSent === MESSAGE) {
          console.log(`[Bot] ⏭️  Já foi cobrado — aguardando resposta de ${phone}.`);
        } else {
          console.log(`[Bot] ✉️  Enviando mensagem para ${phone}...`);
          await sendMessage(MESSAGE);
          console.log(`[Bot] ✅ Mensagem enviada para ${phone}!`);
        }
      } catch (err) {
        console.error(`[Bot] ❌ Erro ao processar ${phone}:`, err.message);
      }

      await sleep(1500); // pausa entre contatos
    }

    if (!running) break;

    console.log(`[Bot] ⏳ Aguardando ${INTERVAL_MS / 1000}s para o próximo ciclo...`);
    await sleep(INTERVAL_MS);
  }
}

runBot();
