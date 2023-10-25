var navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        var targetId = this.getAttribute('href').substring(1); 
        var targetSection = document.getElementById(targetId); 
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}