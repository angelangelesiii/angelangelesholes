<?php include('header.php'); ?>
<div class="main-filler"></div>

<div class="wrapper">
	<div class="thank-you">
		<p class="bannermessage">Thank you for contacting me.</p>
		<p>You will be redirected back to the home page withing 10 seconds. If not please click <a href="/">here</a>.</p>
	</div>
</div>
<?php 
include('footer.php');
header( "refresh:10;url=/" );
?>
