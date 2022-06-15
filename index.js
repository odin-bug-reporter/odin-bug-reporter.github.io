var reData = [
  ["Resource1", "Error1"],
  ["Resource1", "Error2"],
  ["Resource2", "Error3"],
  ["Resource2", "Error4"],
];

const filteredArray = data.filter((r) => r[0] === "Resource1");

console.log(filteredArray);
