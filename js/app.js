window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {

    loader.classList.add("loader-hidden");

  }, 1200);

});

/* REVEAL */

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;

    const revealTop =
      element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      element.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealElements);

revealElements();

/* NAVBAR EFFECT */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.style.background =
      "rgba(0,0,0,.45)";

  }

  else{

    navbar.style.background =
      "rgba(0,0,0,.2)";

  }

});