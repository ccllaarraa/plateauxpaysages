$( document ).ready(function() {


  $(function() {                       //run when the DOM is ready
    $(".slider img").click(function() {  //use a class, since your ID gets mangled
     $(".sliderfullscreen").addClass("slidershow");  
     $(".sliderfullscreen").removeClass("sliderhideimportant");  
    });
  });

  $(".sliderfullscreen .close").click(function() {  //use a class, since your ID gets mangled
    $(".sliderfullscreen").removeClass("slidershow");  
    $(".sliderfullscreen").addClass("sliderhideimportant");
  });


  $(function() {                       //run when the DOM is ready
    $(".slider2 img").click(function() {  //use a class, since your ID gets mangled
     $(".sliderfullscreen2").addClass("slidershow2");  
     $(".sliderfullscreen2").removeClass("sliderhideimportant2");  
    });
  });

  $(".sliderfullscreen2 .close").click(function() {  //use a class, since your ID gets mangled
    $(".sliderfullscreen2").removeClass("slidershow2");  
    $(".sliderfullscreen2").addClass("sliderhideimportant2");
  });












                  
    $(".contactclick").click(function() {  //use a class, since your ID gets mangled
      $(this).parent().find('.contact2').toggleClass("contactvisible");
    });

    
    setInterval(function(){
    $(".dessin1 img").addClass("dessinvisible")
    }, 800);

    setInterval(function(){
      $(".dessin2 img").addClass("dessinvisible")
      }, 3000);

    setInterval(function(){
      $(".dessin3 img").addClass("dessinvisible")
    }, 5000);

    setInterval(function(){
      $(".dessin9 img").addClass("dessinvisible")
    }, 5000);

    setInterval(function(){
      $(".dessin4 img").addClass("dessinvisible")
    }, 6000);

    setInterval(function(){
      $(".dessin5 img").addClass("dessinvisible")
    }, 7000);

    setInterval(function(){
      $(".dessin10 img").addClass("dessinvisible")
    }, 7000);

    setInterval(function(){
      $(".dessin6 img").addClass("dessinvisible")
    }, 8000);

    setInterval(function(){
      $(".dessin7 img").addClass("dessinvisible")
    }, 8000);

    setInterval(function(){
      $(".dessin8 img").addClass("dessinvisible")
    }, 8000);

    setInterval(function(){
      $(".dessin11 img").addClass("dessinvisible")
    }, 9000);

    setInterval(function(){
      $(".dessin12 img").addClass("dessinvisible")
    }, 1200);

    setInterval(function(){
      $(".dessin14 img").addClass("dessinvisible")
    }, 9000);

  // end jquery
})


// buffets
$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
   fade: true,
  cssEase: 'linear',
  infinite: true,
  asNavFor: ".sliderhide",
  customPaging : function(slider, i) {
      return '<a href="#"></a>';
  },
});



$('.sliderhide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  fade: true,
  cssEase: 'linear',
  infinite: true,
  // variableWidth: true,
  asNavFor: ".slider",
  centerMode: true,
  customPaging : function(slider, i) {
      return '<a href="#"></a>';
  },
});


// plateaux
$('.slider2').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
   fade: true,
  cssEase: 'linear',
  infinite: true,
  asNavFor: ".sliderhide2",
  customPaging : function(slider, i) {
      return '<a href="#"></a>';
  },
});
$('.sliderhide2').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  fade: true,
  cssEase: 'linear',
  infinite: true,
  // variableWidth: true,
  asNavFor: ".slider2",
  centerMode: true,
  customPaging : function(slider, i) {
      return '<a href="#"></a>';
  },
});

