         function fade(){
    var divs = $('#hide');
    divs.css({ 'opacity' : 1 });
$(window).on('scroll', function() {
   var st = $(this).scrollTop();
   divs.css({ 'opacity' : (1 - st/300) });
});
             
    var divs2 = $('#projectservices');
    divs2.css({ 'opacity' : 1 });
$(window).on('scroll', function() {
   var st = $(this).scrollTop();
   divs2.css({ 'opacity' : (1 - st/200) });
});
        };


    $(document).ready(function() {

	var getMax = function() {
		return $(document).height() - $(window).height();
	}

	var getValue = function() {
		return $(window).scrollTop();
	}

	if ('max' in document.createElement('progress')) {
		var progressBar = $('progress');
		
		progressBar.attr({
			max: getMax()
		});

		$(document).on('scroll', function() {
			progressBar.attr({
				value: getValue()
			});
		});

		$(window).resize(function() {
			
			progressBar.attr({
				max: getMax(),
				value: getValue()
			});
		});

	} else {

		var progressBar = $('.progress-bar'),
			max = getMax(),
			value, width;

		var getWidth = function() {
			
			value = getValue();
			width = (value / max) * 100;
			width = width + '%';
			return width;
		}

		var setWidth = function() {
			progressBar.css({
				width: getWidth()
			});
		}

		$(document).on('scroll', setWidth);
		$(window).on('resize', function() {
			
			max = getMax();
			setWidth();
		});
	}
});

  function showreel(){
      if ( $(window).width() >= 600 ){
          document.getElementById("name").innerHTML = "<span class='w3-animate-opacity projectName'>Showreel";
          $('#hide').css({ 'visibility':"hidden"});
      }else{
          document.getElementById("name").innerHTML = "<span class='w3-animate-opacity projectName'>Tom Gillan";
          $('#hide').css({ 'visibility':"visible"});
      } 
  }      
    
    function skint(){ 
        document.getElementById("name").innerHTML = "<span class='w3-animate-opacity projectName'>Skint film titles";
        $('#hide').css({ 'visibility':"hidden"});
       }
    function kara(){ 
        document.getElementById("name").innerHTML = "<span class='w3-animate-opacity projectName'>Kara healthcare";
        $('#hide').css({ 'visibility':"hidden"});
       }
    function Genie(){ 
        document.getElementById("name").innerHTML = "<span class='w3-animate-opacity projectName'>Loyal Genie";
        $('#hide').css({ 'visibility':"hidden"});
       }
    function Karoshi(){ 
        document.getElementById("name").innerHTML = "<span class='w3-animate-opacity projectName'>ISTD Karoshi";
        $('#hide').css({ 'visibility':"hidden"});
       }
    function motyf(){ 
        document.getElementById("name").innerHTML = "<span class='w3-animate-opacity projectName'>Motyf 2018";
        $('#hide').css({ 'visibility':"hidden"});
       }
    function grub(){ 
        document.getElementById("name").innerHTML = "<span class='w3-animate-opacity projectName'>Grub";
        $('#hide').css({ 'visibility':"hidden"});
       }
    function changingfutures(){ 
        document.getElementById("name").innerHTML = "<span class='w3-animate-opacity projectName'>Changing Futures (coming soon)";
        $('#hide').css({ 'visibility':"hidden"});
       }
    function Banished(){ 
        document.getElementById("name").innerHTML = "<span class='w3-animate-opacity projectName'>Banished Opera";
        $('#hide').css({ 'visibility':"hidden"});
       }
    function feed(){ 
        document.getElementById("name").innerHTML = "<span class='w3-animate-opacity projectName'>Feed and miscellaneous";
        $('#hide').css({ 'visibility':"hidden"});
       }

    function Bray(){ 
        document.getElementById("name").innerHTML = "<span class='w3-animate-opacity projectName'>Bray Wayfinding (coming soon)";
        $('#hide').css({ 'visibility':"hidden"});
       }


    function normal(){
                     
        document.getElementById("name").innerHTML = "Tom Gillan";
        $('#hide').css({ 'visibility':"visible"});
        
                     }
 

    

    
     $(function(){
         
     var $window = $(window);
     
     function checkWidth() {
         var windowsize = $window.width();
         if (windowsize <= 600 && windowsize >= 450)
         {
            var name = Math.max(34) + 'px';
            var mass = Math.max(34) + 'px';
            var leading = Math.max(38) + 'px';
            
            $('#hide').css({'font-size': mass});
            $('#name').css({'font-size': name});
            $('#header').css({'line-height': leading});
            
            $(window).scroll(function() {
            var name = Math.max(20, 34-0.0*$(this).scrollTop()) + 'px';
            var mass = Math.max(0, 34-0.0*$(this).scrollTop()) + 'px';
            var leading = Math.max(20, 38-0.0*$(this).scrollTop()) + 'px';  
            $('#header').css({'line-height': leading});
            
            $('#hide').css({'font-size': mass});
            $('#name').css({'font-size': name});
            $('#hide').css({'font-size': mass});      
            $('#projectservices').css({'opacity': fade});   });

        }
         
    else if (windowsize < 450) 
        {  
            var name = Math.max(25) + 'px';
            var mass = Math.max(25) + 'px';
            var leading = Math.max(28) + 'px';
            
            $('#hide').css({'font-size': mass});
            $('#name').css({'font-size': name});
            $('#header').css({'line-height': leading});
            
            $(window).scroll(function() {
            var name = Math.max(20, 25-0.0*$(this).scrollTop()) + 'px';
            var mass = Math.max(0, 25-0.0*$(this).scrollTop()) + 'px';
            var leading = Math.max(20, 28-0.0*$(this).scrollTop()) + 'px';  
            $('#header').css({'line-height': leading});
            
            $('#hide').css({'font-size': mass});
            $('#name').css({'font-size': name});
            $('#hide').css({'font-size': mass});      
            $('#projectservices').css({'opacity': fade});   });
 
        }
    else {  
            
            var mass = Math.max(53) + 'px';
            var name = Math.max(53) + 'px';
            var leading = Math.max(54) + 'px';
            
            $('#header').css({'line-height': leading});  
            $('#hide').css({'font-size': mass});
            $('#name').css({'font-size': name});
            
            $(window).scroll(function() {
            var fade = Math.max(0, 1-0.008*$(this).scrollTop()) + '';
            var mass = Math.max(0, 53-0.05*$(this).scrollTop()) + 'px';
            var name = Math.max(20, 53-0.05*$(this).scrollTop()) + 'px';
            var leading = Math.max(0, 54-0.07*$(this).scrollTop()) + 'px';  
            $('#header').css({'line-height': leading});  
            $('#hide').css({'font-size': mass});
            $('#name').css({'font-size': name});
            $('#hide').css({'font-size': mass, 'opacity': fade});
            $('#projectservices').css({'opacity': fade});   });
                   
        }
        
         
     }
     // Execute on load
    checkWidth();
     // Bind event listener
     $(window).resize(checkWidth);
 });   

                       
  





var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
   
    
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
    
};
    

 var arrowOne = document.getElementsByClassName("arrow1");


//$("#btn1").click("click",function(){
//    
//    
//    $(".arrow1").css( {"background-color": "yellow"});
//});


$("#btn1").click(function () {
    $("#arrow1").toggleClass("rotate");
});

$("#btn2").click(function () {
    $("#arrow2").toggleClass("rotate");
});

$("#btn3").click(function () {
    $("#arrow3").toggleClass("rotate");
});





//
//var slideIndex = 1;
//showSlides(slideIndex);
//
//function plusSlides(n) {
//  showSlides(slideIndex += n);
//}
//
//function currentSlide(n) {
//  showSlides(slideIndex = n);
//}
//
//function showSlides(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides");
//  
//  if (n > slides.length) {slideIndex = 1}    
//  if (n < 1) {slideIndex = slides.length}
//  for (i = 0; i < slides.length; i++) {
//      slides[i].style.display = "none";  
//  }
//  
//  slides[slideIndex-1].style.display = "block";  
//}


//delay link
function delay (URL) {
    setTimeout( function() { window.location = URL }, 700 );
};

$( ".next-project" ).click(function(){
    
//    $('.insidenext-project').css('transition', 'opacity 1s');
//    $('.insidenext-project').css('opacity', '0');
    
    
    $('.next-project').css('min-height', '100vh');
    $('.nextp').css('transition', 'opacity 0.5s');
    $('.nextp').css('opacity', '0');
    $('.nextp').css('padding-bottom', '0');
    
    $('#navbarbg').css('transition', 'margin-top 0.5s');
    $('#navbarbg').css('margin-top', '-90px');
    
    $('.insidenext-project').css('transition','margin-top 1s');
    $('.insidenext-project').css('margin-top', '400px');
    
    $('.next-project').css('position', 'relative');
    
    $('#nextproject').css('transition', 'margin-top  1s');
    
    $('body').css('transition', 'margin-top  2s');
    $('body').css('margin-top', '-70vh');
    $('.nextp').css('margin', '0px');
    $('.nextp').css('padding', '0px');
    $('.nextp').css('line-height', '0px');
    
    
  
   
});
