$(document).mousemove(function(e){
    $("#mouse").css({left:e.pageX+2, top:e.pageY+2});
});

var numbloack = 11;



    $(window).scroll(function () {
        var numbloack = 10;

        var scroll_position = $(window).scrollTop();
        var maxscroll = (window.innerHeight)*numbloack;
        
        var object_position_left =  scroll_position - (2*(window.innerHeight));
        var pos = - object_position_left ;
        
        if (scroll_position < maxscroll){ 
        $('#object').css({
            'bottom': pos });
            return(pos);} return(pos);
    } );

    $(window).scroll(function () {
        var numbloack = 4;

        var scroll_position = $(window).scrollTop();
        var maxscroll = (window.innerHeight)*numbloack;
        
        var object_position_left =  scroll_position - (window.innerHeight);
        var pos = + object_position_left ;
        
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
            'bottom':  -(pos+ (numdivs * window.innerHeight))  });
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

