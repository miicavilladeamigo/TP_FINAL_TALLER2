//-----SLIDER----//
var slider = document.getElementById("myRange");
//---KILOS DE CARNE---//
var output = document.getElementById("demo");
//---LITROS DE AGUA---//
var output2 = document.getElementById ("demo2");
//----PERSONAS---//
var output3 = document.getElementById ("demo3");

output.innerHTML = slider.value;
output2.innterHTML = slider.value * 15500;
output3.innterHTML = slider.value * 8;

slider.oninput = function() {
  output.innerHTML = this.value;
  output2.innerHTML = this.value * 15500;
  output3.innerHTML = this.value * 8;
}
