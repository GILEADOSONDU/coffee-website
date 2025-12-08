const swiper = new Swiper(".container.swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Default for very small screens
  slidesPerView: 1,
  spaceBetween: 20,

  // Fix 2: correct breakpoints syntax
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    826: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
