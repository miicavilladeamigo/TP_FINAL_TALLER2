var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("demo3");
output.innerHTML = slider.value;
output2.innerHTML = slider.value;
output3.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  output2.innerHTML = this.value;
  output3.innerHTML = this.value;
}
