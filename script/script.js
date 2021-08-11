      
        //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
    mybutton.style.display = "block";
      mybutton.style.backgroundColor = "rgba(255,255,255,0.12)";
  } else {
    mybutton.style.opacity = "0";
    mybutton.style.display = "none";
    mybutton.style.backgroundColor = "rgba(0,0,0,0)";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


