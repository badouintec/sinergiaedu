// Función para redirigir a home.html al hacer clic en Demo Login
function redirectToHome() {
    window.location.href = "home.html";
  }
  
  // Efecto fade-in: agregar la clase 'show' al hacer scroll
  const fadeInElements = document.querySelectorAll('.fade-in');
  function handleScroll() {
    fadeInElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('show');
      }
    });
  }
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
  
  // Activa el enlace del menú según la sección visible
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.menu ul li a');
  function activateMenu() {
    let index = sections.length;
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
    navLinks.forEach(link => link.classList.remove('active'));
    if (navLinks[index]) {
      navLinks[index].classList.add('active');
    }
  }
  window.addEventListener('scroll', activateMenu);
  window.addEventListener('load', activateMenu);