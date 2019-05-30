$(function () {
    var ir_qna_base = $('.ir-qna-container')
    ir_qna_base.find('.qna-tab li').on('click', function () {
        ir_qna_base.find('.qna-tab li').removeClass('active')
        $(this).addClass('active')
    })

    var ir_faq_base = $('.ir-faq-container')
    ir_faq_base.find('.qna-tab li').on('click', function () {
        ir_faq_base.find('.qna-tab li').removeClass('active')
        $(this).addClass('active')
    })

    var history_base = $('.history-container')
    history_base.find('.history-list .item .subject-wrapper .subject .icon-wrapper').on('click', function () {

        if($(this).hasClass('down')) {
            $(this).closest('.item').find('.list-wrapper').show()
            $(this).removeClass('down')
        }else{
            $(this).closest('.item').find('.list-wrapper').hide()
            $(this).addClass('down')
        }
    })

    var history_old_base = $('.history-old-container')
    history_old_base.find('.history-list .item .subject-wrapper .subject .icon-wrapper').on('click', function () {

        if($(this).hasClass('down')) {
            $(this).closest('.item').find('.list-wrapper').show()
            $(this).removeClass('down')
        }else{
            $(this).closest('.item').find('.list-wrapper').hide()
            $(this).addClass('down')
        }
    })

    var contactus_base = $('.contactus-container')
    contactus_base.find('.tab-wrapper .tab li').on('click', function () {
        contactus_base.find('.tab-wrapper .tab li').removeClass('active')
        $(this).addClass('active')
        var data_id = $(this).attr('data-id')
        contactus_base.find('.tab-content').removeClass('active')
        contactus_base.find(".tab-content[data-id='" + data_id + "']").addClass('active')
    })

    var mypage_edu_list = $('.education-accept-container')
    var target = mypage_edu_list.find('.table-wrapper .custom-table .custom-table-body .body-row')
    target.find('.edit-dummy').on('click', function () {
        $(this).parent().find('.edit-btn').toggle()
    })

    var mobile_nav_menu = $('.mobile-menu')
    mobile_nav_menu.find('.folding-subject').on('click', function () {

        if($('.folding-subject').hasClass('.down') {
            // $(this).closest('.menu__folding__list').show();
            $(this).find('.icon-wrapper').css({'transform': 'rotate(-180deg)'})
            $(this).removeClass('.down');
        }else{
            // $(this).closest('.menu__folding__list').hide();
            $(this).find('.icon-wrapper').css({'transform': 'rotate(0deg)'})
            $(this).addClass('.down');
        }


    // var mobile_nav_menu = $('.mobile-menu')
    // mobile_nav_menu.find('folding-subject').addClass('.down')
    // $('.folding-subject').click(function(){
    //   $(this).css({'transform': 'rotate(-180deg)'})
    // })


    })
)





// function folding_click() {
//   // alert("버튼을 눌렀습니다.");
//   // addClass('down');
//   $('.folding-subject').find('.icon-wrapper').css({'transform': 'rotate(-180deg)'});
//
// }
