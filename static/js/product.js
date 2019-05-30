var last_known_scroll_position = 0;

$(function(){
  // 제품 이미지 백그라운드 확장
  var height = $(document).outerHeight() + 75;
  $('.product-image-enlargement').css('height', height);

  // 제품 이미지 확대
  $('.product-content .product-detail-usage-image').on('click', function() {
    var title = $(this).attr('data-title');
    var key = $(this).attr('data-key');

    $('.product-image-enlargement .title').text(title)
    $('.product-image-enlargement').attr('data-key', key)
    $('.product-image-enlargement .product-image img').attr('src', $(this).find('img').attr('src'))

    var next = $(this).next()
    var prev = $(this).prev()
    if (next.length <= 0) {
      $('.product-image-enlargement .arrow.right').hide();
    }
    if (prev.length <= 0) {
      $('.product-image-enlargement .arrow.left').hide();
    }

    $('.product-image-enlargement').addClass('active');
  })

  $('.product-content .product-detail-example-image').on('click', function() {
    var title = $(this).attr('data-title');
    var key = $(this).attr('data-key');

    $('.product-image-enlargement .title').text(title)
    $('.product-image-enlargement').attr('data-key', key)
    $('.product-image-enlargement .product-image img').attr('src', $(this).find('img').attr('src'))

    var next = $(this).next()
    var prev = $(this).prev()
    if (next.length <= 0) {
      $('.product-image-enlargement .arrow.right').hide();
    }
    if (prev.length <= 0) {
      $('.product-image-enlargement .arrow.left').hide();
    }

    $('.product-image-enlargement').addClass('active');
  })

  $('.product-close').on('click', function() {
    $('.product-image-enlargement').removeClass('active');
  })

  $('.product-image-enlargement .arrow.left').on('click', function() {
    var key = $(this).closest('.product-image-enlargement').attr('data-key')
    var element = $('.product-detail-item-content').find('div[data-key=' + key + ']');

    var prev = $(element).prev();
    var next = $(prev).next();

    if (prev.length > 0) {
      $('.product-image-enlargement').attr('data-key', $(prev).attr('data-key'));
      $('.product-image-enlargement .title').text($(prev).attr('data-title'))
      $('.product-image-enlargement .product-image img').attr('src', $(prev).find('img').attr('src'))
    } else {
      $('.product-image-enlargement .arrow.left').hide();
    }
    if (next.length > 0) {
      $('.product-image-enlargement .arrow.right').show();
    }
  })

  $('.product-image-enlargement .arrow.right').on('click', function() {
    var key = $(this).closest('.product-image-enlargement').attr('data-key')
    var element = $('.product-detail-item-content').find('div[data-key=' + key + ']');

    var next = $(element).next();
    var prev = $(next).prev();

    if (next.length > 0) {
      $('.product-image-enlargement').attr('data-key', $(next).attr('data-key'));
      $('.product-image-enlargement .title').text($(next).attr('data-title'))
      $('.product-image-enlargement .product-image img').attr('src', $(next).find('img').attr('src'))
    } else {
      $('.product-image-enlargement .arrow.right').hide();
    }

    if (prev.length > 0) {
      $('.product-image-enlargement .arrow.left').show();
    }
  })
})