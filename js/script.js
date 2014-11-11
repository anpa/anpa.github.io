//Easter Egg
console.log(""+
"                     _       __            _                 \n"+
"     /\\             | |     /_/      /\\   | |                \n"+
"    /  \\   _ __   __| |_ __ ___     /  \\  | |_   _____  ___  \n"+
"   / /\\ \\ | '_ \\ / _` | '__/ _ \\   / /\\ \\ | \\ \\ / / _ \\/ __| \n"+
"  / ____ \\| | | | (_| | | |  __/  / ____ \\| |\\ V /  __/\\__ \\ \n"+
" /_/    \\_\\_| |_|\\__,_|_|  \\___| /_/    \\_\\_| \\_/ \\___||___/ \n"+
"                                                             "+"\n"+
"                                                             "+"\n"+
"Hello!\n\n"+
"This page was built using great tools like Sublime Text 2 and Prepos.\n"+
"It also uses great libraries such as jQuery, Modernizr and Normalize.js.\n"+
"Fonts are served by the awesomeness of Google Fonts. I am using Montserrat and Neutron here.\n\n"+
"Check this project and others at https://github.com/anpa.\n\n---\n");

//Animated scroll
$('a[href*=#]:not([href=#])').click(function(e) {
  var target = $(this).attr("href");
  $('html,body').animate({
    scrollTop: $(target).offset().top
  }, 1000);
  e.preventDefault();
});

//Open/Close menu
$('#toggle-nav').click(function() {
    if($('header nav').hasClass('nav-closed')) {
        $('header nav').removeClass('nav-closed').addClass('nav-open');
        $('#toggle-nav .fa-bars').removeClass('fa-bars').addClass('fa-close');

    } else {
        $('header nav').removeClass('nav-open').addClass('nav-closed');
        $('#toggle-nav .fa-close').removeClass('fa-close').addClass('fa-bars');
    }
});


//Active menu item on page scroll and header fade
$(window).scroll(function()  {
  
  var treshold = 150;
  var currentPosition = $(this).scrollTop() + $("header").height() + treshold;
  
  var currentSection = $("section").map(function(){
    if ($(this).offset().top < currentPosition)
      return this;
    });

  var sectionId = currentSection[currentSection.length-1].id;

  $("nav li.active").removeClass("active");
  $("nav li a[href=#" + sectionId + "]").parent().addClass("active");

  if ($("header").offset().top > 100) {
    if(!$("header").hasClass("solid")) $("header").addClass("solid");
  } else {
    if($("header").hasClass("solid")) $("header").removeClass("solid");
  }
});