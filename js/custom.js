var galleryThumbs = new Swiper('.detail__gallery__thumbs', {
  direction: 'vertical',
  spaceBetween: 10,
  slidesPerView: 3,
  loop: false,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: false,
  breakpoints: {
    576: {
      slidesPerView: 5
    }
  }
});
var galleryTop = new Swiper('.detail__gallery', {
  loop: false,
  thumbs: {
    swiper: galleryThumbs,
  },
});


$(function() {
  $(".detail__gallery").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  });

  $(".detail__tabs .tab_item").not(":first").hide();
  $(".detail__tabs .tab").click(function() {
    $(".detail__tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".detail__tabs .tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

  $(".to-chars").click(function() {
    $(".detail__tabs .tab").removeClass("active").eq($('.tab.chars').index()).addClass("active");
    $(".tab_item").hide().eq($('.tab.chars').index()).fadeIn()
  }).eq(0).addClass("active");

  $(".ordering__tabs .tab_item").not(":first").hide();
  $(".ordering__tabs .tab").click(function() {
    $(".ordering__tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".ordering__tabs .tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

  $(".paying__tabs .tab_items").not(":first").hide();
  $(".paying__tabs .tab").click(function() {
    $(".paying__tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".paying__tabs .tab_items").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

})

function counterUp () {
  $val = parseInt(document.getElementById('counter__value').value)
  document.getElementById('counter__value').value = $val + 1
}
function counterDown () {
  $val = parseInt(document.getElementById('counter__value').value)
  if($val !== 0 && $val !== 1) {
    document.getElementById('counter__value').value = $val - 1
  }
}