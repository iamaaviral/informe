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
	    var fdatabase = firebase.database().ref('feedback_web');
    	var usersdata = firebase.database().ref('userlist');

  function feedback()
  {
	  var name = document.getElementById('name').value;
 //     alert(name);
	  var message = document.getElementById('comment').value;
 //     alert(message);
	  var myEmail = document.getElementById('myEmail').value;
 //     alert(myEmail);
      fdatabase.push({
		Name: name,
        Email: myEmail,
		Status: "Not viewed",
		Message: message
  });
  }
  
		
    function toggleSignIn() {
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        var email = document.getElementById('myemail2').value;
        var password = document.getElementById('mypassword2').value;
	        if (email.length < 6) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 6) {
          alert('Please enter a password. (minimum 6 letters)');
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
          
        });

		 // [END authwithemail]
      }
      //document.getElementById('quickstart-sign-in').disabled = true;
    }
    /**
     * Handles the sign up button press.
     */
    function handleSignUp() {
		 var email = document.getElementById('signemail').value;
         var password = document.getElementById('signpassword1').value;
      if (emailValidate()==false) {
        return;
      }
      if (password.length < 6) {
        alert('Weak password.(minimum 6 letters)');
        return;
      }
	  var check=phonenumberValidation();
	  if(check==false)
	  {
		  return;
	  }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
	  newuser();
      // [END createwithemail]
    }
    /**
     * Sends an email verification to the user.
     */
    function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }

    function sendPasswordReset() {
      var email = document.getElementById('myemailforgot').value;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
    }

    /**
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */

	 function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
	  			 // alert('Hi its initapp()');

      firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        //document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
			currentUser=user;
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
		
          if (!emailVerified) {
			  		sendEmailVerification();
		  }
		  		if(user.email=="admin@informe.com")
				{
					window.location = "admin.php";
				}
				else{
				window.location="Home.php";
				}
          // [END_EXCLUDE]
        } else {
			
		}
        // [START_EXCLUDE silent]
        // [END_EXCLUDE]
      });
      // [END authstatelistener]
	  }
  
  	window.onload = function() {
      document.getElementById('apk').href="https://firebasestorage.googleapis.com/v0/b/informe-a3bbf.appspot.com/o/Informe_1.1.apk?alt=media&token=f4212f87-1bb3-41ed-9535-7c9c53bc64a6";
	  initApp();
	  
    };
	
			$(document).ready(function () {
			var btn = document.getElementById("register");	
			$("#signpassword2").keyup(checkPasswordMatch);
			$("#signpassword1").keyup(checkPasswordMatch);

   		btn.disabled=true;
    });
	  
	function checkPasswordMatch() {
	  var btn = document.getElementById("register");	
  	  var pnm = document.getElementById("passnotmatch");	

    var password = $("#signpassword1").val();
    var confirmPassword = $("#signpassword2").val();
	
    if (password != confirmPassword)
	{
        $("#passnotmatch").html("Passwords do not match!");
		pnm.style.color="red";
		btn.disabled=true;
	}
	else
	{
		if(password=="")
		{
		  $("#passnotmatch").html(" ");
		btn.disabled=true;	
		}
		else{
        $("#passnotmatch").html("Passwords match.");
		pnm.style.color="green";
		btn.disabled=false;
		}
	}
	
	}
	 function newuser()
  {
	  	  var current = firebase.auth().currentUser;

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
  firebase.database().ref('location/'+current.uid).set({
    Location:"null"
  });
     //	alert('done1');
  }
  
  function phonenumberValidation()
  {
	  var num = $("#signcontact").val();
if(num=="")
{
	alert("Please enter the phone number");
	$("#signcontact").focus(); 
	return false;
}
if(isNaN(num))
{
	alert("Invalid phone number");
	$("#signcontact").focus(); 

	return false;
}
if(num.length < 10)
{
	alert("Phone number should be minimum 10 digits");
	$("#signcontact").focus(); 

	return false;
}
return true;
}

function emailValidate() {
    var x = $("#signemail").val();
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
			$("#signemail").focus(); 

        return false;
    }
	return true;
}

	$(document).ready(function () {
			  var btn = document.getElementById("register");	
				$("#signemail").keyup(signupValidation);
				$("#signcontact").keyup(signupValidation);
				$("#signname").keyup(signupValidation);
				$("#signpassword1").keyup(signupValidation);
				$("#signpassword2").keyup(signupValidation);

				btn.disabled=true;
    });
	
	function signupValidation() {
	var btn = document.getElementById("register");	
	btn.disabled=false;
    var value = $("#signemail").val();
    if(value=="")
		{
		btn.disabled=true;	
		}
		 var value = $("#signcontact").val();
    if(value=="")
		{
		btn.disabled=true;	
		}
		 var value = $("#signpassword1").val();
    if(value=="")
		{
		btn.disabled=true;	
		}
		 var value = $("#signpassword2").val();
    if(value=="")
		{
		btn.disabled=true;	
		}
	}