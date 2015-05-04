function parallaxEnabler() {
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	if ((windowWidth <= 667) || ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
		$('.banner').removeAttr('data-stellar-background-ratio');
		$('.card2').removeAttr('data-stellar-background-ratio');
		$('.card4').removeAttr('data-stellar-background-ratio');
		$('.contact').removeAttr('data-stellar-background-ratio');
		$('.yellow-parallax-thing').removeAttr('data-stellar-background-ratio');
	}
	else {
		$('.banner').attr('data-stellar-background-ratio','0.45');
		$('.card2').attr('data-stellar-background-ratio','0.65');
		$('.card4').attr('data-stellar-background-ratio','0.45');
		$('.contact').attr('data-stellar-background-ratio','0.45');
		$('.yellow-parallax-thing').attr('data-stellar-background-ratio','0.45');
	}
}

function card4BGResize() {
	$(document).ready(function(){
		var indexObject = '.card4';
		if(($(indexObject).width()+100) <= 900) {
			$(indexObject).css('background-size','auto 100%');
			var windowWidth = $(window).width();
			var posLeft = (-(900 - windowWidth))*0.5;
			$(indexObject).css('background-position', posLeft +'px 0');
		}
		else {
			$(indexObject).css('background-size','cover');
			$(indexObject).css('background-position','0 0');	
		}
	});
	$(window).resize(function(){
		var indexObject = '.card4';
		if(($(indexObject).width()+100) <= 900) {
			$(indexObject).css('background-size','auto 100%');
			var windowWidth = $(window).width();
			var posLeft = (-(900 - windowWidth))*0.5;
			$(indexObject).css('background-position', posLeft +'px 0');
		}
		else {
			$(indexObject).css('background-size','cover');
			$(indexObject).css('background-position','0 0');	
		}
	});
}

function bannerBGResize() {
	$(document).ready(function(){
		var indexObject = '.banner';
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		if(($(indexObject).width()+100) <= 850) {
			$(indexObject).css('background-size','auto 100%');
			var posLeft = (-(850 - windowWidth))*0.5;
			$(indexObject).css('background-position', posLeft +'px 0');
		}
		else {
			if (windowWidth >= windowHeight) {
				$(indexObject).css('background-size','100% auto');
			}
			else {
				$(indexObject).css('background-size','cover');
			}
			$(indexObject).css('background-position','0 0');	
		}
	});
	$(window).resize(function(){
		var indexObject = '.banner';
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		if(($(indexObject).width()+100) <= 850) {
			$(indexObject).css('background-size','auto 1000');
			console.log('change');
			var posLeft = (-(850 - windowWidth))*0.5;
			$(indexObject).css('background-position', posLeft +'px 0');
		}
		else {
			console.log('going inside else');
			$(indexObject).css('background-size','cover');
			$(indexObject).css('background-position','0 0');	
		}
	});
}

window.onload = parallaxEnabler();
window.onload = card4BGResize();
window.onload = bannerBGResize();
