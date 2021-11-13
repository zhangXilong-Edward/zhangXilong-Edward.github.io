"use strict";

function topFunction(){

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//ToDo Pragya: Trying to implement re-usable footer
// $(document).ready(function(){
//   $('#footer').load('components/footer.html');
// });


//make header Navbar stick to top on scoll-down
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById("nav-top").classList.add('fixed-top');
        // add padding top to show content behind navbar
        var navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById("nav-top").classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 

//make hover effect on mobile touchscreen
$('img.filter').on("touchstart", function (e) {
  'use strict'; //satisfy code inspectors
  var link = $(this); //preselect the link
  if (link.hasClass('hover')) {
      return true;
   } 
  else {
     link.addClass('hover');
     $('img.filter').not(this).removeClass('hover');
     e.preventDefault();
     return false; //extra, and to make sure the function has consistent return points
    }
  });


