const swiper = new Swiper(".mainSlider", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1500,
    fadeEffect: true,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
    }
});