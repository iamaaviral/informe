<!DOCTYPE html>
<html>
<head>
	<title>About Us</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">  
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>	
	<link rel="stylesheet" href="style.css" />
	<link rel="stylesheet" href="footer.css" type="text/css" />
	<link rel="stylesheet" href="navbar.css" type="text/css" />


<script src="https://www.gstatic.com/firebasejs/3.4.1/firebase.js"></script>


<script src="gitnew.js">
</script>
 </head>

<body style="background-color:white;">
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

<!--CONTENT-->
<div class="container">
<br><br><br><br>
<div class="row">
<div class="col-sm-4 ">
<h3></h3>
<br><br>
<img src="aboutus.jpg"  height="316px">
<br>
</div>
<div class="col-sm-4 ">
<h3>Our Vision</h3>
<br>
<p>At Informe, we believe that tech knowledge and business experience are not needed to start a highly successful company developing cutting-edge, 
technology-based safety services. Sometimes the most important aspect is knowing what is needed, not how it all works, 
and having a big vision combined with the guts to dive into the unknown.<br> 
This app keeps the you informed about your surrounding and prepares you for some unfortunate event.<br>
<br>
Keep Safe, Be Informed, Use Informe.</p>
</div>
<div class="col-sm-4 ">
<br><br>
<div class="panel panel-default" >
<div class="panel-heading"><h4><center><b>Dream Team</b></center></h4></div>
<div class="panel-body">
<br>
<b> Members: </b>
<br>
<ul>
<li>Ankit Gupta </li>
<li>Lovish Jain</li>
<li>Aviral Srivastava</li>
<li>Digvijay Singh Shekhawat</li>
<li>Harsh Thakur</li>
<li>Shubham Joshi</li>
</ul>  
</div>
<!--div class="panel-footer"> </div-->
</div>
</div>
</div>
<br><br><br>
</div>


<!--footer-->
<footer class="foot">
<div class="container-fluid anc">
<div class="row">
<div class="col-sm-2 text-center ">
	<br>
		<img src="Slice 7.png" alt="logo"  style="height:200px" >
</div><br/>
<div class="col-sm-3 text-center">
	<div>Reports<br><a data-toggle="modal" data-target="#myModal">Current Location</a><br><a data-toggle="modal" data-target="#myModal">Search City</a></div><br>
	<div>Blogs<br><a data-toggle="modal" data-target="#myModal">Recent</a><br><a data-toggle="modal" data-target="#myModal">All</a></div>
</div>
<div class="col-sm-3 text-center">
	<div>Information<br><a href="AboutUs.php">About us</a><br><a href="ContactUs.php">Contact Us</a></div><br>
	<div>My Account<br><a data-toggle="modal" data-target="#myModal">Login</a><br><a data-toggle="modal" data-target="#myModal2">Signup</a></div>
</div>
<div class="col-sm-4 text-center">
	<br/>
	<a id="apk" href="#" download>
		<img src="Slice 8.png" class="img-responsive" alt="logo" height="200px" padding-top="10px">
	</a>
</div>
</div>
</div>
</footer>


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
