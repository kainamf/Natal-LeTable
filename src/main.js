import './style.css';

/**
 * NATAL LETABLE - INTERATIVIDADE & CONVERSÃO
 * Projeto Vite configurado para Vercel
 */
export const WHATSAPP_NUMBER = "5521969886267";

/**
 * Função utilitária para abrir o WhatsApp
 */
export function abrirWhatsApp(mensagem) {
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}

/**
 * Envia mensagem direta sobre um serviço específico
 */
export function enviarWhatsAppServico(nomeServico) {
  const msg = `Olá! Estava navegando no site do Natal LeTable e gostaria de mais informações e um orçamento para: *${nomeServico}*. Como podemos prosseguir?`;
  abrirWhatsApp(msg);
}

/**
 * Solicitação rápida de catálogos em PDF
 */
export function solicitarPDF() {
  const msg = `Olá! Gostaria de receber os catálogos do Natal LeTable (Aluguel de Louças e Cardápio da Ceia) em formato *PDF* para o meu WhatsApp, por favor! ✨`;
  abrirWhatsApp(msg);
}

/**
 * Botão genérico de tirar dúvidas ou falar com a LeTable
 */
export function falarComAtendente() {
  const msg = `Olá, equipe LeTable! Gostaria de tirar algumas dúvidas sobre os serviços de Natal (louças, ambientação e ceia).`;
  abrirWhatsApp(msg);
}

// ============================================================
// MONTE SEU NATAL (BUILDER INTERATIVO)
// ============================================================

export function obterDadosFormulario() {
  const checkboxes = document.querySelectorAll('input[name="service"]:checked');
  const servicos = Array.from(checkboxes).map(cb => cb.value);
  
  const nome = document.getElementById('clientName')?.value.trim() || '';
  const data = document.getElementById('eventDate')?.value || 'Noite de Natal (24/12)';
  const convidados = document.getElementById('guestCount')?.value.trim() || '';

  return { servicos, nome, data, convidados };
}

export function gerarTextoMensagem(dados) {
  const { servicos, nome, data, convidados } = dados;

  let saudacao = nome ? `Olá, equipe LeTable! Meu nome é *${nome}*.` : `Olá, equipe LeTable!`;
  
  let textoServicos = '';
  if (servicos.length > 0) {
    textoServicos = servicos.map(s => `  • ${s}`).join('\n');
  } else {
    textoServicos = '  • [Selecione um ou mais serviços acima]';
  }

  let texto = `${saudacao}\n\n`;
  texto += `Gostaria de solicitar um orçamento para o *Natal LeTable* com interesse em:\n${textoServicos}\n\n`;
  texto += `🗓️ *Data prevista:* ${data}\n`;
  
  if (convidados) {
    texto += `👥 *Estimativa de convidados:* ${convidados}\n`;
  }

  texto += `\nPoderiam me enviar mais detalhes e disponibilidade de vagas? Aguardo retorno! ✨`;
  return texto;
}

export function atualizarMensagemPreview() {
  const previewElement = document.getElementById('messagePreviewText');
  if (!previewElement) return;

  const dados = obterDadosFormulario();
  const mensagem = gerarTextoMensagem(dados);
  previewElement.textContent = mensagem;
}

export function enviarFormularioWhatsApp() {
  const dados = obterDadosFormulario();
  
  if (dados.servicos.length === 0) {
    alert("Por favor, selecione pelo menos um dos serviços (Louças, Ambientação ou Ceia).");
    return;
  }

  const mensagem = gerarTextoMensagem(dados);
  abrirWhatsApp(mensagem);
}

// ============================================================
// FAQ ACCORDION INTERATIVO
// ============================================================
export function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Fecha todos os outros itens para um efeito mais limpo
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const btn = otherItem.querySelector('.faq-question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });

      // Alterna o estado do item clicado
      if (isOpen) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ============================================================
// MENU MOBILE & NAVEGAÇÃO
// ============================================================
export function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

// ============================================================
// EXPORTAÇÃO GLOBAL PARA EVENTOS INLINE DO HTML
// ============================================================
window.enviarWhatsAppServico = enviarWhatsAppServico;
window.solicitarPDF = solicitarPDF;
window.falarComAtendente = falarComAtendente;
window.atualizarMensagemPreview = atualizarMensagemPreview;
window.enviarFormularioWhatsApp = enviarFormularioWhatsApp;

// ============================================================
// INICIALIZAÇÃO AO CARREGAR
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initFAQ();
  initMobileMenu();
  atualizarMensagemPreview();

  // Scroll suave com fechamento de gavetas móveis
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
