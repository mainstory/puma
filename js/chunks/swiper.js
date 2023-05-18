function swiper() {

   new Swiper('.main-block__slider.swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      // grabCursor: true,
      allowTouchMove: false, 
      loop: true,
      speed: 1200,
      autoHeight: true,
      autoplay: {
         delay: 3500,
      },

      navigation: {
         nextEl: '.main-block .swiper-button-next',
         prevEl: '.main-block .swiper-button-prev'
      },

   })
   new Swiper('.testimonials .swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      // grabCursor: true,
      allowTouchMove: false, 
      speed: 1200,
      autoHeight: true,
      autoplay: {
         delay: 3500,
      },

      navigation: {
         nextEl: '.testimonials .swiper-button-next',
         prevEl: '.testimonials .swiper-button-prev'
      },

   })



}
export { swiper }