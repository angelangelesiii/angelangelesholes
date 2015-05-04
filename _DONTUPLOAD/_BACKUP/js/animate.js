// JS for animating css after scrolling on a specified amount
function initHeader() {  
	// Adds a scroll event listener
    window.addEventListener('scroll', function(e){
    	// Variable declaration:
    	// Distance Y is for determining the Y axis offset of the page
    	// shrinkOn is the value to be met before to set the following if statement true
    	// box is the variable that holds the css selector to be used for animating
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 80,
            header = document.querySelector("header");
        // if "distance scrolled" is greater than "shrinkOn (change to set limit)"
        // animate into ".box.smaller" css rule (see style.css)
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        // if ".box.smaller" css rule  is true while offsetY is less than shrinkOn
        // remove .box.smaller to animate into original state
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
        // change animation properties like speed and selector property in the css file
    });
}

function animateButton() {
            button = document.querySelector("a.down-button");
            classie.add(button,"button-animate1");
}

function moveButton() {  
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 270,
            button = document.querySelector("a.down-button");
        if (distanceY > shrinkOn) {
            classie.add(button,"button-animate2");
        } else {
            if (classie.has(button,"button-animate2")) {
                classie.remove(button,"button-animate2");
            }
        }
    });
}

function changeArrow() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            animateOn = (($('div.card.contact').offset().top)-76),
            arrow = document.querySelector("a.down-button");
        if ((distanceY > animateOn) || ($(window).scrollTop() + $(window).height() == $(document).height())) {
            classie.add(arrow,"button-animate3");
        } else {
            if (classie.has(arrow,"button-animate3")) {
                classie.remove(arrow,"button-animate3");
            }
        }
    });
}

//Card Animations

function animateBannerShade() {
            banner = document.querySelector("div.banner-shade");
            classie.add(banner,"banner-slide");
}

function animateCard1() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            animateOn = ($('div.card1').offset().top) - 400,
            card1 = document.querySelector(".card1 article");
        if(distanceY > animateOn) {
            classie.add(card1,"fade1");
        }
    });
}

function animateCard2() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            animateOn = ($('div.card2').offset().top) - 400,
            card2 = document.querySelector(".card2 article");
        if(distanceY > animateOn) {
            classie.add(card2,"animated");
        }
    });
}

function animateCard3() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            animateOn = ($('div.card3').offset().top) - 400,
            card3 = document.querySelector(".card3");
        if(distanceY > animateOn) {
            classie.add(card3,"animated");
        }
    });
}

function animateCard4() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            animateOn = ($('div.card4').offset().top) - 400,
            card4 = document.querySelector(".card4");
        if(distanceY > animateOn) {
            classie.add(card4,"animated");
        }
    });
}

function animateCard5() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            animateOn = ($('div.card5').offset().top) - 400,
            card5 = document.querySelector(".card5");
        if(distanceY > animateOn) {
            classie.add(card5,"animated");
        }
    });
}



$(document).ready(function(){
animateBannerShade();
animateButton();
});

function initDocument() {
    if ($(window).width() > 768) {
        initHeader();
    }
}

window.onload = initDocument();
window.onload = moveButton();
window.onload = animateCard1();
window.onload = animateCard2();
window.onload = animateCard3();
window.onload = animateCard4();
window.onload = animateCard5();
window.onload = changeArrow();

