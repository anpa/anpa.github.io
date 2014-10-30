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
        $('header nav').removeClass('nav-closed');
        $('header nav').addClass('nav-open');
    } else {
        $('header nav').removeClass('nav-open');
        $('header nav').addClass('nav-closed');
    }
});

/*
$("nav li a").click(function() {
    if($('header nav').hasClass('nav-open')) {
        $('header nav').removeClass('nav-open');
        $('header nav').addClass('nav-closed');
    }
});*/