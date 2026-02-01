const backToTopBtn = document.getElementById("backToTop");
const heroSection = document.querySelector(".heroCard");

window.addEventListener("scroll", () => {
  const heroBottom = heroSection.offsetHeight;

  if (window.scrollY > heroBottom) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
});




