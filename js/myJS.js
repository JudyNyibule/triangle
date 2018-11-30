
//Function that gets processed when the form is submitted.
function isTriangle(){
  var a = parseInt(document.getElementById('mySideA').value);
  var b = parseInt(document.getElementById('mySideB').value);
  var c = parseInt(document.getElementById('mySideC').value);

  var yourSides=[];
  yourSides.push(a,b,c);

//Check if sides received constitiute a triangle.
	if ( (a+b>c) && (b+c>a) && (a+c>b) ){
  	//check what type of triangle it is.
    if (a==b && a==c && b==c ){
      //display the sides received from user and what type of triangle it is.
      document.getElementById('formResult').innerHTML = "Your Sides are: "+ yourSides+"This is a triangle --> Equilateral: All sides are equal!"
      }
      else if(a==b || a==c || b==c ){
        document.getElementById('formResult').innerHTML = "This is a triangle -->Isosceles: Exactly 2 sides are equal."
       }
        else {
          document.getElementById('formResult').innerHTML = "This is a triangle -->Scalene: No sides are equal."  }

  }
    else{
      document.getElementById('formResult').innerHTML = "NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side."

   }


}
