let index = 0;

let slides = document.querySelectorAll(".slide");

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active");
    if (idx === i) slide.classList.add("active");
  });
}

setInterval(() => {
  index = (index + 1) % slides.length;

  showSlide(index);
}, 4000);

document.getElementById("menuBtn").addEventListener("click", () => {
  let menu = document.getElementById("mobileMenu");

  menu.classList.toggle("active");
});
