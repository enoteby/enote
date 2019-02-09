//button active
$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
});

  //telegram //button active
   $('.formV').on('submit', function () {
  var name = document.getElementById("orangeForm-name").value;
  var email = document.getElementById("orangeForm-email").value;
  var tel = document.getElementById("orangeForm-tel").value;
  var param = ("Name: "+name+" Email: "+email+" Phone: "+tel);
  $.get("https://api.telegram.org/bot673454772:AAHcZWNQRerM2zXA7zL5EtH__mvWd4IG3fc/sendMessage?text="+param+"&chat_id="+-344192072);
  $('.modal').modal('hide');  
  return false;
});

 //form mask
$(document).ready(function(){
  
  $('input[type="tel"]').inputmask('+375 (99) [999 99 99]')

});



