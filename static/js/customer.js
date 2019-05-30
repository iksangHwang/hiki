$(function () {
    var base = $('.customer-container')
    base.find('.tab-wrapper .tab li').on('click', function () {
        $(this).parent().find('li').removeClass('active')
        $(this).addClass('active')
        base.find('.tab-wrapper .tab-content').removeClass('active')
        base.find('.tab-wrapper .tab-content[data-id="' + $(this).attr("data-id") + '"]').addClass('active')
    })

    $('.owl-carousel').owlCarousel({
        items: 4,
        nav: true,
        navText: ["<img src='../static/images/icons/right-arrow.png'>", "<img src='../static/images/icons/right-arrow.png'>"],
        responsiveClass:true,
        responsive: {
            600: {
                items: 3,
            },
        }
    })
})