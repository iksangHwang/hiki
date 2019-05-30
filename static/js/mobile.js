$(function () {
    $('.menu-open').on('click', function () {
        $(this).hide()
        $('.menu-close').show()
        $('.mobile-menu').addClass('active')
        $('body').css('overflow', 'hidden')
    })

    $('.menu-close').on('click', function () {
        $(this).hide()
        $('.menu-open').show()
        $('.mobile-menu').removeClass('active')
        $('body').css('overflow', 'scroll')
    })


})