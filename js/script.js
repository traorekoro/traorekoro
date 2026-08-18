/**
 * WEBSITE: #!
 * TWITTER: #!
 * FACEBOOK: #!
 * GITHUB: #!
 */

(function ($) {
  "use strict";

  AOS.init({
    once: true,
  });

  // -----------------------
  // Progress Bar--------------------
  //
  //

  $(window).on("load", function () {
    $(".progress-bar").each(function () {
      var width = $(this).data("percent");
      $(this).css({ transition: "width 3s" });
      $(this).appear(function () {
        console.log("hello");
        $(this).css("width", width + "%");
        $(this).find(".count").countTo({
          from: 0,
          to: width,
          speed: 3000,
          refreshInterval: 50,
        });
      });
    });
  });
  // Existing Owl Carousel
  $(".owl-carousel")
    .not(".tech-carousel, .social-carousel, .branding-carousel")
    .owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 8000,
      dots: false,
    });
  // Instagram Preview
  $(".tech-carousel, .social-carousel, .branding-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    smartSpeed: 700,
    dots: true,
    nav: false,
    mouseDrag: true,
    touchDrag: true,
  });
  /* ==========================================
   Instagram Navigation Arrows
========================================== */

  $(".instagram-card").each(function () {
    var owl = $(this).find(".owl-carousel");

    $(this)
      .find(".next")
      .on("click", function () {
        owl.trigger("next.owl.carousel");
      });

    $(this)
      .find(".prev")
      .on("click", function () {
        owl.trigger("prev.owl.carousel");
      });
  });

  // Shuffle js filter and masonry
  var Shuffle = window.Shuffle;
  var jQuery = window.jQuery;

  var myShuffle = new Shuffle(document.querySelector(".shuffle-wrapper"), {
    itemSelector: ".shuffle-item",
    buffer: 1,
  });

  jQuery('input[name="shuffle-filter"]').on("change", function (evt) {
    var input = evt.currentTarget;
    if (input.checked) {
      myShuffle.filter(input.value);
    }
  });

  $(".portfolio-gallery").each(function () {
    $(this)
      .find(".popup-gallery")
      .magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
  });
})(jQuery);
