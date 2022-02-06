var wrapper = document.getElementsByClassName("h1-large")[0];
wrapper.style.opacity="1";
wrapper.innerHTML = wrapper.textContent.replace(/./g,"<span>$&</span>");

var spans = wrapper.getElementsByTagName("span");

for(var i=0;i<spans.length;i++){
  spans[i].style.animationDelay = i*40+"ms";
}  


function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}

/*
// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
    showImages('.container');
});
*/

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showImages('.col-lg-4');
});

document.getElementById("form-control-submit-button-message").disabled = true;