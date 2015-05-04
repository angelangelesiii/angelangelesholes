<?php 

    if($_POST["message"] == "" || $_POST["name"] == ""){
        echo "<p>Please press the back button and fill in all fields</p>";
    } 

    else {
        // if the url field is empty 
        if(isset($_POST['url']) && $_POST['url'] == ''){

             // put your email address here     
             $youremail = 'angelangelesiii@gmail.com';

             // prepare a "pretty" version of the message
             $body = 
"Message details:
    Name:   " .  $_POST['name'] . "
    Email:  " . $_POST['email'] . "

Message: 

" . $_POST['message']. "

Sent through the contact form in www.angelangeles.esy.es";

             // Use the submitters email if they supplied one     
             // (and it isn't trying to hack your form).     
             // Otherwise send from your email address.     

             if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {
                 $headers = "From: ".$_POST['email'];     
             } else {
                 $headers = "From: ".$youremail; 
             }

             // finally, send the message     
             mail($youremail, 'I used the contact form at angelangeles.esy.es', $body, $headers ); 
             } 

             // otherwise, let the spammer think that they got their message through
             // echo "<p>".$youremail."</p>";
             // echo "<p>".$headers."</p>";
             // echo "<p>".$body."</p><p>Email sent</p>";

            header('Location: thankyou.php');
    }



 ?>