$(document).ready(function() { 
    
     //Pierwszy slajd, strzałka w dół = przejście do carousel
         $('#arrow-down').click(function() {
                 $('html, body').animate({
        scrollTop: $('#myCarousel').offset().top
    }, 400);          
   });
    
    //Carousel, strzałka w dół = slajd drugi
      $('#arrow-down2').click(function() {
              $('html, body').animate({
        scrollTop: $('#slide2').offset().top
    }, 400);          
   });
    
    //Slajd drugi, strzałka w dół = slajd trzeci
      $('#arrow-down3').click(function() {
              $('html, body').animate({
        scrollTop: $('#slide3').offset().top
    }, 400, 'linear');          
   });
    
    //Trzeci slajd, strzałka w górę = slajd drugi
      $('#arrow-top3').click(function() {
              $('html, body').animate({
        scrollTop: $('#slide2').offset().top
    }, 400, 'linear');          
   });
    
    //Drugi slajd, strzałka w górę = carousel
      $('#arrow-top2').click(function() {
              $('html, body').animate({
        scrollTop: $('#myCarousel').offset().top
    }, 400, 'linear');          
   });
        
     //Carousel, strzałka w górę = slajd pierwszy
      $('#arrow-top').click(function() {
              $('html, body').animate({
        scrollTop: $('#slide1').offset().top
    }, 400, 'linear');          
   });
     
    // Czas animacji carousel
    $('.carousel').carousel({
        interval: 10000
    });
   
    
});





