<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sendemail</title>
</head>
<body>
    
    <?php

		$category=isset($_POST['category']) ? $_POST['category']:null;
		$company=isset($_POST['company']) ? $_POST['company']:null;
		$phone=isset($_POST['phone']) ? $_POST['phone']:null;				
		$name=isset($_POST['name']) ? $_POST['name']:null;
		$business=isset($_POST['business']) ? $_POST['business']:null;
		$domain=isset($_POST['domain']) ? $_POST['domain']:null;
		$hosting=isset($_POST['hosting']) ? $_POST['hosting']:null;
		$content=isset($_POST['content']) ? $_POST['content']:null;
		$msg1=isset($_POST['msg1']) ? $_POST['msg1']:null;
		$msg2=isset($_POST['msg2']) ? $_POST['msg2']:null; 
		$msg3=isset($_POST['msg3']) ? $_POST['msg3']:null;  

		$fromBrief = isset($_POST['email']) ? $_POST['email']:null;
		$to = "dev.josealarcon@gmail.com";
		$subjectBrief="Briefing - Web Development";


		if($category!="" && $company!="" && $phone!="" && $name!="" && $business!="" && $domain!="" && $hosting!="" && $content!="" &&  $fromBrief!=""){


		$messageBrief = "\n CATEGORY: ".$category." \nCOMPANY: ".$company."\nPHONE: ".$phone."\nNAME: ".$name.
		"\nTYPE BUSINESS: ".$business."\nDOMAIN: ".$domain."\nHOSTING: ".$hosting.
		"\nCONTENT MEDIA(Ex. Photos, videos, images, etc.): ".$content."\n\nHow many web pages will the site have? (specify): ".$msg1.
		"\n\nAny specific functionality? (Ex. reservation system, make appointments, forum, chat): ".$msg2.
		"\n\nSomething I need to know? (Some additional information): ".$msg3;
		$headersBrief = "From:" .$fromBrief;    
		$boolBrief=mail($to, $subjectBrief, $messageBrief, $headersBrief);

		if($boolBrief==true){
			echo "<script> 


			alert('Briefing sent with success!!! \uD83D\uDE00');
				   
				   
			</script>";
		}else{
			echo "<script> alert('The Briefing could not be sent.');
			</script> ";
		}

		}
		
		

	?>
</body>
</html>



