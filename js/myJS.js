var mySideA=prompt('Enter SIDE A: ');
var mySideB=prompt('Enter SIDE B: ');
var mySideC=prompt('Enter SIDE C: ');

function isTriangle(a,b,c){
	if ( (a+b>c) || (b+c>a) || (a+c>b) ){
  	alert("This is a triangle");
  }
  else{ alert("This is not a triangle"); }
}

isTriangle(mySideA,mySideB,mySideC);

if (mySideA==mySideB && mySideA==mySideC && mySideB==mySideC ){
	alert('Equilateral: All sides are equal!');
}
else if(mySideA==mySideB || mySideA==mySideC || mySideB==mySideC ){
	alert('Isosceles: Exactly 2 sides are equal.');
}
else {
	alert('Scalene: No sides are equal.');
}
