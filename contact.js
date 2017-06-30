

// Get a reference to the database service
    	var usersdata = firebase.database().ref('userlist');
		var storageRef = firebase.storage().ref();

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
  
function Signout()
		{
		       firebase.auth().signOut();
				alert("You have successfully logged out...");
				window.location="index.php";
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
        } else {
			
		      }
        
      });
     }
  
var spinning = document.getElementById("spinning");
  	window.onload = function() {
      document.getElementById('apk').href="https://firebasestorage.googleapis.com/v0/b/informe-a3bbf.appspot.com/o/Informe_1.1.apk?alt=media&token=f4212f87-1bb3-41ed-9535-7c9c53bc64a6";
      document.getElementById("spinning").style.display = 'none';
	  initApp();
	  
    };
	
	$(document).ready(function () {
			//	var btn2 = document.getElementById("searchCityFieldButton");
			//	btn2.disabled=true;
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
		//alert("not null");
	  });
	  
	}
  

