const observeElements = (elements, animationClass) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
};

observeElements(document.querySelectorAll(".slide-left"), "slide-in-left");
observeElements(document.querySelectorAll(".slide-right"), "slide-in-right");
