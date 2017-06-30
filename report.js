/*
//To set firebase configration
  var config = {
    apiKey: "AIzaSyAD8Pz1VPgj1UWiH_exPv5dpZbmCI7G1k4",
    authDomain: "informe-a3bbf.firebaseapp.com",
    databaseURL: "https://informe-a3bbf.firebaseio.com",
    storageBucket: "informe-a3bbf.appspot.com",
    messagingSenderId: "905013858382"
  };
  firebase.initializeApp(config);
*/ 
 var current;
 var fdatabase = firebase.database().ref('feedback_web_user');
 var ReportArray = [];
 var storageRef = firebase.storage().ref();

 function getDefaultDatabase()
	{	
		var ReportArr= {heading:"no more reports for this area", story:"", when:"", email:"", tag:"",where:str, imgURL:"defaultreport.jpg",snapkey:"",filename:"",type:0};
		ReportArray[0]=ReportArr;
		ReportArray[1]=ReportArr;
		ReportArray[2]=ReportArr;
		
	}
function getDatabase()
	{
  firebase.database().ref('/location/'+ currentUser.uid).once('value').then(
	function(snapshot) {
			  var str="";

	  str = snapshot.val().Location;
	 // alert(str);
	  if(str == "null")
	  {
	//	  return str;
	  }
		var pos = str.indexOf(',');
		var stateName = str.slice(pos+1,str.length);
		str=stateName;
//		alert("State : "+str);
	  
	  		var count=0;
		var i=0;
		alert("state: "+ str);
	    var myUserId = current.email;
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
					var string = str;
					var imgURL = childSnapshot.val().Imageurl;
					var type = childSnapshot.val().FileType;
			     	var filename = childSnapshot.val().FileName;
					var Rstatus = childSnapshot.val().Status;
					var pos = where.indexOf(',');
					var state = where.slice(pos+1,where.length);
					
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
						if(str==state)
						{
							if(count==3)
							{
								return;
							}
						var ReportArr= {heading:heading, story:story, when:when,heading:heading, email:email, tag:tag,where:where, imgURL:source,snapkey:childSnapshot.key,filename:filename,type:type};
						ReportArray[i]=ReportArr;
						count=count+1;		 
							i=i+1;
						}
					}
					
				});
		});
	
	

	
	});
	}
 
 
function onAuthStateChanged(user) {
  // We ignore token refresh events.
   if (user) {
	 current = user;
    currentUID = user.uid;
   getDefaultDatabase();
	//getDatabase();
  } else {
    // Display the splash page where you can sign-in.
   // splashPage.style.display = '';
	//alert('null');
  }
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
  