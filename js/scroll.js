$(function() {
 
  // ①aタグをクリックし、href属性に # から始まるリンクが設定してあったら発動
  $('a[href^="#"]').click(function(){
 
    // ②クリックしたaタグのhref属性（リンク先URI）を取得し、変数に格納
    var href = $(this).attr('href');
 
    // ③上で取得した値が#か空白だったら'html'を、それ以外だったら先ほど取得したhref属性の値を変数に格納
    var target = $(href == '#' || href === '' ? 'html' : href);
 
    // ④変数targetのページトップからの位置を取得し、変数に格納
    var position = target.offset().top;
 
    // ⑤scrollTopに上で取得した位置を設定し、ヌルヌルとスクロールさせる
    $('html,body').animate({scrollTop : position}, 500);
 
    // ⑥a要素のデフォルトの機能を無効化する
    return false;
 
  });
});