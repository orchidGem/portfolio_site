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

/*
  change image size of photo dev image on home page based on window height
*/
var homeImg = document.getElementsByClassName("photo-dev");
var adjustHomeImageSize = function () {
  var imageHeight = window.innerHeight * 0.7;
  console.log(imageHeight);
  for(var i = 0; i < homeImg.length; i++) {
    homeImg[i].style.height = imageHeight + "px";
    homeImg[i].style.width = "auto";
    homeImg[i].style.display = "inline";
  }
};
window.addEventListener("load", adjustHomeImageSize);

/*
  animate computer screen when user chooses portfolio
*/
var columns = document.getElementsByClassName("column");
var potfolioButton = document.getElementsByClassName("btn-portfolio");
var duration = 650;

for (var i = 0; i < columns.length; i++) {
  potfolioButton[i].addEventListener("click", function(event){
    event.preventDefault();

    // split computer apart and fade
    $( columns[0] ).animate({
      opacity: 0,
      left: "-=50"
    },
    {
      start: function() {
        $( columns[1] ).animate({
          opacity: 0,
          left: "+=50"
        }, duration );
      },
      duration: duration,
      complete: function() {
        // Animation complete.
        //window.location = "file:///Users/lauraevans/Desktop/programming/portfolio_site/index.html";
        window.location = "file:///Users/lauraevans/Desktop/programming/portfolio_site/dev.html";
      } // end complete function
    }); // end

  }); // end portfolio button event listener
} // end for loop
