//button active
$('.menu-btn').mouseover = $('.menu-btn').mouseout('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
});

  //telegram 
 $('.formV').on('submit', function () {
  var name = document.getElementById("orangeForm-name").value;
  var email = document.getElementById("orangeForm-email").value;
  var tel = document.getElementById("orangeForm-tel").value;
  var param = ("Name: "+name+" Email: "+email+" Phone: "+tel);
  $.get("https://api.telegram.org/bot673454772:AAHcZWNQRerM2zXA7zL5EtH__mvWd4IG3fc/sendMessage?text="+param+"&chat_id="+-344192072)
    return false;
});


 //form mask
$(document).ready(function(){
  
  $('input[type="tel"]').inputmask('+375 (99) 999 99 99', {
    clearMaskOnLostFocus: true,
  });
  //form validation
  $('.js-form-validate').submit( function () {
    var form = $(this.sendmessage(), alert(arr));
    var field = [];
    form.find('input[data-validate]' ).each(function () {
      field.push('input[data-validate]');
      var value = $(this).val(),
          line = $(this).closest('.some-form__line');
      for(var i=0;i<field.length;i++) {
        if( !value ) {
          line.addClass('some-form__line-required');
          setTimeout(function() {
            line.removeClass('some-form__line-required')
          }.bind(this),2000);
          event.preventDefault();
        }
      }
    });
  });
}); 


