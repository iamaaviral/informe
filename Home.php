<!DOCTYPE html>
<html>
   <head>
      <title>User Home</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
 <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment-with-locales.js"></script>	 
	 <script src="http://maps.googleapis.com/maps/api/js?sensor=false&amp;libraries=places&region=in" type="text/javascript"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
     
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
     
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	   <script src="http://cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/a549aa8780dbda16f6cff545aeabc3d71073911e/src/js/bootstrap-datetimepicker.js"></script>
      <link rel="stylesheet" href="http://cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/a549aa8780dbda16f6cff545aeabc3d71073911e/build/css/bootstrap-datetimepicker.css" >
      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="footer.css" type="text/css" />
      <link rel="stylesheet" href="navbar.css" type="text/css" />
      <script src="https://www.gstatic.com/firebasejs/3.4.1/firebase.js"></script>
      <script src="gitnew2.js"></script>
     <link rel="stylesheet" href="spinner.css"/>
	
      <script src="slideanimation.js"></script>
   </head>
   <body style="background-color:white;" data-spy="scroll" data-target=".navbar" data-offset="60">
      
      <!--pre-loader end-->
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
                  <li>
                     <a href="Home.php">
                        <!--span class=" glyphicon glyphicon-home"--></span> Home
                     </a>
                  </li>
                  <li><a data-toggle="modal" data-target="#myModal3" id="location" ><span class="glyphicon glyphicon-map-marker"></span> Search City</a></li>
                  <li>
                     <a href="AboutUsN.php">
                        <!--span class="glyphicon glyphicon-tasks"--></span> About Us
                     </a>
                  </li>
                  <li>
                     <a href="ContactUsN.php">
                        <!--span class="glyphicon glyphicon-phone"--></span> Contact Us
                     </a>
                  </li>
                  <li> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp </li>
                  <li class="dropdown">
                     <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"></span><span class="caret"></span></a>
                     <ul class="dropdown-menu">
                        <li class="divider"></li>
                        <li><a href="user.php">Submitted Reports</a></li>
                        <li class="divider"></li>
                        <li><a href="javascript:Signout()">LOGOUT</a></li>
                     </ul>
                  </li>
                  <li> &nbsp </li>
               </ul>
            </div>
         </div>
      </nav>
      <div class="img-wrapper">
         <img class="img-responsive" src="Slice 6.png" height="100%" width="100%">
         <div class="img-overlay">
            <a data-toggle="modal" data-target="#myModal8"> <button class="btn btn-responsive btn-submit">Share your experience here</button></a>
         </div>
      </div>
      <br/>
      <div class="container-fluid slideanim">
         <br>
         <div id="myCarousel" class="carousel slide " data-ride="carousel">
            <div class="carousel-inner " role="listbox">
               <div class="item active slideanim container-fluid">
                  <div class="col-md-5 ">       
                     <img id="RIMAGE0" src="defaultreport.jpg" alt="report1" width="100%" height="345">
                  </div>
                  <div class="col-md-1">
                  </div>
                  <div class="col-md-5 text-center" >
                     <h1 id="RHEADING0"></h1>
                     <p><font color="white" id="RDESCRIPTION0"></font>
                     </p>
                     <p><a class="btn btn-large btn-primary" data-toggle="modal" data-target="#viewReport" onclick="viewR(0)">Read full story</a>
                     </p>
                  </div>
                  <div class="col-md-1">
                  </div>
               </div>
               <div class="item slideanim ">
                  <div class="col-md-5 ">       
                     <img id="RIMAGE1" src="defaultreport.jpg" alt="report1" width="100%" height="345">
                  </div>
                  <div class="col-md-1">
                  </div>
                  <div class="col-md-5 text-center" >
                     <h1 id="RHEADING1"></h1>
                     <p><font color="white" id="RDESCRIPTION1"></font>
                     </p>
                     <p><a class="btn btn-large btn-primary" data-toggle="modal" data-target="#viewReport" onclick="viewR(1)">Read full story</a>
                     </p>
                  </div>
                  <div class="col-md-1">
                  </div>
				  </div>
                <div class="item slideanim ">
                  <div class="col-md-5 ">       
                     <img id="RIMAGE2" src="defaultreport.jpg" alt="report1" width="100%" height="345">
                  </div>
                  <div class="col-md-1">
                  </div>
                  <div class="col-md-5 text-center" >
                     <h1 id="RHEADING2"></h1>
                     <p><font color="white" id="RDESCRIPTION2"></font>
                     </p>
                     <p><a class="btn btn-large btn-primary" data-toggle="modal" data-target="#viewReport" onclick="viewR(2)">Read full story</a>
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
	  <span class="anchor" id="blog1" style="padding-top: 400px;"></span>
      <!-- Container (blog Section) -->
      <div id="blog" class="container-fluid text-center">
         <div class="item">
            <br/>
            <div class="row text-center slideanim">
               <div class="col-sm-4">
                  <a href="blogN.php" style="color:black;" target="_blank">
                     <div class="thumbnail zoomin" >
                        <img src="images/pic.jpg" alt="IMAGE" width="400" height="300">
                        <h3><strong>Don’t be a Victim</strong></h3>
                     </div>
                  </a>
               </div>
               <div class="col-sm-4" >
                  <a href="blog2N.php" style="color:black;" target="_blank">
                     <div class="thumbnail zoomin">
                        <img src="images/pic1.jpg" alt="report2" width="400" height="300">
                        <h3><strong>Women, stay safe!</strong></h3>
                     </div>
                  </a>
               </div>
               <div class="col-sm-4">
                  <a href="blog3N.php" style="color:black;" target="_blank">
                     <div class="thumbnail zoomin">
                        <img src="images/pic2.jpg" alt="report2" width="400" height="300">
                        <h3><strong>Travelling Tips</strong></h3>
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </div>
	  
	  <!--modal view report-->
	   <div id="viewReport" class="modal fade" role="dialog">
         <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">×</button>
                  <h3 class="modal-title" id="viewHeading" style="color:black;"><font color="white"></font></h3>
               </div>
               <div class="modal-body" id="viewBody">
               </div>
            </div>
         </div>
      </div>
     
      <br/>
      <!---- modal report ------->
      <div class="container">
         <!-- Modal -->
         <div class="modal fade" id="myModal8" role="dialog">
            <div class="modal-dialog">
               <!-- Modal content-->
               <div class="modal-content">
                  <div class="modal-header" style="padding:35px 50px;">
                     <button type="button" class="close" data-dismiss="modal">&times;</button>
                     <h4><span class="glyphicon glyphicon-pencil"></span> ADD YOUR STORY  </h4>
                  </div>
                  <div class="modal-body" style="padding:40px 50px;">
                     <span class="glyphicon glyphicon-tags"></span> <label> TAGS </label> 
                     <select id="RTag">
                        <option value="aa">Acid Attack</option>
                        <option value="cs">Chain Snatching</option>
                        <option value="cyb">Cyber crime</option>
                        <option value="et">Eve Teasing</option>
                        <option value="hon">Honor killing</option>
                        <option value="ra">Rape</option>
                        <option value="rel">Religious conflicts</option>
                        <option value="rob">Robbery</option>
                        <option value="road">Road Accident</option>
                        <option value="sui">Suicide</option>
                        <option value="mud">Murder</option>
                        <option value="others">Others</option>
                     </select>
                     <br/>
                     <br/>
                     <input type="text" class="form-control" id="RHeading" placeholder="HEADING"  >
                     <br/>
                     <label>Share a photo/video</label>
                     <input type ="file" id="RImg" name="myfile" accept="image/*|video/*" >
                     <br/>
                     <label>Where</label>	
                     <input type="text" class="form-control" id="RWhere" placeholder="Where did I witness it?" >
					                         <script>
                           function initialize() {
                           
                           var input = document.getElementById('RWhere');
						   						   var options = {
							   types : ['(cities)'],
							   componentRestrictions : {country:"in"}
						   };
                           var autocomplete = new google.maps.places.Autocomplete(input,options);
                           }
                           
                           google.maps.event.addDomListener(window, 'load', initialize);
                           
                        </script>
                     <br/>
                     <label>When</label>	
                     <div class="row">
                        <div class='col-sm-6'>
                           <div class="form-group">
                              <div class='input-group date' id='RWhenbox' >
                                 <input type='text' class="form-control"  id='RWhen' name="name" placeholder="mm/dd/yyyy hh:mm" >
                                 <span class="input-group-addon">
                                 <span class="glyphicon glyphicon-calendar" onclick='pickdate()'></span>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <br/>
                     <label>Enter your Experience </label>
                     <br/>
                     <textarea class="form-control" id="RStory" name="experience" placeholder="Here is the description of what I witnessed!" rows="5" required></textarea>
                     <br/>
                     <button type="submit" class="btn btn-success btn-block" onclick="report()" id="submitReport">SUBMIT</button>
                  </div>
                  <br>
                  <div class="progress">
                     <div class="progress-bar progress-bar-striped active" role="progressbar"		  aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%">
                        <span id="pgptage"> </span>
                     </div>
                  </div>
                  <div class="modal-footer">
                     <button type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> Cancel</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
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
                  <div>Reports<br><a href="Home.php">Current Location</a><br><a data-toggle="modal" data-target="#myModal3">Search City</a></div>
                  <br>
                  <div>Blogs<br><a href="#blog1">Recent</a><br><a data-toggle="modal" data-target="#blog1">All</a></div>
               </div>
               <div class="col-sm-3 text-center">
                  <div>Information<br><a href="AboutUsN.php">About us</a><br><a href="ContactUsN.php">Contact Us</a></div>
                  <br>
                  <div>My Account<br><a href="javascript:Signout()">Sign out</a></div>
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
     

	 <!-- search city --->
      <div id="myModal3" class="modal fade" >
         <div class="modal-dialog">
            <div class="modal-content search">
               <!-- Search Form -->
                  <!-- Search Field -->
                  <h1 class="text-center">Search Your city</h1>
                        <input id="searchCityField" class="form-control" type="text" name="search" placeholder="Enter your location here" required/>
						 <script>
                           function initialize() {
                          
                           var input = document.getElementById('searchCityField');
						   var options = {
							   types : ['(cities)'],
							   componentRestrictions : {country:"in"}
						   };
                           var autocomplete = new google.maps.places.Autocomplete(input,options);
                           }
                           
                           google.maps.event.addDomListener(window, 'load', initialize);
                        
                        </script>
                        <button class="btn btn-success pull-right" id="searchCityFieldButton" onclick="cityChange()" >
                        <span class="glyphicon glyphicon-search" aria-hidden="false">
                        <span style="margin-left:10px;" >Search</span>
                        </button>
                        </span>
						</div>
                  </div>
            </div>
       

      <!--Date Picker Script-->
      <script>
         function pickdate()
         {
         $('#RWhenbox').datetimepicker();	
         }
      </script>
	  
	  <!--pre-loader-->
      <div id="spinning">
         <div class="spinner"></div>
         <div class="spinner2"></div>
      </div>
   </body>
</html>