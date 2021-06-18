$(function(){
  $('#nav-btn').on('click',function(){
      $(this).toggleClass('-active');
      $('.burger_links').toggleClass('-active');
  });
});

// トップへ戻るボタン
var pageTop = $("#page-top");
// ボタン非表示
pageTop.hide();
$ (window).scroll(function () {
  if ($(this).scrollTop() > 80) {
  // 0.3秒でフェードイン
  pageTop.fadeIn(300);
} else {
  // 0.3秒でフェードアウト
  pageTop.fadeOut(300);
}
});
// 0.5秒でページトップへ戻る
pageTop.click(function () {
  $("body, html").animate({ scrollTop: 0}, 500);
  return false;
})



// Resources

$('a[href^="#"]').click(function(){
  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $("html, body").animate({scrollTop:position-85}, speed, "swing");
  return false;
});


$(function() {
  var rotate = $(".skil-image");
  var click = false;
  var roop;
  var count = 0;

  //回転させる
  function start(){
      roop = setInterval(function(){
          count++;
          if(count > 360){
              count = 0;
          }else{
              rotate.css("transform", "rotate("+ count +"deg)");
          }
      }, 10);
  }

  //クリックされた時の処理
  rotate.click(function(){
      toggle();
  });

  //ループ中かどうか判断する
  function toggle(){
      if(click){
          clearInterval(roop);
          click = false;
      }else{
          start();
          click = true;
      }
  }
});