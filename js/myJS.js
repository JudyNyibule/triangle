
//my js file
function isTriangle(){
  var a = parseInt(document.getElementById('mySideA').value);
  var b = parseInt(document.getElementById('mySideB').value);
  var c = parseInt(document.getElementById('mySideC').value);

	if ( (a+b>c) && (b+c>a) && (a+c>b) ){
  	alert("This is a triangle");
    if (a==b && a==c && b==c ){
      alert('Equilateral: All sides are equal!');  }
      else if(a==b || a==c || b==c ){
      	alert('Isosceles: Exactly 2 sides are equal.');  }
        else {
        	alert('Scalene: No sides are equal.');  }

  }
    else{ alert("NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side."); }


}
