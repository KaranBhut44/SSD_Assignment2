function formValidation()  
{  
var fname = document.reg.username;
var lname = document.reg.lastname;
var passid = document.reg.pass.value;
var copassid = document.reg.copass.value; 
var umob = document.reg.mob;
var uemail = document.reg.email;  
var ucountry = document.reg.country;
var mgen =document.reg.gen[0].checked;
var fgen = document.reg.gen[1].checked;

// FOR alphabet characters only
var letters = /^[A-Za-z]+$/;  
if(fname.value.match(letters))  
{  

}  
else  
{  
alert('Firstname must have alphabet characters only');  
return false;  
}  


// for value should not be empty
if (lname.value == "" || lname.value == null)  
{  
alert("last name should not be empty");  
return false;  
}  



// For Password should not be empty & between 5 to 12

if (passid.length == 0 || passid.length >= 12 || passid.length < 5)  
{  
alert("Password should not be empty & between 5 to 12");  
return false;  
}  

// for  Password and confirm password must same

if (passid != copassid)  
{  
alert("Password and confirm password not same");  
return false;  
}  

// For  10 digit mobile no:

var number =  /^[0-9]{10}$/;  
if(umob.value.match(number))  
{  
  
}  
else  
{  
alert("mobile no:  only 10 digit");  
return false;  
}  

//  For Email validation 

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(uemail.value.match(mailformat))  
{  

}  
else  
{  
alert("You have entered an invalid email address!");  
return false;  
}  

// For Dropdown selection 

if(ucountry.value == "Default")  
{  
alert("Select your country from the list");  
return false;  
}  

 // Radio button Validation
 
if ( ( mgen == false ) && ( fgen == false ) )
{
alert ( "Please choose your Gender: Male or Female" );
return false;
}


//After Succesfully submited.. this alert message will show. 

else  
{  
alert('Form Succesfully Submitted');  
return true;  
}  
}

