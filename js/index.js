$(document).ready(function() {

  if ($(window).width() < 650) {
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 97
        }, 1000);
        return false;
      }
    }
  });
  } else {
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 139
        }, 1000);
        return false;
      }
    }
  });
  };

	



   	$('#burgericon').click(function(){
  		$(this).toggleClass('open');
  		$('#overlay').fadeToggle();
      $('#overlaynavigation a').css('display', 'block');
  	});

    $('#overlaynavigation a').click(function(){
      $('#burgericon').toggleClass('open');
      $('#overlay').fadeOut();
    });


   $('.tab').on('click', function () {
      $('.tab-content').hide();
      $('.tab').removeClass('active-tab');
      var tab = $(this).attr('id').split('tab')[1];
      $('#tab-content' + tab).fadeIn();
      $(this).addClass('active-tab');
  });


});