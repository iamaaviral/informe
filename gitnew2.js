//To set firebase configration
  var config = {
    apiKey: "AIzaSyAD8Pz1VPgj1UWiH_exPv5dpZbmCI7G1k4",
    authDomain: "informe-a3bbf.firebaseapp.com",
    databaseURL: "https://informe-a3bbf.firebaseio.com",
    storageBucket: "informe-a3bbf.appspot.com",
    messagingSenderId: "905013858382"
  };
  firebase.initializeApp(config);


// Get a reference to the database service
    	var usersdata = firebase.database().ref('userlist');
		var storageRef = firebase.storage().ref();
        var currentUser;
		var ReportArray = [];
		var state;
// Get a reference to the database service
	  var fdatabase = firebase.database().ref('feedback_web_user');
  function feedback()
  {
	  	  var current = firebase.auth().currentUser;
//     alert(name);
	  var message = document.getElementById('comment').value;
 //     alert(message);
	  var myEmail = current.email;
   //   alert(myEmail);
      fdatabase.push({
		Email: myEmail,
		Status: "Not viewed",
		Message: message
  });
  }
  
  	  var fdatabasereport = firebase.database().ref('report_web');

	function reportValidation1()
	  {
				if(document.getElementById("RImg").value == "") {
					return 0;
			}
		return 1;
	  }
	  
	  
	  
  function report()
  {
	 var checkValid = reportValidation1();
	 if(checkValid!=1)
	 {
		 var current = firebase.auth().currentUser;		
	  	var e = document.getElementById("RTag");
		var tag = e.options[e.selectedIndex].text;
		var heading = document.getElementById('RHeading').value;
		var where = document.getElementById('RWhere').value;
	  	var when = document.getElementById('RWhen').value;		
	  	var story = document.getElementById('RStory').value;
		var email=current.email;
		fdatabasereport.push({
		Email: email,
		Tag: tag,
		Heading: heading,
		Where: where,
		When: when,
		Story: story,
		FileType: 0,
		FileName: "no file chosen",
		Status:"Unapproved",
		Imageurl: "null"
  });
		$('.progress-bar').text('100%');
		$('.progress-bar').css('width', '100%').attr('aria-valuenow', 100);    
		setTimeout(function (){
		// Something you want delayed.
		alert("Successfully Submitted.\n Thanks for sharing your story with us. \nOur team will review the post and it will be live soon.\n ");
     	 $('#myModal8').modal('hide');
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
		fdatabasereport.push({
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
		$('.progress-bar').text('100%');
		$('.progress-bar').css('width', '100%').attr('aria-valuenow', 100);    
		setTimeout(function (){
		// Something you want delayed.
		alert("Successfully Submitted.\n Thanks for sharing your story with us. \nOur team will review the post and it will be live soon.\n ");
     	 $('#myModal8').modal('hide');
	     $('.progress-bar').text('0%');
		$('.progress-bar').css('width', '0%').attr('aria-valuenow', 0);    

		}, 1000);
		

});
	  
  }
  
  
function Signout()
		{
		       firebase.auth().signOut();
				alert("You have successfully logged out...");
				window.location="index.php";
		}
		
    function toggleSignIn() {
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        //var email = document.getElementById('email').value;
       // var password = document.getElementById('password').value;
	    var email = document.getElementById('myemail2').value;
        var password = document.getElementById('mypassword2').value;
		     //       alert(email);
			//		alert(password);

        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorCode);
            alert(errorMessage);
          }
          console.log(error);
          
		  //document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
		// alert('here123 Logged IN');
		 //window.location="Home.php";

		 // [END authwithemail]
      }
      //document.getElementById('quickstart-sign-in').disabled = true;
    }
    
 
   
    function initApp() {
  

      firebase.auth().onAuthStateChanged(function(user) {
       
        if (user) {
          // User is signed in.
		  			currentUser=user;

          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;

          var providerData = user.providerData;

		  	setCity();
			setTimeout(function (){
		// Something you want delayed.
			var pathname = window.location.pathname;
			var pos = pathname.lastIndexOf('/');
			var path = pathname.slice(pos+1,pathname.length);
			//alert(path);
			if(path=="Home.php")
			{
			//	alert("home");
				getDefaultDatabase();
				getDatabase();
			
  
			}
		}, 1500);
				document.getElementById("spinning").style.display = 'none';
		  
        } else {
			
		      }
        
      });
     }
  
var spinning = document.getElementById("spinning");




  	window.onload = function() {
      //document.getElementById('apk').href="https://firebasestorage.googleapis.com/v0/b/informe-a3bbf.appspot.com/o/Informe_1.1.apk?alt=media&token=f4212f87-1bb3-41ed-9535-7c9c53bc64a6";
      //document.getElementById("spinning").style.display = 'none';
	  initApp();
	  
    };


	
	$(document).ready(function () {
				var btn2 = document.getElementById("searchCityFieldButton");
		$("#searchCityField").keyup(cityValidation);

				btn2.disabled=true;
			var pathname = window.location.pathname;
			var pos = pathname.lastIndexOf('/');
			var path = pathname.slice(pos+1,pathname.length);
			//alert(path);
			if(path=="Home.php")
			{
				var btn = document.getElementById("submitReport");
				$("#RHeading").keyup(reportValidation);
				$("#RWhere").keyup(reportValidation);
				$("#RWhen").keyup(reportValidation);
				$("#RStory").keyup(reportValidation);
				btn.disabled=true;
  
			}
			if(path=="Home.php"||path=="ContactUsN.php"||path=="AboutUsN.php")
			{
				document.getElementById('apk').href="https://firebasestorage.googleapis.com/v0/b/informe-a3bbf.appspot.com/o/Informe_1.1.apk?alt=media&token=f4212f87-1bb3-41ed-9535-7c9c53bc64a6";
			}
		
    });
	

	
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



	function newuser()
  {
		var signname = document.getElementById('signname').value;
	//	alert(signname);
		var signemail = document.getElementById('signemail').value;
	//	alert(signemail);
		var signcontact = document.getElementById('signcontact').value;
	//	alert(signcontact);
		usersdata.push({
		Name: signname,
        Email: signemail,
		Contact: signcontact
  });
     //	alert('done1');

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
	  var pathname = window.location.pathname;
			var pos = pathname.lastIndexOf('/');
			var path = pathname.slice(pos+1,pathname.length);
			//alert(path);
			if(path=="Home.php")
			{
				location.reload(true);
			}
	 
  });
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


	
function getDefaultDatabase()
	{	
		//		alert("setting data");

		var ReportArr= {heading:"No more reports for this area", story:"no more stories have been shared for this area", when:"", email:"", tag:"",where:"", imgURL:"defaultreport.jpg",snapkey:"",filename:"",type:0};
		ReportArray[0]=ReportArr;
		//alert(ReportArray[0].heading);
		ReportArray[1]=ReportArr;
		ReportArray[2]=ReportArr;
		document.getElementById("RHEADING0").innerHTML="No more reports for this area";
		document.getElementById("RHEADING1").innerHTML="No more reports for this area";
		document.getElementById("RHEADING2").innerHTML="No more reports for this area";
		
	}

	
function getDatabase()
	{

 		var count=0;
		var i=0;
		//alert("state: "+ state);
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
					var Rstatus = childSnapshot.val().Status;
					var pos = where.indexOf(',');
					var Rstate = where.slice(pos+1,where.length);
					
							if(imgURL=="null" || type!=1)
					{
						var source="defaultreport.jpg";
					}
					else
					{
						var source=imgURL;
						//alert(source);
					}
					if(Rstatus=="Approved")
					{
					//	alert(childSnapshot.key);
						if(state==Rstate)
						{
							if(count==3)
							{
								return;
							}
						var ReportArr= {heading:heading, story:story, when:when,heading:heading, email:email, tag:tag,where:where, imgURL:source,snapkey:childSnapshot.key,filename:filename,type:type};
						ReportArray[i]=ReportArr;
						document.getElementById('RHEADING'+i).innerHTML=heading;
						document.getElementById('RIMAGE'+i).src=source;
						document.getElementById('RDESCRIPTION'+i).innerHTML=story;
						
						count=count+1;		 
							i=i+1;
							//alert("REPORT IS THERE");
		
						}
					}
					
				});
		});

	}
  

function viewR(i)
 {
	// alert(i);
	var vh= document.getElementById('viewHeading');
	vh.innerHTML=ReportArray[i].heading ;
	var vb= document.getElementById('viewBody');
	var html12=   '<img src="'+ReportArray[i].imgURL+'" width="575px">'+
                  '<br>'+ReportArray[i].where+' | '+ReportArray[i].when+'<br>'+ReportArray[i].story;
	vb.innerHTML= html12;
 }
  
