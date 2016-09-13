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



/*===== HOME ======= */

// create development button
var devButton = document.getElementById("btn-dev");
var container = document.getElementsByClassName("container")[0];

// change image size of photo dev image on home page based on window height
var homeImg = document.getElementById("photo-dev");
var adjustHomeImageSize = function () {
  var imageHeight = window.innerHeight * 0.7;
  homeImg.style.height = imageHeight + "px";
  homeImg.style.width = "auto";
  homeImg.style.display = "block";
};

window.addEventListener("load", adjustHomeImageSize);

devButton.addEventListener("click", function(event){
  event.preventDefault();

  // animate out the home container
  $( container ).animate({
    opacity: 0,
    marginLeft: "-=200",
  }, 650, function() {
    // Animation complete.

    // redirect to dev site
    console.log("animation is done");
    window.location = "file:///Users/lauraevans/Desktop/programming/portfolio_site/dev.html";
  });


  console.log(container);
});
