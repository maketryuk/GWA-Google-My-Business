"use strict";

AOS.init({
  once: true,
  offset: -50,
  disable: window.innerWidth < 768
});

var circle = new CircularProgressBar("progress");

$('.accordion__title').click(function () {
  $(".accordion__text").not($(this).next()).slideUp(300);
  $(this).next().slideToggle(300);
  $(".accordion__item").not($(this).closest(".accordion__item")).removeClass("active");
  $(this).closest(".accordion__item").toggleClass("active");
});

$('.results__trigger').on('click', function (e) {
  e.preventDefault();
  var sel = this.getAttribute('data-toggle-target');
  $('.results-card').removeClass('active').filter(sel).addClass('active');
  $('.results__trigger').removeClass('active').filter(sel).addClass('active');
});

var reviewsSlider = new Swiper('.reviews-slider', {
  spaceBetween: 0,
  centeredSlides: true,
  slideToClickedSlide: true,
  navigation: {
    nextEl: ".reviews-next",
    prevEl: ".reviews-prev"
  },
  breakpoints: {
    992: {
      slidesPerView: 3
    },
    320: {
      slidesPerView: 1
    }
  }
});

reviewsSlider.slideTo(1, false, false);

var visitorsSlider = new Swiper('.visitors-slider', {
  spaceBetween: 40,
  slidesPerView: 1,
  slideToClickedSlide: true,
  pagination: {
    el: ".visitors-pagination",
    clickable: true
  }
});

var weSlider = new Swiper('.we-slider', {
  spaceBetween: 0,
  centeredSlides: true,
  slideToClickedSlide: true,
  pagination: {
    el: ".we-pagination",
    clickable: true
  },
  breakpoints: {
    992: {
      slidesPerView: 3
    },
    320: {
      slidesPerView: 1
    }
  }
});

weSlider.slideTo(1, false, false);