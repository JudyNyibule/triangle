
//my js file
function isTriangle(){
  var a = parseInt(document.getElementById('mySideA').value);
  var b = parseInt(document.getElementById('mySideB').value);
  var c = parseInt(document.getElementById('mySideC').value);

	if ( (a+b>c) && (b+c>a) && (a+c>b) ){
  	alert("This is a triangle");
  }
  else{ alert("This is not a triangle"); }

}
