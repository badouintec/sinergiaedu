// Función para redirigir a home.html (si es necesaria la redirección)
function redirectToHome() {
    window.location.href = "home.html";
  }
  
  // Función para cerrar sesión (demo)
  function logout() {
    // Aquí se implementaría la lógica real de cierre de sesión
    window.location.href = "index.html";
  }
  
  // Funciones interactivas para la plataforma
  function startEvaluation() {
    alert("Iniciando evaluación vocacional...");
    // Aquí se puede redirigir a una página o mostrar un modal de evaluación
  }
  
  function scheduleMentoring() {
    alert("Abriendo opciones para agendar mentoría...");
    // Implementar lógica para agendar mentoría
  }
  
  function viewTrends() {
    alert("Mostrando tendencias del mercado laboral...");
    // Implementar lógica para visualizar análisis del mercado
  }
  
  function chatNow() {
    alert("Abriendo chat en vivo con el asistente virtual...");
    // Implementar lógica para iniciar chat
  }
  
  function viewStories() {
    alert("Mostrando historias inspiradoras...");
    // Implementar lógica para mostrar testimonios
  }
  
  function exploreUniversities() {
    alert("Explorando universidades...");
    // Implementar lógica para ver información de universidades
  }
  
  function viewEvaluationDetails() {
    alert("Mostrando detalles de tu evaluación...");
    // Implementar lógica para ver detalles
  }
  
  function viewJobOpportunities() {
    alert("Mostrando oportunidades laborales...");
    // Implementar lógica para ver vacantes
  }
  
  function viewMentoringSession() {
    alert("Mostrando detalles de tu próxima mentoría...");
    // Implementar lógica para ver detalles de la sesión
  }
  
  function updateProfile() {
    alert("Actualizando perfil...");
    // Implementar lógica para actualizar el perfil del usuario
  }
  
  // Inicialización de la gráfica de estadísticas laborales y de mercado usando Chart.js
  function initChart() {
    const ctx = document.getElementById('marketChart');
    if (!ctx) return; // Si no existe la gráfica (por ejemplo, en index) no hace nada
    const chartCtx = ctx.getContext('2d');
    new Chart(chartCtx, {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
          label: 'Vacantes Publicadas',
          data: [10, 12, 8, 15, 13],
          backgroundColor: '#FF6F00',
          borderColor: '#e65c00',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        animation: {
          duration: 1500,
          easing: 'easeOutQuart'
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: '#1976D2' }
          },
          x: {
            ticks: { color: '#1976D2' }
          }
        },
        plugins: {
          legend: {
            labels: { color: '#1976D2' }
          }
        }
      }
    });
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
  window.addEventListener('load', () => {
    handleScroll();
    initChart();
  });
  
  // Activa el enlace del menú según la sección visible
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav ul li a');
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