$('a[href*=#]:not([href=#])').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

$('#toggle-nav').click(function() {
    if($('header nav').hasClass('nav-closed')) {
        $('header nav').removeClass('nav-closed').addClass('nav-open');
        $('#toggle-nav .fa-bars').removeClass('fa-bars').addClass('fa-close');

    } else {
        $('header nav').removeClass('nav-open').addClass('nav-closed');
        $('#toggle-nav .fa-close').removeClass('fa-close').addClass('fa-bars');
    }
});

/*
$("nav li a").click(function() {
    if($('header nav').hasClass('nav-open')) {
        $('header nav').removeClass('nav-open');
        $('header nav').addClass('nav-closed');
    }
});*/

$(window).scroll(function() {
  if ($("header").offset().top > 100) {
    if(!$("header").hasClass("solid")) $("header").addClass("solid");
  } else {
    if($("header").hasClass("solid")) $("header").removeClass("solid");
  }
});