document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const dropmenu = document.getElementById('dropmenu');
  
  menuIcon.addEventListener('click', function() {
    if (dropmenu.style.display === 'block') {
      dropmenu.style.display = 'none';
      menuIcon.innerHTML = '☰';
    } else {
      dropmenu.style.display = 'block';
      menuIcon.innerHTML = '✕';
    }
  });
  
  // Cierra el menú al hacer clic en un enlace
  document.querySelectorAll('#dropmenu a').forEach(link => {
    link.addEventListener('click', () => {
      dropmenu.style.display = 'none';
      menuIcon.innerHTML = '☰';
    });
  });
});
// Manejo de submenús en móvil
document.querySelectorAll('.search-program li').forEach(item => {
  if (item.querySelector('ul')) {
    item.classList.add('has-submenu');
    item.addEventListener('click', function(e) {
      if (window.innerWidth <= 767) {
        e.preventDefault();
        this.classList.toggle('active');
      }
    });
  }
});