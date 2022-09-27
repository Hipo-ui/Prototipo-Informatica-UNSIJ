var swiper = new Swiper(".swiperHero", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
    }
});

var swiper = new Swiper(".swiperPictures", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    effect: "fade",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
    }
});

var swiper = new Swiper(".swiperMisionVision", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    centeredSlides: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiperAvisos", {
    slidesPerView: 1,
    spaceBetween: 10,
    keyboard: {
        enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        640: { /* sm */
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: { /* md */
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: { /* lg */
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });