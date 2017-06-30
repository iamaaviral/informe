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
      <script src="http://cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/a549aa8780dbda16f6cff545aeabc3d71073911e/src/js/bootstrap-datetimepicker.js"></script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
      <link rel="stylesheet" href="http://cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/a549aa8780dbda16f6cff545aeabc3d71073911e/build/css/bootstrap-datetimepicker.css" >
    
	<link rel="stylesheet" href="user.css" />
	<link rel="stylesheet" href="footer.css" type="text/css" />
	<link rel="stylesheet" href="navbar.css" type="text/css" />
	<script src="https://www.gstatic.com/firebasejs/3.4.1/firebase.js"></script>
    <script src="user.js"></script>
	 <script src="slideanimation.js"></script>
  
 </head>

<body style="background-color:#1e1e1e" data-spy="scroll" data-target=".navbar" data-offset="60">
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
<li><a href="Home.php"><!--span class=" glyphicon glyphicon-home"--></span> Home</a></li>
<li><a data-toggle="modal" data-target="#myModal3" id="location"><span class="glyphicon glyphicon-map-marker" ></span> Search City</a></li>
<li><a href="AboutUsN.php"><!--span class="glyphicon glyphicon-tasks"--></span> About Us</a></li>
<li><a href="ContactUsN.php"><!--span class="glyphicon glyphicon-phone"--></span> Contact Us</a></li>
<li> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp </li>
 <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"></span><span class="caret"></span></a>
          <ul class="dropdown-menu">
		  <li class="divider"></li>
            <li><a href="#">Submitted Reports</a></li>
			<li class="divider"></li>
            <li><a href="javascript:Signout()">LOGOUT</a></li>
          </ul>
        </li>
	  <li> &nbsp </li>

</ul>
</div>
</div>
</nav>


<br/><br/><br/>


  <div class="container-fluid">
    <h3 class="text-center" >User Stories</h3>
    
	<div id="parent" >
		
	</div>
  </div>
  
   <div class="container">
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
   
   
         <!-- Modal -->
         <div class="modal fade" id="myModal2" role="dialog">
            <div class="modal-dialog">
               <!-- Modal content-->
               <div class="modal-content">
                  <div class="modal-header" style="padding:35px 50px;">
                     <button type="button" class="close" data-dismiss="modal">&times;</button>
                     <h4><span class="glyphicon glyphicon-pencil"></span> EDIT YOUR STORY  </h4>
                  </div>
                  <div class="modal-body" style="padding:40px 50px;">
                     <span class="glyphicon glyphicon-tags"></span> <label> TAGS </label> 
                     <select id="RTag" class="RTag">
                        <option value="aa" id="opt1">Acid Attack</option>
                        <option value="cs" id="opt2">Chain Snatching</option>
                        <option value="cyb" id="opt3">Cyber crime</option>
                        <option value="et" id="opt4">Eve Teasing</option>
                        <option value="hon" id="opt5">Honor killing</option>
                        <option value="ra" id="opt6">Rape</option>
                        <option value="rel" id="opt7">Religious conflicts</option>
                        <option value="rob" id="opt8">Robbery</option>
                        <option value="road" id="opt9">Road Accident</option>
                        <option value="sui" id="opt10">Suicide</option>
                        <option value="mud" id="opt11">Murder</option>
                        <option value="others" id="opt12">Others</option>
                     </select>
                     <br/>
                     <br/>
                     <input type="text" class="form-control" id="RHeading" placeholder="HEADING"  >
                     <br/>
                     <label>Share a photo/video</label>
                     <input type ="file" id="RImg" name="myfile" accept="image/*|video/*" >
                     <br/>
					 <label id="messageFile">    </label><br>
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
                     <button type="submit" class="btn btn-success btn-block" onclick="reSubmit()" id="submitReport" >RE-SUBMIT</button>
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
	  
	  <div class="container" style="padding:150px;">
 
   <!----modal starts here--->
<div id="myModal9" class="modal fade" role='dialog'>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h4 class="modal-title"><span class="glyphicon glyphicon-trash" > Delete</span></h4>
            </div>
            <div class="modal-body" style="style:bold;">
			 
                <p>Do You Really Want to Delete This ?</p>
                
            </div>
            <div class="modal-footer" style="background-color:white">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
				<a class="btn btn-danger" id="approveDelete"  data-dismiss="modal"onclick="deleteR()">Delete</a>
            </div>
			
        </div>
      </div>
  </div>

<!--Modal ends here--->


	 <!-- search city --->
      <div id="myModal3" class="modal fade" >
         <div class="modal-dialog">
            <div class="modal-content search" style="background-color: #1E1E1E;  color: #008CBA;
      text-align: center;
      font-size: 10px;">
               <!-- Search Form -->
                  <!-- Search Field --> <h4 class="text-center"><span class="glyphicon glyphicon-search" > Search Your city </span></h4>
                 
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
       
 
     
  </body>
  </html>
  
  

  






















</body>
</html>