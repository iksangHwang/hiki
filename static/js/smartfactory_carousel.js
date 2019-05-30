$(function () {
    // 스마트팩토리 제품 캐러셀
    $('.smart-environment-list').owlCarousel({
        nav: true,
        items: 3,
        margin: 32,
        navText: ["<div class='smart-environment-arrow left'><img src='../static/images/arrow-smart.png'></div>", '<div class="smart-environment-arrow right"><img src="../static/images/arrow-smart.png"></div>'],
        responsiveClass:true,
        responsive: {
            600: {
                items: 2,
            },
            1280: {
                items: 3
            }
        }
    })
})