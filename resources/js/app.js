/*===== ALL ======== */

/* === Change color of nav icon on scroll === */
var icon = document.getElementById('btn-contact-modal');
var scrollHeight = (document.getElementsByTagName('nav')[0].clientHeight) / 2; // nav height / 2
var changeNavIcon = function() {
  if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
       icon.classList.add("light");
   } else {
       icon.classList.remove("light");
   }
};
window.addEventListener("scroll", changeNavIcon);

/* === toggle contact modal === */
var contactModal = document.getElementById("contact-modal");
var buttonCloseModal = document.getElementById("btn-close-modal");
// icon variable declared in function above
var toggleModal = function() {
  contactModal.classList.toggle("showme");
}; // end toggleModal function

icon.addEventListener("click", toggleModal);
buttonCloseModal.addEventListener("click", toggleModal);

/* === fade in element on scroll === */
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
