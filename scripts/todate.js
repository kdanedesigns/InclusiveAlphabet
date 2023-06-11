// get the last slash, find the length, determine the page
var begPg = location.href.lastIndexOf("/"); 
var endPg = location.href.length; 
var curPg = location.href.substring(begPg+1,endPg); 

var indexPg = "index.html";
var loginPg = "ilogin.html";
var homePg = "ihome.html";
var fontsetPg = "ifontset.html";
var dictionaryPg = "idictionary.html";
var keyboardPg = "ikeyboard.html";
var educationPg = "ieducation.html";
var blogPg = "iblog.html";


// set up today's date variable
var myDate = new Date();
var myDay = myDate.getDate(); //getDate returns 1 - 31
var myMonth = myDate.getMonth() + 1; //getMonth returns 0 - 11
var myYear = myDate.getFullYear();
var dd;
if(myDay < 10)  //add a "zero" to the day 
{
	dd = "0" + myDay;
}else{
	dd = myDay;
}

var mm;
if(myMonth < 10)  //add a "zero" to the month
{
	mm = "0" + myMonth;
}else{
	mm = myMonth;
}
var showDate = (mm + "/" + dd + "/" + myYear);

var myToday = "";



  
switch(curPg)
{
//   case indexPg:
//     myToday="<div align=left><h5><font color=black>Today's Date: " + showDate + "</h5></font></div>";
//     break;
   case loginPg:
       myToday="<div align=center><h2><font color=blue>Today's Date: " + showDate + "</h2></font></div>";
	break;
   case homePg:      
      myToday="<div align=center><h2><font color=red>Today's Date: " + showDate + "</h2></font></div>";
	break;
   case fontsetPg:   
	  myToday="<div align=center><h2><font color=green>Today's Date: " + showDate + "</h2></font></div>";
	break;
   case dictionaryPg: 
      myToday="<div align=center><h2><font color=pink>Today's Date: " + showDate + "</h2></font></div>";
	break;
   case keyboardPg:
      myToday="<div align=center><h2><font color=purple>Today's Date: " + showDate + "</h2></font></div>";
	break;
   case educationPg: 
      myToday="<div align=center><h2><font color=black>Today's Date: " + showDate + "</h2></font></div>";
   case blogPg: 
      myToday="<div align=center><h2><font color=black>Today's Date: " + showDate + "</h2></font></div>";
	break;
}


