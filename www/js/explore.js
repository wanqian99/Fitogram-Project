/***** explore.html slideshow *****/
var slideIndex = 0;
showSlide();

function showSlide() {
    var i;
    var slide = document.getElementsByClassName("slide");
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slide.length) {slideIndex = 1}    
    
    slide[slideIndex-1].style.display = "block";
    setTimeout(showSlide, 2000); // Change image every 2 seconds
}



var slideIndex2 = 0;
showSlide2();

function showSlide2() {
    var i;
    var slide2 = document.getElementsByClassName("slide2");
    for (i = 0; i < slide2.length; i++) {
        slide2[i].style.display = "none";  
    }
    slideIndex2++;
    if (slideIndex2 > slide2.length) {slideIndex2 = 1}    
    
    slide2[slideIndex2-1].style.display = "block";
    setTimeout(showSlide2, 2000); // Change image every 2 seconds
}