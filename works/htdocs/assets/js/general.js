"use strict";

//汎用的な処理まとめ
//プラグインみたいなもの
;(function(w) {

  // 外からでも呼べるようにwindowオブジェクト直下にappオブジェクトを作成
  w.app = w.app || {};

  w.app = {
    modal: function(obj) {
      if (obj === "open") {
        // 表示
        $('body').prepend('<div class="gjs-modal-layer gjs-close-modal"></div>');
        $('.gjs-modal-layer, .gjs-modal-contents').fadeIn();
      } else if("close") {
        // 非表示
        $('.gjs-modal-layer, .gjs-modal-contents').fadeOut(function() {
          $('.gjs-modal-layer').remove();
        });
      }
    },
    slideShow: function() {
      $('.gjs-slideshow')
    },
    accordion: function() {
      $('.gjs-accordion').on('click', function() {
        // .slideToggle(400);
      })
    },
    smoothScroll: function() {
      // #で始まるアンカーをクリックした場合に処理
      $('a[href^=#]').on('click', function() {
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
      });
    },
    changeImg: function() {
      // マウスオーバー時の画像切り替え処理
      $('.gjs-changeimg--hover').hover(function() {
        alert( 123 );
      });
      $('.gjs-changeimg--click').on('click', function() {
        var imgSrc = $(this).attr("src");
        
      });
    },
    protectImg: function() {
      $('.gjs-protectimg')
    },
    objOffset: function() {
      // var bb_OffsetObj = $('.gjs-offset'),
      //     bb_OffsetLen = bbOffsetObj.length(),
      //     bb_OffsetArray = [];

      // for (var i = 0; i < bbOffsetLen; i++) {
      //   bbOffsetArray[i] = bb_OffsetObj.eq(i).offset().top;
      // }
    }
  }

  // スクロールに応じて処理（正麺で使ったスクロールに応じてga pushするとか）

  $(function() {
    var self = w.app;

    //modal処理
    $('.gjs-modal').on('click', function() {
      self.modal("open");
    });
    $(document).on('click', '.gjs-close-modal', function() {
      self.modal("close");
    });

    //changeImg処理

    //slideshow処理

    //accordion処理

    //smoothScroll処理

    //protectImg処理

    //objOffset処理
    self.objOffset();

  });

})(window)