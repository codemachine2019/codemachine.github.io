var total;
var gradeCounter;
var grade;
var gradeValue;
var average;
total = 0;
gradeCounter = 1;
while (gradeCounter <=10){
	grade = window.prompt("Enter integer grade:", "0");
	gradeValue = parseInt(grade);
	total = total + gradeValue;
	gradeCounter = gradeCounter + 1;
}
average = total/10;
document.writeln("<h1> Class average is " + average + "</h1>");