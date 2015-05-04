	</div>
	<!-- /MAIN CONTENT -->
	<footer class="site-footer">
		<div class="wrapper">
		<p class="footer-info">&copy;2015 Angel Angeles. All rights reserved. <br/>
		Page still under construction.</p>
		</div>
	</footer>
	<!-- JS -->
	<script src="js/classie.js"></script>
	<script src="js/animate.js"></script>
	<script src="js/smooth-scroll.min.js"></script>
	<script src="js/jquery.stellar.min.js"></script>
	<script src="js/scroller-changer.js"></script>
	<script>
		$(document).ready(function() {
                $(window).stellar();
            });
		// Smooth Scrolling
		/*smoothScroll.init({
				speed: 1000,
				easing: 'easeInOutQuad',
				updateURL: false,
				offset: 75
				});*/
		$(document).ready(function(e)  {
			if ($(window).width() < 768) {
				smoothScroll.init({
				speed: 1000,
				easing: 'easeInOutQuad',
				updateURL: false,
				offset: 60
				});
				console.log('offset 60 ' + $(window).width());
			}
			else {
				smoothScroll.init({
				speed: 1000,
				easing: 'easeInOutQuad',
				updateURL: false,
				offset: 75
				});
				console.log('offset 75 ' + $(window).width());
			}
		});
		$(window).resize(function(e) {
			if ($(window).width() < 768) {
				smoothScroll.init({
				speed: 1000,
				easing: 'easeInOutQuad',
				updateURL: false,
				offset: 60
				});
				console.log('offset 60 ' + $(window).width());
			}
			else {
				smoothScroll.init({
				speed: 1000,
				easing: 'easeInOutQuad',
				updateURL: false,
				offset: 75
				});
				console.log('offset 75 ' + $(window).width());
			}
		});
	</script>
	<script type="text/javascript">
		$('.navicon').click(function(e){
			if ($('nav.site-nav').hasClass('nav-opened')) {
				$('nav.site-nav').removeClass('nav-opened');
				$('.navicon').removeClass('nav-opened');
				console.log('removing class nav-opened');
			}
			else {
				$('nav.site-nav').addClass('nav-opened');
				$('.navicon').addClass('nav-opened');
				console.log('adding class nav-opened');
			}
		}) ;

	</script>
	<!-- /JS -->
</body>
</html>