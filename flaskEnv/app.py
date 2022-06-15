from flask import Flask, jsonify

app = Flask(__name__)

courses = [
    {
        "name": "name",
        "course_id": "0",
        "Description": "Description is longer",
        "price": "money money",
    },
    {
        "name": "name1",
        "course_id": "1",
        "Description": "Description1 is longer",
        "price": "money1 money",
    },
    {
        "name": "name2",
        "course_id": "2",
        "Description": "Description2 is longer",
        "price": "money2 money",
    },
]


@app.route("/")
def index():
    return "Welcome To The Course API"


@app.route("/courses", methods=["Get"])
def get():
    return jsonify({"Courses": courses})


@app.route("/courses/<int:course_id>", methods=["GET"])
def get_course(course_id):
    return jsonify({"course": courses[course_id]})


@app.route("/courses", methods=["POST"])
def create():
    course = {
        "name": "name3",
        "course_id": "3",
        "Description": "Description3 is longer",
        "price": "money3 money",
    }
    courses.append(course)
    return jsonify({"Created": course})


@app.route("/courses/<int:course_id>", methods=["PUT"])
def course_update(course_id):
    courses[course_id]["Description"] = "XYZ"
    return jsonify({"course": courses[course_id]})


@app.route("/courses/<int:course_id>", methods=["DELETE"])
def delete(course_id):
    courses.remove(courses[course_id])
    return jsonify({"result": True})


if __name__ == "__main__":
    app.run(debug=True)
