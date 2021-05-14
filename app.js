function navSlide() {
  const burger = document.querySelector(".burger");
  const navContent = document.querySelector(".nav-list");

  burger.addEventListener("click", () => {
    navContent.classList.toggle("toggle");
  });
}

function main() {
  navSlide();
}

main();
