// Animação do Header no Scroll
const header = document.querySelector(".header-bg");
const main = document.querySelector(".main-bg");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let mainBottom = main ? main.offsetHeight : 0;

  if (scrollTop > mainBottom) {
    header.classList.add("header-scrolled");

    if (scrollTop > lastScrollTop) {
      // Scroll para baixo: esconde
      header.classList.remove("header-visible");
      header.classList.add("header-hidden");
    } else {
      // Scroll para cima: mostra
      header.classList.remove("header-hidden");
      header.classList.add("header-visible");
    }
  } else {
    // Dentro da seção main
    header.classList.remove(
      "header-scrolled",
      "header-visible",
      "header-hidden",
    );
  }

  lastScrollTop = Math.max(0, scrollTop);
});

// Fechar menu mobile ao clicar em um link
const menuLinks = document.querySelectorAll(".menu-links-container a");
const menuToggle = document.getElementById("menu-toggle");

if (menuToggle) {
  menuToggle.addEventListener("change", () => {
    if (menuToggle.checked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuToggle && menuToggle.checked) {
      menuToggle.checked = false;
      document.body.style.overflow = "";
    }
  });
});
