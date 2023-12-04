// console.log("helllo javascript");
// console.log(document.getElementsByTagName("h1"));

var she = (document.getElementById("she").style.color = "red");

// console.log(she);
// document.getElementById("she").style.removeProperty("color");

var img = document.getElementById("img1");
img.setAttribute("alt", "propp");
img.classList.add("test");
// console.log(img);
// console.log(img.getAttribute("alt"));

var her0 = document.getElementById("hero");
// console.log(her0.innerText);

var input = document.getElementById("input");
// console.log(input.value);

// var testDiv = document.getElementsByClassName("testDiv");
// console.log(testDiv[0].childNodes[1]);

var newH1 = document.getElementById("h");
var p = document.createElement("p");
p.innerText = "Hi theer.. this is from Js file";
newH1.append(p);

document.getElementById("click").addEventListener("click", function (e) {
  var p = document.createElement("p");
  p.innerText = "Hi theer.. this is from Js file";
  newH1.append(p);
});
