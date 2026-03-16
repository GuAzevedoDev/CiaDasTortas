const secoes = document.querySelectorAll("section[id], main[id], footer[id]");
const linksMenu = document.querySelectorAll("#menu a");

const menuObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");

      linksMenu.forEach((link) => {
        link.classList.remove("ativo");

        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("ativo");
        }
      });
    }
  });
}, {
  rootMargin: "-40% 0px -50% 0px",
  threshold: 0
});

secoes.forEach((secao) => {
  menuObserver.observe(secao);
});