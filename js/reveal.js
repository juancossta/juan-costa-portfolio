const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach(reveal => {

    const windowHeight = window.innerHeight;

    const elementTop = reveal.getBoundingClientRect().top;

    const elementVisible = 100;

    if(elementTop < windowHeight - elementVisible){

      reveal.classList.add("active");

    }

  });

});