/*!
 * Scrollspy Plugin
 * Author: m00g
 * Licensed under the MIT license
 * Description: Hack for Twitter bootstrap's, hightlights the progression of the article.
 * Uses bootstrap scrollspy
 */
var count= 0;
var lastScrollTop = 0;

$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code       
  	     	   
  	   increse_percent(10);
   } else {
      // upscroll code      
   }
   var scroll = $(window).scrollTop();
   console.log(scroll);
   lastScrollTop = st;
});

function increse_percent(x)
{	
	$('.active .scrollprogress').css({
	  'background-position':x+'px 60px'
	});
}