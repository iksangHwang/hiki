$(function() {
  $('.site-dropdown').on('show.bs.dropdown', function() {
    $(this).find('img').css({'transform': 'rotate(-180deg)'});
  })

  $('.site-dropdown').on('hide.bs.dropdown', function() {
    $(this).find('img').css({'transform': 'rotate(0deg)'});
  })
})