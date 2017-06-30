<!DOCTYPE html>
<html>
<head>
	<title>Informe</title>
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

<!--CONTENT-->
	

<div class="img-wrapper">
    <img class="img-responsive" src="Slice 6.png" height="100%" width="100%">
    <div class="img-overlay">
      <a data-toggle="modal" data-target="#myModal"> <button class="btn btn-responsive btn-submit">Share your experience here</button></a>
    </div>
</div>
<br/>
	
 


<div class="container-fluid slideanim">
  <br>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner" role="listbox">
      <div class="item active slideanim">
			
			<div class="col-md-5">       
				<img src="report1.jpg" alt="report1" width="100%" height="345">
			</div>
			<div class="col-md-1">
			</div>
			<div class="col-md-5 text-center" >  
				<h1>5 of family die in road accident in Rajasthan</h1>
               <p><font color="white">Five members of a family including two children died on the spot after their speeding car rammed into a tree near a highway in Sangariya area of the Hanumangarh district on late Friday night.
...</font></p>
               <p><a class="btn btn-large btn-primary" data-toggle="modal" data-target="#myModal">Read full story</a>
               </p>
				    </div>
					<div class="col-md-1">
			</div>
</div>
      <div class="item slideanim">
       <div class="col-md-5">       
				<img src="report2.jpg" alt="report2" width="100%" height="345">
			</div>
			<div class="col-md-1">
			</div>
			<div class="col-md-5 text-center">  
			  <h1>23-year-old woman kills self, 'live-in partner' goes missing</h1>
               <p><font color="white">: A 23-year-old married woman who was staying with her male companion after separating with her husband ended her life by hanging from the ceiling fan at Bhawani Nagarlocality in the city on Sunday.
...</font></p>
               <p><a class="btn btn-large btn-primary" data-toggle="modal" data-target="#myModal">Read full story</a>
               </p>
				    </div>
					<div class="col-md-1">
			</div>
      </div>
    
      <div class="item slideanim">
       <div class="col-md-5">       
				<img src="report3.jpg" alt="report3" width="100%" height="345">
			</div>
			<div class="col-md-1">
			</div>
			<div class="col-md-5 text-center">  
				     <h1>West Bengal: Businessman killed after being robbed of Rs 15,000</h1>
               <p><font color="white">A businessman was beaten to death after being robbed of Rs 15,000 at Beldanga area in Murshidabad district.
...</font></p>
               <p><a class="btn btn-large btn-primary" data-toggle="modal" data-target="#myModal">Read full story</a>
               </p>
				    </div>
					<div class="col-md-1">
			</div>
      </div>

    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>



<br/>
<!-- /.container.slide-wrapper -->

<!-- Container (blog Section) -->
 
<div id="blog" class="container-fluid text-center">
 <div class="item">
 <br/>
  <div class="row text-center slideanim">
    <div class="col-sm-4"><a href="blog.php" style="color:black;" target="_blank">
      <div class="thumbnail zoomin" >
        <img src="images/pic.jpg" alt="IMAGE" width="400" height="300">
        <h3><strong>Don’t be a Victim – Stay Safe</strong></h3>
      </div></a>
    </div>
    <div class="col-sm-4" ><a href="blog2.php" style="color:black;" target="_blank">
      <div class="thumbnail zoomin">
        <img src="images/pic1.jpg" alt="report2" width="400" height="300">
         <h3><strong>Women, stay safe!</strong></h3>
      </div></a>
    </div>
    <div class="col-sm-4"><a href="blog3.php" style="color:black;" target="_blank">
      <div class="thumbnail zoomin">
        <img src="images/pic2.jpg" alt="report2" width="400" height="300">
         <h3><strong>Travelling Tips</strong></h3>
      </div></a>
    </div>
  </div>
  </div>
  </div>



<br/>


<!--footer-->
<footer class="foot slideanim">
<div class="container-fluid anc">
<div class="row">
<div class="col-sm-2 text-center ">
	<br>
		<img src="Slice 7.png" alt="logo"  style="height:200px" >
</div>
<br/>
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
	<a href="#" id="apk" download>
		<img src="Slice 8.png" class="img-responsive" alt="logo" height="200px" padding-top="10px">
	</a>
</div>
</div>
</div>
</footer>


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
 <div class="container">
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
</div>

<script>
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
  
});
</script>



</body>
</html>
