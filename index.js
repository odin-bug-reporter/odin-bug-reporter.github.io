var reData = [
  ["Resource1", "Error1"],
  ["Resource1", "Error2"],
  ["Resource2", "Error3"],
  ["Resource2", "Error4"],
];

function makeDropDown(data, resourceFilter) {
  const filteredArray = data.filter((r) => r[0] === resourceFilter);

  const uniqueOptions = new Set();

  filteredArray.forEach((r) => uniqueOptions.add(r[1]));

  const uniqueList = [...uniqueOptions];

  const selectError = document.getElementById("error");

  uniqueList.forEach((item) => {
    const option = document.createElement("option");
    option.textContent = item;
    selectError.appendChild(option);
  });
}

function applyDropDown() {
  const selectResource = document.getElementById("resource").value;
  makeDropDown(reData, selectResource);
}

document.getElementById("resource").addEventListener("change", applyDropDown);
