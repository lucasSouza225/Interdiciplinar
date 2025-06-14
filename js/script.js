function iniciarMenuResponsivo() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }
}

// Executa a função ao carregar a página
document.addEventListener('DOMContentLoaded', iniciarMenuResponsivo);
