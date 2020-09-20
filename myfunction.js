
$(document).ready(function(){
$('#cardNum').mask("**** **** **** ****" ,{placeholder:"**** **** **** **** "});
$("#ExpiryDate").mask("99/99");

 $("#cardNum").keyup(function() {
    var value = $( this ).val();
    $( "#numberOfCard" ).text(value);

  });

  $("#cardNum").keyup(function() {
    $('.card').removeClass('flipped');
  });




  $("#ExpiryDate").keyup(function() {
    var value = $( this ).val();
    $( "#date" ).text( value );
  });

  $("#ExpiryDate").keyup(function() {
    $('.card').removeClass('flipped');
  });



 $("#name").keyup(function() {
    var value = $( this ).val();
    $( "#yourname" ).text( value );
  });

  $("#name").keyup(function() {
    $('.card').removeClass('flipped');
  });

  
  
  
 $("#secureCode").change(function() {
    var value = $( this ).val();
    $( "#code" ).text( value );

  });

  $("#secureCode").change(function() {
    $('.card').toggleClass('flipped');
  });



});
