<!DOCTYPE html>
<html>
<head>
<title>Informe | Blog</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Lobster+Two:400,700,400italic,700italic' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>	
	<link rel="stylesheet" href="style.css" />
	<link rel="stylesheet" href="footer.css" type="text/css" />
	<link rel="stylesheet" href="navbar.css" type="text/css" />

<script src="https://www.gstatic.com/firebasejs/3.4.1/firebase.js"></script>

  <script src="gitnew.js"></script>
 </head>

<body style="background-color:white;"  data-spy="scroll" data-target=".navbar" data-offset="60">



<!--NAVIGATION BAR-->
<nav class="navbar navbar-custom navbar-fixed-top \">
<div class="container-fluid  ">
<div class="navbar-header">
<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span> 
</button>
<a class="navbar-brand" href="index.php"><img src="logo3.png" height= 40 px /></a>
</div>
<div class="collapse navbar-collapse" id="myNavbar">
<ul class="nav navbar-nav navbar-right">
<li><a href="index.php"><!--span class=" glyphicon glyphicon-home"></span--> Home</a></li>
<li><a data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-map-marker"></span> Search City</a></li>
<li><a href="AboutUs.php"><!--span class="glyphicon glyphicon-tasks"></span--> About Us</a></li>
<li><a href="ContactUs.php"><!--span class="glyphicon glyphicon-phone"></span--> Contact Us</a></li>
<li> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp </li>
<li> <a data-toggle="modal" data-target="#myModal"><!--span class="glyphicon glyphicon-log-in"></span--> Login</a></li>
<li> <a  data-toggle="modal" data-target="#myModal2"><!--span class="glyphicon glyphicon-log-in"></span--> <span class="sign">Sign Up</span></a></li>
<li> &nbsp </li>
</ul>
</div>
</div>
</nav>

<br><br><br><br>
	<!--content-starts-->
		<div class="container">
				<center><h2><strong>SAFETY TIPS FOR A SOLO TRAVELER</strong></h2>
				<div class="col-sm-12">
					<h4>Posted on October 24, 2016 by Ankit Gupta</h4></center>
					<br>
					<p>We all love travelling and always want to explore new places , meet new people and have different adventures.But at the same time we are usually scared of the cons such as theft and are usually considerate about them.If you feel the same way then here are some tips for you.</p>
					<br>
					<!--img-->
					<div class="col-sm-6" float="right">
					<center><img src="images/pic2.jpg" class="img-responsive" alt="IMAGE" ></center>
					</div>
					<!--img-end-->
					<br>
					<p>Scan your driver’s license, passport, and health card and email them to yourself and a friend or family member. If you lose your passport, it makes getting a new one much easier.</p>
					<br>
					<p> Always let someone know where you are going, when you expect to arrive, and where you are staying. When you arrive, confirm those details. If something should happen, at least one person knows where you are.</p> 
 					<br>
                    <h3>  Trust your instincts:  </h3>
                     <p>  If someone approaches you and you feel uncomfortable, do not worry about being rude. There are many times I have ignored that person who approached in a way that didn’t feel right. I keep walking and ignore them. I may sometimes be wrong, but it’s not a chance I’m prepared to take.</p> 
                    <br>
                      <h3> Smile: </h3>
					  <p> When you appear to be friendly, other people will reach out to you to help you. A simple smile actually saved me from being robbed once. I gave a pregnant woman my seat on a bus while two other people were trying to convince me I should get off the bus early. The woman overheard the conversation and gave me a look that I knew meant something was wrong. They got off, and she told me that I didn’t need to get off and was going the right way. </p>
					 <br>
					 <p> Public city transportation is ripe for pickpockets. Never carry anything in your back pocket, and always be aware of your surroundings. It’s not just young men that pickpocket, either. Sometimes it’s a group of women who will kindly bump into you or cram around you on a bus.
					 </p>
					  <br><center>
					  <strong><h3> Don’t be a Victim – Stay Safe</h3></strong>
					 <strong> <h3> Be Informed </h3></strong>
					  <strong><h2> Use Informe </h2></strong></center>
				</div>
		</div>
	</div>
	
<br/>

	
<!-- Modal : coming soon-->
<div id="myModal3" class="modal fade" role="dialog">
<div class="modal-dialog">
<!-- Modal content-->
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal">×</button>
<h3 class="modal-title"><font color="white">Coming Soon</font></h3>
</div>
<div class="modal-body"><br><br>
New features coming soon.......<br>
Stay tuned..

</div>
</div>
</div>
</div>

<!-- Modal SIGN IN-->
<div id="myModal" class="modal fade" >
<div class="modal-dialog">
<!-- Modal content-->
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal">×</button>
<h3 class="modal-title"><font color="white">LOGIN</font></h3>
</div>
<div class="modal-body">

<font color="black">Don't have an account? </font><a  data-toggle="modal" data-target="#myModal2" data-dismiss="modal">Register here</a>
<br><br>
<input type="email" class="form-control" id="myemail2" placeholder="Email">
<br>
<input type="password" class="form-control" id="mypassword2" placeholder="Password">
<br>
<button class="btn btn-primary" onclick="toggleSignIn()" >Login</button>
<br><br>
<a  data-toggle="modal" data-target="#myModalforgot" data-dismiss="modal">Forget Password ?</a>

</div>
</div>
</div>
</div>


<!-- Modal Forgot Password-->
<div id="myModalforgot" class="modal fade" >
<div class="modal-dialog">
<!-- Modal content-->
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal">×</button>
<h3 class="modal-title"><font color="white">Password Reset<br></font></h3>
</div>
<div class="modal-body">
<font color="black">Don't want to reset the account password ? </font><a  data-toggle="modal" data-target="#myModal" data-dismiss="modal">Go back...</a>
<br><br>
<input type="email" class="form-control" id="myemailforgot" placeholder="Enter your Email eg. abc@gmail.com">
<br><center>
<button class="btn btn-primary" onclick="sendPasswordReset()" >Reset</button>
&nbsp &nbsp &nbsp &nbsp &nbsp
<button class="btn btn-primary" <a  data-toggle="modal" data-target="#myModal" data-dismiss="modal">Done</a></button>
</center>
<br><br>
</div>
</div>
</div>
</div>

<!-- Modal SIGN UP-->
<div id="myModal2" class="modal fade" role="dialog">
<div class="modal-dialog">
<!-- Modal content-->
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal">×</button>
<h3 class="modal-title"><font color="white">SIGN UP</font></h3>
</div>
<div class="form-group">
<div class="modal-body">
<font color="black">Already have an account? </font><a data-toggle="modal" data-target="#myModal" data-dismiss="modal">Login</a>
<br><br>
<input type="text" class="form-control" id="signname" placeholder="Name" required ><br>
<input type="email" class="form-control" id="signemail" placeholder="Email"><br>
<input type="text" class="form-control" id="signcontact" placeholder="contact"><br>
<input type="password" class="form-control" id="signpassword1" placeholder="Password"><br>
<input type="password" class="form-control" id="signpassword2" placeholder="Re-Enter Password"><br>
<span id="passnotmatch" > </span>  
</div>
<div class="modal-footer">
<button type="submit" class="btn btn-primary" style="float:left;" onclick="handleSignUp()" id="register">Register</button>
</div>
</div>
</div>
</div>
</div>


</body>
</html>
