$('.slider').slick({
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToScroll: 2,
    slidesToShow: 2,
    prevArrow: '.prev-arrow',
    nextArrow: '.next-arrow',
    variableWidth: true,
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 1410,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            slidesToScroll: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});