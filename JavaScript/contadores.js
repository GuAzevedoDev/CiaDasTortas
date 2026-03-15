const contadores = document.querySelectorAll('.contador');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // trigger when 50% visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetElement = entry.target;
      const targetValue = +targetElement.getAttribute('data-target');
      
      let startTimestamp = null;
      const duration = 2000; // 2 seconds animation
      
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function for smoother end (easeOutExpo)
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentValue = Math.floor(easeOutExpo * targetValue);
        
        targetElement.innerText = currentValue.toLocaleString('pt-BR');
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          targetElement.innerText = targetValue.toLocaleString('pt-BR');
        }
      };
      
      window.requestAnimationFrame(step);
      
      // Stop observing once it has run
      observer.unobserve(targetElement);
    }
  });
}, observerOptions);

contadores.forEach(contador => {
  observer.observe(contador);
});
