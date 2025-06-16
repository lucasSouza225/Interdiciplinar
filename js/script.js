// funçao responsável por tornar o menu responsivo 
function btnResponsivo() {
  // obtém o botão do menu pelo id menuBtn
  let menuBtn = document.getElementById('menuBtn');
  // obtém o menu que será exibido ou ocultado no modo mobile
  let mobileMenu = document.getElementById('mobileMenu');
  // Verifica se os dois elementos existem na página
  if (menuBtn && mobileMenu) {
    // Adiciona um ouvinte de evento de clique no botão do menu
    menuBtn.addEventListener('click', () => {
        
      // alterna a classe 'active' no menu mobile

      mobileMenu.classList.toggle('active');
    });
          // 'active' isso serve para mostrar ou esconder o menu, dependendo do CSS associado à classe 
  }
}

// Executa a função btnResponsivo assim que o conteúdo da página for carregado
document.addEventListener('DOMContentLoaded', btnResponsivo);
