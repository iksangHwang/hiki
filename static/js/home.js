$(function() {
  $('.history .history-years-arrow').on('click', function() {
  })

  // 문의 이벤트
  $('.business-contact-button').on('click', function() {
    $(this).closest('.business-contact').find('.business-contact-modal').css('display', 'block')
  })
  $('.business-contact-modal .header-area img').on('click', function() {
    $(this).closest('.business-contact-modal').css('display', 'none');
  })

  // 파트너사 스크롤 이벤트)
  start();

  // 핵심 역량 마우스 오버 이벤트
  $('.ability-item').on('click', function() {
    $('.ability-item-content').addClass('active').css('display','block');

  })
  $('.ability-item').on('mouseleave', function() {
    $('.ability-item-content').removeClass('active').css('display','none');
  })
  // if ($('.ability-item').hasClass('active')) {
  //   $('.ability-item-content').css('display','block');
  // } else {
  //   $('.ability-item-content').css('display','none');
  // }



  // 사업 연혁 이벤트
  $('.history-years-arrow').on('click', function() {
    var current = parseInt($('.history-year-item.active').text());

    if ($(this).hasClass('arrow-prev')) {
      $('.history-year-item.year-prev').text(current - 2);
      $('.history-year-item.active').text(current - 1);
      $('.history-year-item.year-next').text(current);
    } else {
      $('.history-year-item.year-prev').text(current);
      $('.history-year-item.active').text(current + 1);
      $('.history-year-item.year-next').text(current + 2);
    }
  })

  // 사무실 위치 탭 클릭 시
  $('.location-tab-item').on('click', function() {
    $(this).parent().find('.location-tab-item').removeClass('active');
    $(this).addClass('active');

    var base = $(this).parent().parent().find('.location-content');
    var index = parseInt($(this).index()) + 1;
    base.find('.location-content-item').removeClass('active');
    base.find('.location-content-item:nth-child(' + index.toString() + ')').addClass('active');
    $('.location-map .map').removeClass('active')
      $('.location-map .map[data-value="' + $(this).attr('data-value') + '"]').addClass('active')
  })

    $('.sitemap-btn').on('click', function () {
        $('body').addClass('back-cover')
        $('.navigation-sitemap').show()
    })

    $('.sitemap-close-btn').on('click', function () {
        $('body').removeClass('back-cover')
        $('.navigation-sitemap').hide()
    })
    $('.navigation-bottom .item').hover(
        function () {
            $('.hover-menu').css('display', 'flex')
        }
    )
    $('.hover-menu').hover(
        function () {

        },
        function () {
            $('.hover-menu').css('display', 'none')
        }
    )

    // // 스마트팩토리 제품 캐러셀
    // $('.smart-environment-list').owlCarousel({
    //   nav: true,
    //   navText: ["<div class='smart-environment-arrow left'><img src='../static/images/arrow-smart.png'></div>", '<div class="smart-environment-arrow right"><img src="../static/images/arrow-smart.png"></div>']
    // })
})

function start() {
  $('.partners-slide .partners').animate({
    'right': '110%'
  }, 30000, 'linear', function() {
    $('.partners-slide .partners').css('right', '0');
    start();
  });
}
//
//
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('header').outerHeight();
//
// $(window).scroll(function(event){
//     didScroll = true;
// });
//
// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);
//
// function hasScrolled() {
//     var st = $(this).scrollTop();
//
//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
//
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('.navigation-bottom').hide();
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             $('.navigation-bottom').show();
//         }
//     }
//
//     lastScrollTop = st;
// }
