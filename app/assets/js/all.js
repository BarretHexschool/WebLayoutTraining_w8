$(function() {
  console.log('NFT');

});


document.querySelector('.nav-hamburger').addEventListener('click', function () {
document.querySelector('.fa-xmark').classList.toggle('d-none');
document.querySelector('.fa-bars').classList.toggle('d-none');
  });


    const swiper = new Swiper('.swiper', {
    loop: true,
    speed:500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    centeredSlides:true,
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: ".artist-swiper-pagination",
      clickable: true,
    },
    effect: 'slide',
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    grabCursor: true,
  });


  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 160,
    stamp: '.stamp'
  });
  