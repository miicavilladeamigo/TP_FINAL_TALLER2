//---- SLIDER----//

//var slider = document.getElementById("myRange");
//var output = document.getElementById("demo");
//var output2 = document.getElementById("demo2");
//var output3 = document.getElementById("demo3");
//output.innerHTML = slider.value;
//output2.innerHTML = slider.value;
//output3.innerHTML = slider.value;

//slider.oninput = function() {
  //output.innerHTML = this.value;
  //output2.innerHTML = this.value;
  //output3.innerHTML = this.value;
//}
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var output2 = document.getElementById ("demo2");
var output3 = document.getElementById ("demo3");

output.innerHTML = slider.value;
output2.innterHTML = slider.value * 15500;
output3.innterHTML = slider.value * 8;

slider.oninput = function() {
  output.innerHTML = this.value;
  output2.innerHTML = this.value * 15500;
  output3.innerHTML = this.value * 8;
}
