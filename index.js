var reData = [
  ["--Select Resource Type--", "--Select Error Type--"],
  ["Resource1", "--Select Error Type--"],
  ["Resource1", "Error1 for Resource1"],
  ["Resource1", "Error2 for Resource1"],
  ["Resource1", "Error3 for Resource1"],
  ["Resource2", "--Select Error Type--"],
  ["Resource2", "Error1 for Resource2"],
  ["Resource2", "Error2 for Resource2"],
];

var pData = [["--Select Priority Level--"], ["High"], ["Medium"], ["Low"]];

function makeDropDown(data, resourceFilter) {
  const filteredArray = data.filter((r) => r[0] === resourceFilter);
  const uniqueList = getUniqueValues(filteredArray, 1);
  const selectError = document.getElementById("error");
  popDropDown(selectError, uniqueList);
}

function applyDropDown() {
  const selectResource = document.getElementById("resource").value;
  makeDropDown(reData, selectResource);
}

function afterDocumentLoads() {
  popResourceDropDown();
  applyDropDown();
  popPriorityDropDown();
}

function getUniqueValues(data, index) {
  const uniqueOptions = new Set();
  data.forEach((r) => uniqueOptions.add(r[index]));
  return [...uniqueOptions];
}

function popResourceDropDown() {
  const uniqueList = getUniqueValues(reData, 0);
  const el = document.getElementById("resource");
  popDropDown(el, uniqueList);
}

function popPriorityDropDown() {
  const uniqueList = getUniqueValues(pData, 0);
  const el = document.getElementById("priority");
  popDropDown(el, uniqueList);
}

function popDropDown(el, listAsArray) {
  el.innerHTML = "";
  listAsArray.forEach((item) => {
    const option = document.createElement("option");
    option.textContent = item;
    el.appendChild(option);
  });
}

document.getElementById("resource").addEventListener("change", applyDropDown);
document.addEventListener("DOMContentLoaded", afterDocumentLoads);