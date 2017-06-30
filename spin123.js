var spinning = document.getElementById("spinning");
  	window.onload = function() {
        };
	function pg(){
		if(document.getElementById("RImg").value == "") {
						            alert('NO FILE');

}
	var Imagepath = document.getElementById("RImg").value;
	var file = document.getElementById("RImg").files[0];
	var ext = file.name.split('.').pop().toLowerCase();
        if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
         if($.inArray(ext, ['mp4','mov', 'flv', 'avi','mkv','MKV']) == -1) {
			            alert('invalid file extension.');
        }
		else{
						            alert('video ');

		}
		}
		else{
			            alert('image ');
		}
	}
		function pg2(){
		 var e = $("#RWhere").val();
		 if(e=="")
		 {
			 			            alert('null');

		 }
		}
function pg3()  
{  
/*
  var phoneno = /^\d{10}$/;
  if($("#RImg1").value.match(phoneno)) 
        {  
	        alert("correct");  
      //return true;  
        }  
      else  
        {  
        alert("incorrect");  
        //return false;  
        }  
if($("#RImg1").value=="")
{
	alert("Please enter the phone number");
	$("#RImg1").focus(); 
	return false;
}
if(isNaN($("#RImg1").value))
{
	alert("Invalid phone number");
	$("#RImg1").focus(); 
	return false;
}
if(($("#RImg1").value).length < 10)
{
	alert("Phone number should be minimum 10 digits");
	$("#RImg1").focus(); 
	return false;
}*/
var num = $("#RImg1").val();
if(num=="")
{
	alert("Please enter the phone number");
	$("#RImg1").focus(); 
	return false;
}
if(isNaN(num))
{
	alert("Invalid phone number");
	$("#RImg1").focus(); 
	return false;
}
if(num.length < 10)
{
	alert("Phone number should be minimum 10 digits");
	$("#RImg1").focus(); 
	return false;
}

//alert(""+num);

return true;
}  