$(function(){

    // banner slick =================
    $('#email').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        Infinity: true,
        speed: 1500,
        fade:true,
      });

    // sticky header =================
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if (scrolling > 200){
            $('.navbar').addClass('bg');
        }
        else{
            $('.navbar').removeClass('bg');
        }
    })

// slick slider banner ============
$('.handbags_part').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    });

// venobox ========================
$('.venobox').venobox();

// counter us js ==================
$('.counter').counterUp({
delay: 50,
time: 2000
});



// future slick ====================
$('.f_design_row').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    Infinity: true,
    speed: 1500,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
      ]
  });

  // price slick ==================
  $('.price_slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: false,
    arrows: false,
    dots: false,
    Infinity: true,
    speed: 1500,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
      ]
  });


  // footer slick ==================
  $('.footer_photo').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    Infinity: true,
    speed: 1500,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 6,
          }
        },
      ]
  });




})