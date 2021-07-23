$(function(){
  $('#nav-btn').on('click',function(){
      $(this).toggleClass('-active');
      $('.burger_links').toggleClass('-active');
  });
});

// トップへ戻るボタン
// headerにiフォントを読み込む記述しないと映らないので注意
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
      $('.nav-btn').removeClass('-active');
      $('.burger_links').removeClass('-active');
  return false;
});


// $(function() {
//   var rotate = $(".skil-image");
//   var click = false;
//   var roop;
//   var count = 0;

//   //回転させる
//   function start(){
//       roop = setInterval(function(){
//           count++;
//           if(count > 360){
//               count = 0;
//           }else{
//               rotate.css("transform", "rotate("+ count +"deg)");
//           }
//       }, 10);
//   }

//   //クリックされた時の処理
//   rotate.click(function(){
//       toggle();
//   });

//   //ループ中かどうか判断する
//   function toggle(){
//       if(click){
//           clearInterval(roop);
//           click = false;
//       }else{
//           start();
//           click = true;
//       }
//   }
// });





// 動画横幅調整
$(function() {
  var getWindowMovieHeight = function() {
    // ここでブラウザの縦横のサイズを取得します。
    var windowSizeHeight = $(window).outerHeight();
    var windowSizeWidth = $(window).outerWidth();

    // メディアの縦横比に合わせて数値は変更して下さい。(メディアのサイズが width < heightの場合で書いています。逆の場合は演算子を逆にしてください。)
                                                    // width>heightだったけどこの記述で上手くったよ
    var windowMovieSizeWidth = windowSizeHeight * 1.76388889;
    var windowMovieSizeHeight = windowSizeWidth / 1.76388889;
    var windowMovieSizeWidthLeftMargin = (windowMovieSizeWidth - windowSizeWidth) / 2;

    if (windowMovieSizeHeight < windowSizeHeight) {
      // 横幅のほうが大きくなってしまう場合にだけ反応するようにしています。
      $("#video").css({left: -windowMovieSizeWidthLeftMargin});
    }
  };

  // 以下画面の可変にも対応できるように。
  $(window).on('load', function(){
    getWindowMovieHeight();
  });

  $(window).on('resize', function(){
    getWindowMovieHeight();
  });
});

// animation / wow.js
$(function(){
  new WOW().init();
});

// works開く
$(function(){
  $('.web1').on('click',function(){
    $('.web_site').toggleClass('-active');
  });
});
$(function(){
  $('.web2').on('click',function(){
    $('.web_app').toggleClass('-active');
  });
});