/*===== ALL ======== */

// Change color of nav icon on scroll
var icon = document.getElementsByClassName('glyphicon-envelope')[0];
var scrollHeight = (document.getElementsByTagName('nav')[0].clientHeight) / 2; // nav height / 2
var changeNavIcon = function() {
  if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
       icon.classList.add("light");
   } else {
       icon.classList.remove("light");
   }
};
window.addEventListener("scroll", changeNavIcon);


// fade in element on scroll
var fadeElements = document.getElementsByClassName("hideme");
var fadeInElement = function() {
  for(i = 0; i < fadeElements.length; i++) {
    // get elements dimensions
    var elementPosition = fadeElements[i].getBoundingClientRect();

    if(window.scrollY > elementPosition.top) {
      fadeElements[i].classList.add("showme");
      fadeElements[i].classList.remove("hideme");
    }
  }
}; // end fadeInElement function

window.addEventListener("scroll", fadeInElement);
