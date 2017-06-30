
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
 var ReportArray = [];   //All the unapproved requests
 var ReportArray1 = []; //All the approved requests
var edit = 0;
 var storageRef = firebase.storage().ref();
	var un = 0;
		var ap = 0;
function getDatabase()
	{
		var i=0;
	    var myUserId = current.email;
		firebase.database().ref('/feedback_web_user/').once('value').then(
	function(snapshot) {
		 snapshot.forEach(function(childSnapshot) {
					
					var email = childSnapshot.val().Email;
					var message = childSnapshot.val().Message;
							var html1	=  '<div class="bg-1 " >'+
							  			'<div id="target" class="text-center" >'+
									  '<p><strong>'+email+'</strong>'+
									  ' : '+message+'</p>'+	   
								 ' </div>'+
								 ' </div>';

						 var div1 = document.createElement('div');
						div1.innerHTML = html1;

						$('#menu11').append(div1);  		
		});
	});
	firebase.database().ref('/feedback_web/').once('value').then(
	function(snapshot) {
		 snapshot.forEach(function(childSnapshot) {
					
					var email = childSnapshot.val().Email;
					var message = childSnapshot.val().Message;
							var html1	=  '<div class="bg-1 " >'+
							  			'<div id="target" class="text-center" >'+
									  '<p><strong>'+email+'</strong>'+
									  ' : '+message+'</p>'+	   
								 ' </div>'+
								 ' </div>';

						 var div1 = document.createElement('div');
						div1.innerHTML = html1;
						$('#menu12').append(div1);  		
		});
	});	
		firebase.database().ref('/FeedbackMobile/').once('value').then(
	function(snapshot) {
		 snapshot.forEach(function(childSnapshot) {
					
					var email = childSnapshot.val().Email;
					var message = childSnapshot.val().Message;
					var rating = childSnapshot.val().Rating;
							var html1	=  '<div class="bg-1 " >'+
							  			'<div id="target" class="text-center" >'+
									  '<p><strong>'+email+'</strong>'+
									  ' : '+message+' <strong> Rating : </strong>'+rating+'</p>'+	   
								 ' </div>'+
								 ' </div>';

						 var div1 = document.createElement('div');
						div1.innerHTML = html1;
						$('#menu13').append(div1);  		
		});
	});
		
    	//get unapproved user reports
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
					if(imgURL=="null" || type!=1)
					{
						var source="defaultreport.jpg";
					}
					else
					{
						var source=imgURL;
						//alert(source);
					}
					if(Rstatus=="Unapproved")
					{
					//	alert(childSnapshot.key);
						var ReportArr= {heading:heading, story:story, when:when,heading:heading, email:email, tag:tag,where:where, imgURL:source,snapkey:childSnapshot.key,filename:filename,type:type};
						ReportArray[un]=ReportArr;
						
							 var html1 =  
								'<div class="bg-1" id="report'+un+'">'+
								
								
								'<h3 >'+ '<font color="white" id="headingREP'+un+'">' +heading+ '</font>' + '</h3>'+
								
									
										
								'<div id="target" class="text-center" >'+
									'<div id="target" class="thumbnail slideanim">'+
									  '<img src="'+source+'" id="imageREP'+un+'">'+
									  '<p id="whereREP'+un+'"><strong>' +where+ '</strong></p>'+
									  '<p id="whenREP'+un+'">'+when+'</p>'+
									  '<button class="btn" data-toggle="modal" data-target="#viewReport" onclick="viewR('+un+')">View</button>'+
									  ' <button class="btn" data-toggle="modal" data-target="#myModal2" onclick="editR1('+un+')">Edit</button>'+
									  ' <button class="btn" data-toggle="modal" data-target="#myModal9" onclick="setDeleteR('+un+')">Delete</button>'+
									  ' <button class="btn" onclick="approveR('+un+')">APPROVE</button>'
									' </div>'+
										' </div>'+
								 ' </div>';
							var div1 = document.createElement('div');
							div1.innerHTML = html1;
							//alert(heading);
							$('#menu211').append(div1);  
							un=un+1;
					}
					
					
		});
	});
	
	//get unapproved user reports
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
						var ReportArr= {heading:heading, story:story, when:when,heading:heading, email:email, tag:tag,where:where, imgURL:source,snapkey:childSnapshot.key,filename:filename,type:type};
						ReportArray1[ap]=ReportArr;
						
							 var html1 =  
								'<div class="bg-1" id="report1'+ap+'">'+
								
								
								'<h3 >'+ '<font color="white" id="headingREP1'+ap+'">' +heading+ '</font>' + '</h3>'+
								
									
										
								'<div id="target" class="text-center" >'+
									'<div id="target" class="thumbnail slideanim">'+
									  '<img src="'+source+'" id="imageREP1'+ap+'">'+
									  '<p id="whereREP1'+ap+'"><strong>' +where+ '</strong></p>'+
									  '<p id="whenREP1'+ap+'">'+when+'</p>'+
									  '<button class="btn" data-toggle="modal" data-target="#viewReport" onclick="viewR1('+ap+')">View</button>'+
									  ' <button class="btn" data-toggle="modal" data-target="#myModal2" onclick="editR('+ap+')">Edit</button>'+
									  ' <button class="btn" data-toggle="modal" data-target="#myModal9" onclick="setDeleteR('+ap+')">Delete</button>'+
									  ' <button class="btn" onclick="unapproveR('+ap+')">UN-APPROVE</button>'
									' </div>'+
										' </div>'+
								 ' </div>';
							var div1 = document.createElement('div');
							div1.innerHTML = html1;
							//alert(heading);
							$('#menu222').append(div1);  
							ap=ap+1;
					}
					
					
		});
	});
	}
	var editRNO = 0;
 
 function editR1(i)
 {
	editRNO=i;
	edit=1;
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
 
 function editR(i)
 {
	editRNO=i;
	edit=2;
	var Tval=setTag(i);
	var element = document.getElementById('RTag');
    element.value = Tval;
	//$("div.RTag select").val("ra");
	var element = document.getElementById('RHeading');
	element.value = ReportArray1[i].heading;
	var element = document.getElementById('RWhere');
	element.value = ReportArray1[i].where;
	var element = document.getElementById('RWhen');
	element.value = ReportArray1[i].when;
	var element = document.getElementById('RStory');
	element.innerHTML = ReportArray1[i].story;
	if(ReportArray1[i].filename!="no file chosen")
	{
	document.getElementById('messageFile').innerHTML = "file already selected :" + ReportArray1[i].filename;
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
				//var btn2 = document.getElementById("searchCityFieldButton");
				$("#RHeading").keyup(reportValidation);
				$("#RWhere").keyup(reportValidation);
				$("#RWhen").keyup(reportValidation);
				$("#RStory").keyup(reportValidation);
				//$("#searchCityField").keyup(cityValidation);
				//btn.disabled=true;
				//btn2.disabled=true;
    });
	
function reSubmit()
 {
	 if(edit==1)
	 {
		 reSubmit1();
	 }
	 else{
		 reSubmit2();

	 }
 }	 
	
 function reSubmit1()
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
		alert("Successfully Edited.\n");
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
		alert("Successfully Edited.\n");
     	 $('#myModal2').modal('hide');
	     $('.progress-bar').text('0%');
		$('.progress-bar').css('width', '0%').attr('aria-valuenow', 0);    
		}, 1000);
});
	  
  
 }
 
  function reSubmit2()
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
		firebase.database().ref('/report_web/').child(ReportArray1[editRNO].snapkey).update({
		Email: email,
		Tag: tag,
		Heading: heading,
		Where: where,
		When: when,
		Story: story,
		FileType: ReportArray1[editRNO].type,
		FileName: ReportArray1[editRNO].filename,
		Status:"Approved",
		Imageurl: ReportArray1[editRNO].imgURL
		});
		
		document.getElementById('headingREP1'+editRNO).innerHTML = heading;
		document.getElementById('whereREP1'+editRNO).innerHTML = where;
		document.getElementById('whenREP1'+editRNO).innerHTML = when;
		var ReportArr= {heading:heading, story:story, when:when,heading:heading, email:email, tag:tag,where:where, imgURL: ReportArray1[editRNO].imgURL,snapkey:ReportArray1[editRNO].snapkey,filename:ReportArray1[editRNO].filename,type:ReportArray1[editRNO].type};
		ReportArray1[editRNO]=ReportArr;
		$('.progress-bar').text('100%');
		$('.progress-bar').css('width', '100%').attr('aria-valuenow', 100);    
		setTimeout(function (){
		// Something you want delayed.
		alert("Successfully Edited.\n");
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
		firebase.database().ref('/report_web/').child(ReportArray1[editRNO].snapkey).update({
		Email: email,
		Tag: tag,
		Heading: heading,
		Where: where,
		When: when,
		Story: story,
		FileType: Ftype,
		FileName:file.name,
		Status:"Approved",
		Imageurl: imgurl
  });
		document.getElementById("imageREP1"+editRNO).src = imgurl;
		document.getElementById('headingREP1'+editRNO).innerHTML = heading;
		document.getElementById('whereREP1'+editRNO).innerHTML = where;
		document.getElementById('whenREP1'+editRNO).innerHTML = when;
   var ReportArr= {heading:heading, story:story, when:when,heading:heading, email:email, tag:tag,where:where, imgURL: imgurl,snapkey:ReportArray1[editRNO].snapkey,filename:file.name,type:Ftype};
		ReportArray1[editRNO]=ReportArr;
		
		$('.progress-bar').text('100%');
		$('.progress-bar').css('width', '100%').attr('aria-valuenow', 100);    
		setTimeout(function (){
		// Something you want delayed.
		alert("Successfully Edited.\n");
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
 
 function approveR(i)
 {
	  	
		firebase.database().ref('/report_web/').child(ReportArray[i].snapkey).update({
		Email: ReportArray[i].email,
		Tag: ReportArray[i].tag,
		Heading: ReportArray[i].heading,
		Where: ReportArray[i].where,
		When: ReportArray[i].when,
		Story: ReportArray[i].story,
		FileType: ReportArray[i].type,
		FileName: ReportArray[i].filename,
		Status:"Approved",
		Imageurl: ReportArray[i].imgURL
		});
		var ReportArr= {heading:ReportArray[i].heading, story:ReportArray[i].story, when:ReportArray[i].when,heading:ReportArray[i].heading, email:ReportArray[i].email, tag:ReportArray[i].tag,where:ReportArray[i].where, imgURL:ReportArray[i].imgURL,snapkey:ReportArray[i].snapkey,filename:ReportArray[i].filename,type:ReportArray[i].type};
		ReportArray1[ap] = ReportArr;
		if(ReportArray1[ap].imgURL=="null" || ReportArray1[ap].type!=1)
					{
						var source="defaultreport.jpg";
					}
					else
					{
						var source=ReportArray1[ap].imgURL;
						//alert(source);
					}
		 var html1 =  
								'<div class="bg-1" id="report1'+ap+'">'+
									'<h3 >'+ '<font color="white" id="headingREP1'+ap+'">' +ReportArray1[ap].heading+ '</font>' + '</h3>'+
										
								'<div id="target" class="text-center" >'+
									'<div id="target" class="thumbnail slideanim">'+
									  '<img src="'+source+'" id="imageREP1'+ap+'">'+
									  '<p id="whereREP1'+ap+'"><strong>' +ReportArray1[ap].where+ '</strong></p>'+
									  '<p id="whenREP1'+ap+'">'+ReportArray1[ap].when+'</p>'+
									  '<button class="btn" data-toggle="modal" data-target="#viewReport" onclick="viewR1('+ap+')">View</button>'+
									  ' <button class="btn" data-toggle="modal" data-target="#myModal2" onclick="editR('+ap+')">Edit</button>'+
									  ' <button class="btn" data-toggle="modal" data-target="#myModal9" onclick="setDeleteR('+ap+')">Delete</button>'+ '<br/>'+
									  ' <button class="btn" onclick="unapproveR('+ap+')">UN-APPROVE</button>'
									' </div>'+
										' </div>'+
								 ' </div>';
							var div1 = document.createElement('div');
							div1.innerHTML = html1;
							$('#menu222').append(div1);  
							ap=ap+1;
	 	setTimeout(function (){
		// Something you want delayed.
				$('#report'+i).hide();

		alert("The Report has been approved.It is live now.\n");
     	}, 1000);
				 return;

 }
 
  function unapproveR(i)
 {
	  	
		firebase.database().ref('/report_web/').child(ReportArray1[i].snapkey).update({
		Email: ReportArray1[i].email,
		Tag: ReportArray1[i].tag,
		Heading: ReportArray1[i].heading,
		Where: ReportArray1[i].where,
		When: ReportArray1[i].when,
		Story: ReportArray1[i].story,
		FileType: ReportArray1[i].type,
		FileName: ReportArray1[i].filename,
		Status:"Unapproved",
		Imageurl: ReportArray1[i].imgURL
		});
		var ReportArr= {heading:ReportArray1[i].heading, story:ReportArray1[i].story, when:ReportArray1[i].when,heading:ReportArray1[i].heading, email:ReportArray1[i].email, tag:ReportArray1[i].tag,where:ReportArray1[i].where, imgURL:ReportArray1[i].imgURL,snapkey:ReportArray1[i].snapkey,filename:ReportArray1[i].filename,type:ReportArray1[i].type};
		ReportArray[un] = ReportArr;
		if(ReportArray[un].imgURL=="null" || ReportArray[un].type!=1)
					{
						var source="defaultreport.jpg";
					}
					else
					{
						var source=ReportArray[un].imgURL;
						//alert(source);
					}
		 var html1 =  
								'<div class="bg-1" id="report'+un+'">'+
									'<h3 >'+ '<font color="white" id="headingREP'+un+'">' +ReportArray[un].heading+ '</font>' + '</h3>'+
										
								'<div id="target" class="text-center" >'+
									'<div id="target" class="thumbnail slideanim">'+
									  '<img src="'+source+'" id="imageREP'+un+'">'+
									  '<p id="whereREP'+un+'"><strong>' +ReportArray[un].where+ '</strong></p>'+
									  '<p id="whenREP'+un+'">'+ReportArray[un].when+'</p>'+
									  '<button class="btn" data-toggle="modal" data-target="#viewReport" onclick="viewR('+un+')">View</button>'+
									  ' <button class="btn" data-toggle="modal" data-target="#myModal2" onclick="editR('+un+')">Edit</button>'+
									  ' <button class="btn" data-toggle="modal" data-target="#myModal9" onclick="setDeleteR('+un+')">Delete</button>'+
									  ' <button class="btn" onclick="approveR('+un+')">APPROVE</button>'
									' </div>'+
										' </div>'+
								 ' </div>';
							var div1 = document.createElement('div');
							div1.innerHTML = html1;
							$('#menu211').append(div1);  
							un=un+1;
	 	setTimeout(function (){
		// Something you want delayed.
				$('#report1'+i).hide();

		alert("The Report has been Unapproved.It is off-air now.\n");
     	}, 1000);
				 return;

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
 function viewR1(i)
 {
	var vh= document.getElementById('viewHeading');
	vh.innerHTML=ReportArray1[i].heading;
	var vb= document.getElementById('viewBody');
	var html12=   '<img src="'+ReportArray1[i].imgURL+'" width="575px">'+
                  '<br>'+ReportArray1[i].where+' | '+ReportArray1[i].when+'<br>'+ReportArray1[i].story;
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
 
 
 function onAuthStateChanged(user) {
  // We ignore token refresh events.
   if (user) {
	 current = user;
    currentUID = user.uid;
   
	getDatabase();
  } else {
    // Display the splash page where you can sign-in.
   // splashPage.style.display = '';
	//alert('null');
  }
}
   
function pickdate()
         {
         $('#RWhenbox').datetimepicker();	
         }
 
 
 // Bindings on load.
window.addEventListener('load', function() {
 
  // Listen for auth state changes
firebase.auth().onAuthStateChanged(onAuthStateChanged);
});


function Signout()
		{
		       firebase.auth().signOut();
				alert("You have successfully logged out...");
				window.location="index.php";
		}