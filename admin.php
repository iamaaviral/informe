<!DOCTYPE html>
<html lang="en">
<head>
  <title>admin portal</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
 <script src="http://maps.googleapis.com/maps/api/js?sensor=false&amp;libraries=places&region=in" type="text/javascript"></script>
      <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment-with-locales.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
      <script src="http://cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/a549aa8780dbda16f6cff545aeabc3d71073911e/src/js/bootstrap-datetimepicker.js"></script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
      <link rel="stylesheet" href="http://cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/a549aa8780dbda16f6cff545aeabc3d71073911e/build/css/bootstrap-datetimepicker.css" >
	<script src="https://www.gstatic.com/firebasejs/3.4.1/firebase.js"></script>

	  	<link rel="stylesheet" href="admin.css" />
		<script src="admin.js"></script>

</head>
<body>


  <!--
  <div class="tab-content text-center">
    <div id="menu1" class="tab-pane fade in active">
      <div id="menu11"><h1>Feedback by Users</h1></div>
	<div id="menu12"><h1>Feedback by Visitors</h1></div>
		<div id="menu13"><h1>Feedback by Mobile Application</h1></div>
	</div>
	
    <div id="menu2" class="tab-pane fade">
	<div class="container text-center" >
		<ul class="nav nav-pills">
			<li class="active"><a data-toggle="pill" href="#menu211">Unapproved</a></li>
			<li><a data-toggle="pill" href="#menu222">Approved</a></li>
		</ul>
	</div>
  <div class="tab-content text-center">
    <div id="menu211" class="tab-pane fade in active">
  <div id="menu21"><h1>Unapproved Reports</h1></div>
  </div>
    <div id="menu222" class="tab-pane fade">
  <div id="menu22"><h1>Approved Reports</h1></div>
  </div>
  </div>
</div>
</div>-->

<div class="tabbable parentTabs">
  
		<div class="row text-center">
		<div class="col-sm-12">
  <h2>Admin Portal</h2>
		
	<button class="text-center btn btn-danger" onclick="Signout()">LOG OUT</button>
		</div>	
		
 </div>
  <br/>
 
  <ul class="nav nav-pills">
	<li class="active"><a data-toggle="pill" href="#menu1" style="font-size:25px; color:black;">Feedback</a></li><li> &nbsp &nbsp &nbsp &nbsp </li>
	  <li><a data-toggle="pill" href="#menu2" style="font-size:25px;color:black;">Report</a></li>
  </ul>
  <hr style="height:1px;border:none;color:#333;background-color:#333;" /> <div class="container-fluid text-center" >
  
    <div id="myTabContent" class="tab-content">
        <div class="tab-pane fade active in" id="menu1">
            <div class="tabbable">
                <ul class="nav nav-pills">
                    <li class="active"><a data-toggle="pill" href="#menu11">Feedback by Users</a>
                    </li><li> &nbsp &nbsp &nbsp &nbsp </li>
                    <li><a data-toggle="pill" href="#menu12">Feedback by Visitors</a>
                    </li><li> &nbsp &nbsp &nbsp &nbsp </li>
					<li><a data-toggle="pill" href="#menu13">Feedback by Mobile Application</a>
                    </li>
                </ul>
				<hr/>
                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade active in" id="menu11">
                    </div>
                    <div class="tab-pane fade" id="menu12">
                    </div>
					 <div class="tab-pane fade" id="menu13">
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="menu2">
            <div class="tabbable">
                <ul class="nav nav-pills">
                    <li class="active"><a data-toggle="pill" href="#menu211">Unapproved</a>
                    </li><li> &nbsp &nbsp &nbsp &nbsp </li>
                    <li><a data-toggle="pill" href="#menu222">approved</a>
                    </li>
                </ul>
				<hr/>
                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade active in" id="menu211">
                    </div>
                    <div class="tab-pane fade" id="menu222">
                    </div>
                </div>
            </div>
        </div>
    </div>
	  </div>
</div>



<!--All the required modals-->
   <div class="container">
		<!--modal view report-->
	   <div id="viewReport" class="modal fade" role="dialog">
         <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">×</button>
                  <h3 class="modal-title" id="viewHeading"><font color="white"></font></h3>
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
                <h4 class="modal-title">Delete </h4>
            </div>
            <div class="modal-body">
                <p>Do You Really Want to Delete This ?</p>
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
				<a class="btn btn-danger" id="approveDelete"  data-dismiss="modal"onclick="deleteR()">Delete</a>
            </div>
			
        </div>
      </div>
  </div>
</body>
</html>

