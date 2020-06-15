var a = prompt(/**Heading*/ "Enter your age",/**placehoder */ "Your Age is: ");
alert(a);
//plus is used for taking integer input
var b = +prompt(/**Heading*/ "Enter value",/**placehoder */ "Your Value is: ");
var c = b + 10;
alert(c);

var k = "lucky number";
var l = "Enter your lucky number";
var m = +prompt(k,l);
var n = m+ 10;
document.write("The output is" + " " + n);


var std = ["kinza","hammad"];
std.push("anum");

// std.shift();
//will remove the first index val
// will add at start of array,, std.unshift("sapi","saba")
document.write(std);

var ar = ["Apple", "Banana","Mango"];
ar.splice(0,1,"Pine Apple");
document.write(ar);

var copyar = ar.slice(1,4);
document.write(copyar);
