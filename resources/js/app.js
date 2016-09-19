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

/* ==============================
  toggle contact modal
 ============================== */
var contactModal = document.getElementById("contact-modal");
var buttonCloseModal = document.getElementById("btn-close-modal");
// icon variable declared in function above
var toggleModal = function() {
  contactModal.classList.toggle("showme");
  //disable scroll on show
  if(contactModal.classList.contains("showme")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

}; // end toggleModal function

icon.addEventListener("click", toggleModal);
buttonCloseModal.addEventListener("click", toggleModal);

/* ==============================
  fade in element on scroll
============================== */
var fadeElements = document.getElementsByClassName("hideme");
var windowHeight = innerHeight;
var fadeInElement = function() {
  for(i = 0; i < fadeElements.length; i++) {
    // get elements dimensions
    var elementPosition = fadeElements[i].getBoundingClientRect();
    var scrollAmount = windowHeight + window.scrollY;

    if(scrollAmount > (elementPosition.top + window.scrollY)) {
      fadeElements[i].classList.add("showme");
      fadeElements[i].classList.remove("hideme");
    }
  }
}; // end fadeInElement function

window.addEventListener("scroll", fadeInElement);
