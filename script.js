jQuery(document).ready(function($) {
  //600px以上の場合
  if (window.matchMedia( '(min-width: 600px)' ).matches) {
$(function(){
  $("#sample").mouseover(function(){
      $(this).toggleClass('pc');
  });
});
  //600px以下の場合
  } else {
$(function(){
  $("#sample").mouseover(function(){
      $(this).toggleClass('smartphone');
  });
});
  };
});

const targetElement = document.querySelectorAll(".animationTarget"); //要素の取得
console.log("画面の高さ", window.innerHeight)
document.addEventListener("scroll", function() {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementdistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight*.6//ブラウザの上から画像までの距離を測るメソッドとliの高さになる
    if(window.innerHeight > getElementdistance) {
      targetElement[i].classList.add("show");
    }
  }
})

$(function(){
  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
  });
}());

