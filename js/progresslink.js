/*!
 * Scrollspy Plugin
 * Author: m00g
 * Licensed under the MIT license
 * Description: Hack for Twitter bootstrap's, hightlights the progression of the article.
 * Uses bootstrap scrollspy
 */
var count= 0;

 $( window ).scroll(function() {
  var scroll = $(window).scrollTop();
  count++;
  console.log(count);
  /*$( ".active .scrollprogress" ).css("background-size", count+" 60px");*/
  
});


var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       
  	   /*$( ".active .scrollprogress" ).css("background-size", count+" 60px");*/
   } else {
      // upscroll code

   }
   var scroll = $(window).scrollTop();
   console.log(scroll);
   lastScrollTop = st;
});