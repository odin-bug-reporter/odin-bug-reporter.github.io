var resourceObject = {
  Resource1: {
    Error1,
    Error2,
  },
  Resource2: {
    Error3,
    Error4,
  },
};
window.onload = function () {
  var resourceSel = document.getElementById("resource");
  var errorSel = document.getElementById("error");
  for (var x in resourceObject) {
    resourceSel.options[resourceSel.options.length] = new Option(x, x);
  }
  resourceSel.onchange = function () {
    //empty errors- dropdowns
    errorSel.length = 1;
    //display correct values
    for (var y in resourceObject[this.value]) {
      errorSel.options[errorSel.options.length] = new Option(y, y);
    }
  };
};
