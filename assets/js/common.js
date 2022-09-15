$(function(){

  // main 부분, 한 화면에 다 나오기
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|CriOS/i.test(navigator.userAgent);
  if(isMobile) {
    $(".main").css('height',window.innerHeight + 'px');
  } else {
    $(".main").css('height','100vh');
  }

  // 면허종류 선택 바텀시트 열기
  $(".license input").on('click', function(){
    $(".bottomSheet").fadeIn();
    $(".bottomSheet .popup").animate({bottom : 0}, 350);
  });

  // 면허종류 선택 바텀시트 닫기
  $(".bottomSheet .bottomsheet-close").on('click', function(){
    $(".bottomSheet").fadeOut();
    $(".bottomSheet .popup").animate({bottom : -424}, 350);
  });

  // 면허종류 리스트 클릭 시 이벤트
  $(".bottomSheet .list ul li").on('click', function(){
    var val = $(this).data('name');
    var code = $(this).data('code');
    var nm = $(this).text();
    var length = $(".bottomSheet .list ul li").length;

    for(i = 0; i <= length; i++) {
      if(val === i) {
        $(".license input").val(nm);
        $("input[name=licenseTypeCode]").val(code);
        $(".bottomSheet").fadeOut();
        $(".bottomSheet .popup").animate({bottom : -515}, 350);
      }
    }
  });

  $(window).bind("pageshow", function(event) {
    //back 이벤트 일 경우 로딩창 숨기기
    if (event.originalEvent && event.originalEvent.persisted) {
      $('#mask, #loadingImg').hide();
      $('#mask, #loadingImg').remove();
    }
  });



  $("button[name=btn_file]").click(function() {
    location.href="webCamera.html";
  });



});
