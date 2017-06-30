
//To set firebase configration
  var config = {
    apiKey: "AIzaSyAD8Pz1VPgj1UWiH_exPv5dpZbmCI7G1k4",
    authDomain: "informe-a3bbf.firebaseapp.com",
    databaseURL: "https://informe-a3bbf.firebaseio.com",
    storageBucket: "informe-a3bbf.appspot.com",
    messagingSenderId: "905013858382"
  };
  firebase.initializeApp(config);
 var current;
 var fdatabase = firebase.database().ref('feedback_web_user');
 var ReportArray = [];
 var storageRef = firebase.storage().ref();
	        var currentUser;

function getDatabase()
	{
		var i=0;
	    var myUserId = current.email;
    	//alert("yo"+myUserId);
		//var userId = firebase.auth().currentUser.uid;
	firebase.database().ref('/report_web/').once('value').then(
	function(snapshot) {
		 snapshot.forEach(function(childSnapshot) {
					var heading = childSnapshot.val().Heading;
					//alert(username);
					var story = childSnapshot.val().Story;
					var when = childSnapshot.val().When;
					var email = childSnapshot.val().Email;
					var tag = childSnapshot.val().Tag;
					var where = childSnapshot.val().Where;
					var imgURL = childSnapshot.val().Imageurl;
					var type = childSnapshot.val().FileType;
			     	var filename = childSnapshot.val().FileName;
					
					if(imgURL=="null" || type!=1)
					{
						var source="defaultreport.jpg";
					}
					else
					{
						var source=imgURL;
						//alert(source);
					}
					if(myUserId==email)
					{
					//	alert(childSnapshot.key);
						var ReportArr= {heading:heading, story:story, when:when,heading:heading, email:email, tag:tag,where:where, imgURL:source,snapkey:childSnapshot.key,filename:filename,type:type};
						ReportArray[i]=ReportArr;
						
							 var html1 =  
								'<div class="bg-1" id="report'+i+'">'+
								'<div class="row text-center">' +
									'<div class="col-lg-12 text-center"> '+
								'<h3 >'+ '<font color="white" id="headingREP'+i+'">' +heading+ '</font>' + '</h3>'+
								' </div>'+
										' </div>'+
										
								'<div id="target" class="text-center" >'+
									'<div id="target" class="thumbnail slideanim">'+
									  '<img src="'+source+'" id="imageREP'+i+'">'+
									  '<p id="whereREP'+i+'"><strong>' +where+ '</strong></p>'+
									  '<p id="whenREP'+i+'">'+when+'</p>'+
									  '<button class="btn" data-toggle="modal" data-target="#viewReport" onclick="viewR('+i+')">View</button>'+
									  ' <button class="btn" data-toggle="modal" data-target="#myModal2" onclick="editR('+i+')">Edit</button>'+
									  ' <button class="btn" data-toggle="modal" data-target="#myModal9" onclick="setDeleteR('+i+')">Delete</button>'+
									' </div>'+
										' </div>'+
								 ' </div>';
							var div1 = document.createElement('div');
							div1.innerHTML = html1;
							//alert(heading);
							$('#parent').append(div1);  
							i=i+1;
					}
					
					
		});
	});
	}
	var editRNO = 0;
 
 function editR(i)
 {
	editRNO=i;
	var Tval=setTag(i);
	var element = document.getElementById('RTag');
    element.value = Tval;
	//$("div.RTag select").val("ra");
	var element = document.getElementById('RHeading');
	element.value = ReportArray[i].heading;
	var element = document.getElementById('RWhere');
	element.value = ReportArray[i].where;
	var element = document.getElementById('RWhen');
	element.value = ReportArray[i].when;
	var element = document.getElementById('RStory');
	element.innerHTML = ReportArray[i].story;
	if(ReportArray[i].filename!="no file chosen")
	{
	document.getElementById('messageFile').innerHTML = "file already selected :" + ReportArray[i].filename;
	}
 }
 
 	function reportValidation1()
	  {
			
			if(ReportArray[editRNO].FileName=="no file chosen" && document.getElementById("RImg").value == "")
			{
									return 0;

			}
			if(ReportArray[editRNO].FileName!="no file chosen" && document.getElementById("RImg").value == "")
			{
									return 1;

			}
		return 2;
	  }
	  
	  	function reportValidation() {
	var btn = document.getElementById("submitReport");	
	btn.disabled=false;
    var value = $("#RHeading").val();
    if(value=="")
		{
		btn.disabled=true;	
		}
		 var value = $("#RWhere").val();
    if(value=="")
		{
		btn.disabled=true;	
		}
		 var value = $("#RWhen").val();
    if(value=="")
		{
		btn.disabled=true;	
		}
		 var value = $("#RStory").val();
    if(value=="")
		{
		btn.disabled=true;	
		}
	}
	  
	  	$(document).ready(function () {
			  var btn = document.getElementById("submitReport");
				var btn2 = document.getElementById("searchCityFieldButton");
				$("#RHeading").keyup(reportValidation);
				$("#RWhere").keyup(reportValidation);
				$("#RWhen").keyup(reportValidation);
				$("#RStory").keyup(reportValidation);
				$("#searchCityField").keyup(cityValidation);
				//btn.disabled=true;
				btn2.disabled=true;
    });
	
 function reSubmit()
 {
	 var checkValid = reportValidation1();	
	 if(checkValid!=2)
	 {
		var current = firebase.auth().currentUser;		
	  	var e = document.getElementById("RTag");
		var tag = e.options[e.selectedIndex].text;
		var heading = document.getElementById('RHeading').value;
		var where = document.getElementById('RWhere').value;
	  	var when = document.getElementById('RWhen').value;		
	  	var story = document.getElementById('RStory').value;
		var email=current.email;
		firebase.database().ref('/report_web/').child(ReportArray[editRNO].snapkey).update({
		Email: email,
		Tag: tag,
		Heading: heading,
		Where: where,
		When: when,
		Story: story,
		FileType: ReportArray[editRNO].type,
		FileName: ReportArray[editRNO].filename,
		Status:"Unapproved",
		Imageurl: ReportArray[editRNO].imgURL
		});
		
		document.getElementById('headingREP'+editRNO).innerHTML = heading;
		document.getElementById('whereREP'+editRNO).innerHTML = where;
		document.getElementById('whenREP'+editRNO).innerHTML = when;
		var ReportArr= {heading:heading, story:story, when:when,heading:heading, email:email, tag:tag,where:where, imgURL: ReportArray[editRNO].imgURL,snapkey:ReportArray[editRNO].snapkey,filename:ReportArray[editRNO].filename,type:ReportArray[editRNO].type};
		ReportArray[editRNO]=ReportArr;
		$('.progress-bar').text('100%');
		$('.progress-bar').css('width', '100%').attr('aria-valuenow', 100);    
		setTimeout(function (){
		// Something you want delayed.
		alert("Successfully Edited.\n Thanks for sharing your story with us. \nOur team will review the post and it will be live soon.\n ");
     	 $('#myModal2').modal('hide');
	     $('.progress-bar').text('0%');
		$('.progress-bar').css('width', '0%').attr('aria-valuenow', 0);    

		}, 1000);
		 return;
	 }
	 var Imagepath = document.getElementById("RImg").value;
	 var Ftype=0;   //1 for image   //2 for video
	  // File or Blob named mountains.jpg
	var file = document.getElementById("RImg").files[0];
	var ext = file.name.split('.').pop().toLowerCase();
        if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
         if($.inArray(ext, ['mp4','mov', 'flv', 'avi','mkv','MKV']) == -1) {
			            alert('invalid file extension.');
						return;
        }
		else{
			//	alert('video');
				var metadata = {
				  contentType: 'video/'+ext
				};
				if(file.size>10485760)
				{
					
					alert("Video of 10MB or less only can be uploaded");
					return;
					}
				var uploadTask = storageRef.child('video/' + file.name).put(file, metadata);
				Ftype=2;
		}
		}
		else{
				//alert('image ');
				var metadata = {
					contentType: 'image/'+ext
					};
				var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
				Ftype=1;
			}


// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
	var rprogress = Math.floor(progress);  //rounded down progress
    console.log('Upload is ' + progress + '% done');
  $('.progress-bar').css('width', progress+'%').attr('aria-valuenow', progress);    
  $('.progress-bar').text(rprogress+'%');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      break;
  }
}, function() {
  // Upload completed successfully, now we can get the download URL
		imgurl = uploadTask.snapshot.downloadURL;
		var current = firebase.auth().currentUser;		
	  	var e = document.getElementById("RTag");
		var tag = e.options[e.selectedIndex].text;
		var heading = document.getElementById('RHeading').value;
		var where = document.getElementById('RWhere').value;
	  	var when = document.getElementById('RWhen').value;		
	  	var story = document.getElementById('RStory').value;
		var email=current.email;
		firebase.database().ref('/report_web/').child(ReportArray[editRNO].snapkey).update({
		Email: email,
		Tag: tag,
		Heading: heading,
		Where: where,
		When: when,
		Story: story,
		FileType: Ftype,
		FileName:file.name,
		Status:"Unapproved",
		Imageurl: imgurl
  });
		document.getElementById("imageREP"+editRNO).src = imgurl;
		document.getElementById('headingREP'+editRNO).innerHTML = heading;
		document.getElementById('whereREP'+editRNO).innerHTML = where;
		document.getElementById('whenREP'+editRNO).innerHTML = when;
  var ReportArr= {heading:heading, story:story, when:when,heading:heading, email:email, tag:tag,where:where, imgURL: imgurl,snapkey:ReportArray[editRNO].snapkey,filename:file.name,type:Ftype};
		ReportArray[editRNO]=ReportArr;
		
		$('.progress-bar').text('100%');
		$('.progress-bar').css('width', '100%').attr('aria-valuenow', 100);    
		setTimeout(function (){
		// Something you want delayed.
		alert("Successfully Edited.\n Thanks for sharing your story with us. \nOur team will review the post and it will be live soon.\n ");
     	 $('#myModal2').modal('hide');
	     $('.progress-bar').text('0%');
		$('.progress-bar').css('width', '0%').attr('aria-valuenow', 0);    
		}, 1000);
});
	  
  
 }
 
 function setTag(i)
 {
	 var tag=ReportArray[i].tag;
         switch(tag) {
				case "Acid Attack":
				   var val ="aa";
					break;
				case "Chain Snatching":
				   var val ="cs";
					break;
				case "Cyber crime":
				   var val ="cyb";
					break;
				case "Eve Teasing":
				   var val ="et";
					break;
				case "Honor killing":
				   var val ="hon";
					break;
				case "Rape":
				   var val ="ra";
					break;
					case "Religious conflicts":
				   var val ="rel";
					break;
					case "Robbery":
				   var val ="rob";
					break;
					case "Road Accident":
				   var val ="road";
					break;
				case "Others":
				   var val ="others";
					break;
				case "Murder":
				   var val ="mud";
					break;
				case "Suicide":
				   var val ="sui";
					break;
				default:alert('undefined tag');
			}
	 return val;
 }
 
 
 function viewR(i)
 {
	var vh= document.getElementById('viewHeading');
	vh.innerHTML=ReportArray[i].heading;
	var vb= document.getElementById('viewBody');
	var html12=   '<img src="'+ReportArray[i].imgURL+'" width="575px">'+
                  '<br>'+ReportArray[i].where+' | '+ReportArray[i].when+'<br>'+ReportArray[i].story;
	vb.innerHTML= html12;
 }
 var repdel =0;
 
 function setDeleteR(i)
 {
	repdel =i;
 }
 
 function deleteR()
 {
	 firebase.database().ref('/report_web/').child(ReportArray[repdel].snapkey).remove();
	 alert("Report Deleted");
	 $('#report'+repdel).hide();
 }
 
 
 function cityValidation()
	{
		var btn = document.getElementById("searchCityFieldButton");	
		btn.disabled=false;
		var value = $("#searchCityField").val();
		if(value=="")
			{
			btn.disabled=true;	
			}
	}
 
 function onAuthStateChanged(user) {
  // We ignore token refresh events.
   if (user) {
	 current = user;
	 currentUser=user;

    currentUID = user.uid;
   setCity();
	getDatabase();
  } else {
    // Display the splash page where you can sign-in.
   // splashPage.style.display = '';
	alert('null');
  }
}
   
function pickdate()
         {
         $('#RWhenbox').datetimepicker();	
         }
 
 function Signout()
		{
		       firebase.auth().signOut();
				alert("You have successfully logged out...");
				window.location="index.php";
		}
		
		function setCity()
  {
	 // var current = firebase.auth().currentUser;
	  var str;
	  firebase.database().ref('/location/'+ currentUser.uid).once('value').then(
	function(snapshot) {
	  str = snapshot.val().Location;
	 // alert(str);
	  if(str == "null")
	  {
		 // alert("null");
		  return;
	  }
		var pos = str.indexOf(',');
		var cityName = str.slice(0,pos);
		var html = '<span class="glyphicon glyphicon-map-marker"></span>'+cityName;
		document.getElementById("location").innerHTML =html;
		$('#searchCityField').text(str);
		state = str.slice(pos+1,str.length);
		
		//alert("not null");
	  });
	  
	}
function cityChange()
  {
	  var current = firebase.auth().currentUser;
	  var str = $("#searchCityField").val();
	  var pos = str.indexOf(',');
	  var cityName = str.slice(0,pos);
	  //alert("hi");
	  var html = '<span class="glyphicon glyphicon-map-marker"></span>'+cityName;
	  document.getElementById("location").innerHTML =html;
 	  //alert("hi2");
	   $('#searchCityField').text('');
	  $('#myModal3').modal('hide');
		firebase.database().ref('location/'+current.uid).set({
		Location:str
  }).then(function(){
	  location.reload(true);
  });
  }

 
 // Bindings on load.
window.addEventListener('load', function() {
 
  // Listen for auth state changes
firebase.auth().onAuthStateChanged(onAuthStateChanged);
});


