const options = {
    threshold: 0.5 // The percentage of the target's visibility needed before the callback is invoked
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('p').forEach((p, i) => {
          setTimeout(() => p.style.opacity = 1, 50 * i); // Set the opacity of each paragraph after a certain delay
        });
        observer.unobserve(entry.target); // Stop observing the target after it is in view
      }
    });
  }, options);
  
  observer.observe(document.querySelector('#typewriter')); // Observe the target element
  