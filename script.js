$(document).mousemove(function(e){
    $("#mouse").css({left:e.pageX+2, top:e.pageY+2});
});

var numbloack = 11;



    $(window).scroll(function () {
        var numbloack = 11;

        var scroll_position = $(window).scrollTop();
        var maxscroll = (window.innerHeight)*numbloack;
        var minscroll = (window.innerHeight);
        
        var object_position_left =  scroll_position - (0*(window.innerHeight));
        var pos = - object_position_left ;
        
        if (scroll_position < maxscroll){ 
        $('#object').css({
            'bottom': pos });
            return(pos);}
    } );


//partners
    $(window).scroll(function () {
        var numbloack = 8;

        var scroll_position = $(window).scrollTop();
        var maxscroll = ((window.innerHeight)*numbloack);
        
        var object_position_left =  scroll_position - (11*(window.innerHeight));
        var pos = - object_position_left ;
        
        if (scroll_position < maxscroll){ 
        $('#object3').css({
            'bottom': -pos });
            return(pos);} return(pos);
    } );

//leftbardesktop

    $(window).scroll(function () {
        var numbloack = 9;

        var scroll_position = $(window).scrollTop();
        var maxscroll = (window.innerHeight)*numbloack;
        
        var object_position_left =  scroll_position - (10*(window.innerHeight));
        var pos = - object_position_left  ;
        
        if (scroll_position < maxscroll){ 
        $('#left-link1').css({
            'top': -pos });
            } 
    } );

//rightbardesktop
    $(window).scroll(function () {
        var numbloack = 9;

        var scroll_position = $(window).scrollTop();
        var maxscroll = (window.innerHeight)*numbloack;
        
        var object_position_left =  scroll_position + (0*(window.innerHeight));
        var pos = - object_position_left  ;
        
        if (scroll_position < maxscroll){ 
        $('#right-link1').css({
            'top': +pos });
            } 
    } );


//video

    $(window).scroll(function () {
        var numbloack = 11;

        var scroll_position = $(window).scrollTop();
        var maxscroll = (window.innerHeight)*numbloack;
        
        var object_position_left =  scroll_position;
        var pos = + object_position_left -((window.innerHeight)*0.1) ;
        
        if (scroll_position < maxscroll){ 
        $('#video').css({
            'top': -pos });
            } ;
    } );





    $(window).scroll(function () {
        numbloack = 10;

        var scroll_position = $(window).scrollTop();
        console.log(scroll_position);
       
        var maxscroll = (window.innerHeight)*numbloack;
        var object_position_left =  scroll_position;
        var pos = - object_position_left;
        
        var numdivs=10;
        
        
        if (scroll_position < maxscroll){ 
        $('#object2').css({
            'bottom':  -(pos + (numdivs * window.innerHeight))  });
            return(pos);}
    } );



//how to make this live update?


//    
//    if($(window).width() <= 600){
//    var h = ((window.innerHeight)-64)+'px';
//    document.getElementById("Top").style.height=h;
//}
//    else{
//        document.getElementById("Top").style.height=window.innerHeight;
//    }






//legalmodal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
}





//disclaimermodal
// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "flex";
}






//terms and conditions modal
// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "flex";
}

//terms and conditions modal
// Get the modal
var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal 
btn4.onclick = function() {
  modal4.style.display = "flex";
}




// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";

}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
}



    $(window).scroll(function(){
    if ($(window).scrollTop() >= (0.9*(window.innerHeight))) {
        $('nav').addClass('stuck');
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('stuck');
        $('nav div').removeClass('visible-title');
    }
});

 document.getElementById("myNav").style.display = "none";

$( document ).ready(function() {
  var hamburger = $('#nav');
  var nav = $('#myNav');
  hamburger.click(function() {
      
    nav.toggle();
    hamburger.toggleClass('active');
    return false;
      
  });
});


 



function closeNav() {
  document.getElementById("myNav").style.display = "none";
}







var video = document.getElementById('videoclick');
var videoMuted = true;
var videoPlaying = true;
video.style.cursor = 'url(img/sound.png), default';

video.onclick = function() {
    
    if ( videoPlaying) {
        video.pause();
        video.pause();
        videoPlaying = false;
        videoPlaying = false;
        video.muted = false;
        video.style.cursor = 'url(img/play.png), default';
        play.innerHTML= '<img   class="play" src="img/play.png">';
        play.style.fontWeight='bold';
        soundbutton.innerHTML= '<img   class="sound" src="img/mute.png">';
soundbutton.style.fontWeight='100';
        
    }
    else {
        video.play();
        video.play();
        videoPlaying = true;
        videoPlaying = true;
        video.muted = false;
        video.style.cursor = 'url(img/pause.png), default';
        play.innerHTML= '<img   class="play" src="img/play.png">';
        play.style.fontWeight='100';
    };
}

var soundbutton = document.getElementById('soundbutton');
var play = document.getElementById('playbutton');
var video2 = document.getElementById('videoclick2');
var video2Muted = true;
var video2Playing = true;
play.style.opacity='0';

play.onclick = function() {
    
    if ( videoPlaying) {
        video.pause();
        video.pause();
        videoPlaying = false;
        videoPlaying = false;
        play.innerHTML= '<div   class="play" >PLAY</div>';
        play.style.opacity='1';
        play.style.fontWeight='100';
    }
    else {
        video.play();
        video.play();
        videoPlaying = true;
        videoPlaying = true;
        play.innerHTML= '<img   class="play" src="img/pause.png">';
        play.style.opacity='0';
        play.style.fontWeight='100';
    };
}

soundbutton.onclick = function() {
    
    if ( videoMuted) {
        
        videoMuted = false;
        video.muted = false;
        soundbutton.innerHTML= '<img   class="sound" src="img/mute.png">';
soundbutton.style.fontWeight='100';
    }
    else {
        
        videoMuted = true;
        video.muted = true;
        soundbutton.innerHTML= '<img   class="sound" src="img/sound.png">';
        soundbutton.style.fontWeight='100';
    };
};


