	function getDatabase()
	{
	    var myUserId = current.email;
    	//alert("yo"+myUserId);
		//var userId = firebase.auth().currentUser.uid;
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
	var i=0;
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
					
					if(imgURL=="null" || type!=1)
					{
						var source="report1.jpg";
					}
					else
					{
						var source=imgURL;
						//alert(source);
					}
					var html1 =  
								'<div class="bg-1">'+
								'<div class="row text-center">' +
									'<div class="col-lg-12 text-center"> '+
								'<h3 >'+ '<font color="white">' +heading+ '</font>' + '</h3>'+
								' </div>'+
										' </div>'+
										
								'<div id="target" class="text-center" >'+
									'<div id="target" class="thumbnail slideanim">'+
									  '<img src="'+source+'">'+
									  '<p><strong>' +where+ '</strong></p>'+
									  '<p>'+when+'</p>'+
									  '<button class="btn" data-toggle="modal" data-target="#myModal1">View</button>'+
									  ' <button class="btn" data-toggle="modal" data-target="#myModal2">Edit</button>'+
									  ' <button class="btn" data-toggle="modal" data-target="#myModal9">Delete</button>'+
									' </div>'+
										' </div>'+
								 ' </div>';
							var div1 = document.createElement('div');
							div1.innerHTML = html1;
							//alert(heading);
							$('#menu2').append(div1);  
			
		});
	});
	}
 
 
 