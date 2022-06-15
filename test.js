var request = new XMLHttpRequest();

request.open("GET", "http://127.0.0.1:5000/courses", true);

request.onload = function () {
  var reData = JSON.parse(this.response);

  reData.forEach((course) => {
    console.log(course.id);
  });
};

request.send();
