$(document).ready(function(){
    $('.btn__order').hover(function () {
        $(this).children('i').show(300);
    },function(){
        $(this).children('i').hide(300);
    });
    $(window).scroll(function(){
      if ($(window).scrollTop() >= 600) {
        $('.section__header').addClass('fixed-header');
      }
      else {
          $('.section__header').removeClass('fixed-header');
      }
    });
});
