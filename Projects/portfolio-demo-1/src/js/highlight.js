window.addEventListener('scroll', function() {
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
  
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove(classToRemove);
        });
        navLinks[index].classList.add(classToRemove);
      }
    });
  });
  