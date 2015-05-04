
document.getElementById('downButton').onclick = function() {
	var offsetY = window.pageYOffset;
	var scrollOffset = 75;
	var anchor1 = ($('div.card1').offset().top) - scrollOffset,
		anchor2 = ($('div.card2').offset().top) - scrollOffset,
		anchor3 = ($('div.card3').offset().top) - scrollOffset,
		anchor3 = ($('div.card3').offset().top) - scrollOffset,
		anchor4 = ($('div.card4').offset().top) - scrollOffset,
		anchor5 = ($('div.card5').offset().top) - scrollOffset,
		contact = ($('div.card.contact').offset().top) - scrollOffset;
	// Anchors If
	if (offsetY <= (anchor1-1)) {
		document.getElementById('downButton').href = "#anchor1";
	}
	else if (offsetY <= (anchor2-1)) {
		document.getElementById('downButton').href = "#anchor2";
	}
	else if (offsetY <= (anchor3-1)) {
		document.getElementById('downButton').href = "#anchor3";
	}
	else if (offsetY <= (anchor4-1)) {
		document.getElementById('downButton').href = "#anchor4";
	}
	else if (offsetY <= (anchor5-1)) {
		document.getElementById('downButton').href = "#anchor5";
	}
	// End Anchors, Start Contact
	else if (offsetY <= (contact-1)) {
		if ($(window).scrollTop() + $(window).height() == $(document).height()) {
			document.getElementById('downButton').href = "#site-header";
		}
		else {
			document.getElementById('downButton').href = "#contact";
		}
	}
	else if (offsetY >= (contact-1)) {
		document.getElementById('downButton').href = "#site-header";
	}

	return false;
}

// function arrowChanger(){
// 	window.addEventListener('scroll', function(e){
// 		var offsetY = window.pageYOffset;
// 		var scrollOffset = 75;
// 		var contact = ($('div.card.contact').offset().top) - scrollOffset;
// 		if (offsetY >= (contact-1)) {
// 			document.getElementById('downButton').href = "#site-header";
// 			button = document.querySelector("a.down-button");
// 	        classie.add(button,"button-animate3");
// 		}
// 	}
// }

// window.onload = arrowChanger();