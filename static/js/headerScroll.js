<!-- 스크롤 다운시 헤더의 색상,또는 투명도 변화 스크립트 -->
<script type="text/javascript">
  $(window).scroll(function() {
    if($(this).scrollTop() == 0)
        $('.header-mobile').css('background-color','transparent');
    else
        $('.header-mobile').css('background-color','#080818');
  });
</script>
