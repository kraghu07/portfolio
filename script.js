document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
    // Enable Bootstrap tooltips
    document.addEventListener('DOMContentLoaded', function () {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    });

    const starryNight = document.getElementById('starry-night');

    for (let i = 0; i < 100; i++) { 
      const star = document.createElement('div');
      // Randomly apply classes
      star.classList.add('star'); 
      if (Math.random() < 0.2) { 
        star.classList.add('star-big'); 
      }
      if (Math.random() < 0.1) { 
        star.classList.add('star-small'); 
      }
      if (Math.random() < 0.3) { 
        star.classList.add('star-red'); 
      }
      if (Math.random() < 0.15) { 
        star.classList.add('star-blue'); 
      }
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      starryNight.appendChild(star);
    }