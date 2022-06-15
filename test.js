var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://odin-bug-reporter.github.io/jsonapi/reData.json",
  true
);

request.onload = function () {
  var reData = JSON.parse(this.response);

  reData.forEach((course) => {
    console.log(course.id);
  });
};

request.send();
