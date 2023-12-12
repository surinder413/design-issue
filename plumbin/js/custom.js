jQuery(window).scroll(function() {
		

    var scrollTop = jQuery(window).scrollTop();

    if (scrollTop > 50) {

        jQuery('header').addClass('head_stiky');

    } else {

        jQuery('header').removeClass('head_stiky');

    }

});


$(document).ready(function(){
    $(".showMenu").click(function(){
      $(".menuBar").addClass("openMenu");
    });

    $(".closeMenu").click(function(){
        $(".menuBar").removeClass("openMenu");
      });
  });

  AOS.init({
    duration: 1200,
  })
  