$(document).mousemove(function(e){
    $("#mouse").css({left:e.pageX+2, top:e.pageY+2});
});

var numbloack = 11;



    $(window).scroll(function () {
        var numbloack = 9;

        var scroll_position = $(window).scrollTop();
        var maxscroll = (window.innerHeight)*numbloack;
        
        var object_position_left =  scroll_position - (0*(window.innerHeight));
        var pos = - object_position_left ;
        
        if (scroll_position < maxscroll){ 
        $('#object').css({
            'bottom': pos });
            return(pos);} return(pos);
    } );


//partners
    $(window).scroll(function () {
        var numbloack = 9;

        var scroll_position = $(window).scrollTop();
        var maxscroll = (window.innerHeight)*numbloack;
        
        var object_position_left =  scroll_position - (9*(window.innerHeight));
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







// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

