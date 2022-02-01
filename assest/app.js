$(document).ready(function(){
    // menu bar
    $('.menu-bar').click(function(){
        $('.nav-items').addClass('active');
    });
    $('.menu-close').click(function(){
        $('.nav-items').removeClass('active');
    });


    // watch video popup
    $('#watchVideo').click(function(){
      $('.watch_video_popup').addClass('show')
    });
      $('button.close').click(function(){
      $('.watch_video_popup').removeClass('show')
    });// watch video popup end
    
});

$('.works_slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1.1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      }
    ]
  });

  
  $('.testimonial_slider').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
// our portfolio page filter script

$(document).ready(function(){
  // filter button
  $('.filter_menu button').click(function(){
      const value = $(this).attr('data-filter');
      if(value == 'all'){
          $('.portfolio_card_box .items').show('1000').css({"transform":"scale(1)" , "transition" : "0.3s"});
      }
      else{
          $('.portfolio_card_box .items').not("." + value ).hide('1000').css({"transform":"scale(0.5)" , "transition" : "0.3s"});
          $('.portfolio_card_box .items').filter("." + value ).show('1000').css({"transform":"scale(1)" , "transition" : "0.3s"});
      }
  });

  // filter button addClass and removeClass script
    $('.filter_menu button').click(function(){
      $('button').removeClass('active');
      $(this).addClass('active');
    });
   
});

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 550) {
      $('#menu-container').addClass('fixed').slideDown( "1000" );;
  } else {
      $('#menu-container').removeClass('fixed');
  }
});
// clients logos

$('.clients_logos').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: '10px',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 6
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3
      }
    }
  ]
});


// clients logos end