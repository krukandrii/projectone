
  $(".menu_button").click(function() {
    // $('.showing_menu').animate({'left' : 0 } );

      $('.showing_menu').css({transform: 'translateY(0)'});
      
    });
  

    
  $(".close_button").click(function() {
    // $('.showing_menu').animate({'left' : 100 + "vw"} );
    $('.showing_menu').css({transform: 'translateY(-100%)'});
    });
  

   