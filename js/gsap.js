document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.move-element');
    const animateOnloadFromTop = document.querySelector('.animate-onload-from-top');
    const animateOnloadFromBottom = document.querySelector('.animate-onload-from-bottom');
    const fadeInElement = document.querySelector('.fade-in');

    // Mousemove-based animation for multiple elements using GSAP
    document.addEventListener('mousemove', (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      elements.forEach((element) => {
        gsap.to(element, {
          x: (mouseX - window.innerWidth / 2) * 0.02,
          y: (mouseY - window.innerHeight / 2) * 0.02,
          duration: 0.5,
          ease: 'easeInOut'
        });
      });
    });

     // Onload animation using GSAP
    gsap.from(animateOnloadFromTop, {
      opacity: 0,
      y: -100,
      duration: 1,
      ease: 'easeInOut'
    });

    gsap.from(animateOnloadFromBottom, {
        opacity: 0,
        y: 100,
        duration: 1.5,           // Increase duration for a smoother transition
        ease: 'easeInOut'       // Use a smoother easing function
      });

          // Set initial opacity to 0
    gsap.set(fadeInElement, { opacity: 0 });

    // Fade in animation using GSAP
    gsap.to(fadeInElement, {
      opacity: 1,        // Target opacity of 1 (fully visible)
      duration: 3,       // Animation duration in seconds
      ease: 'easeInOut' // Easing function
    });

  });
