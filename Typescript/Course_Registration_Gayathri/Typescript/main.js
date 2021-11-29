"use strict";
exports.__esModule = true;
var CourseIdAutoIncrement = 1000;
var userIdAutoIncrement = 100;
var User = /** @class */ (function () {
    function User(paramname, paramage, parammobilenumber) {
        CourseIdAutoIncrement++;
        this.UserName = paramname;
        this.UserAge = paramage;
        this.Mobilenumber = parammobilenumber;
    }
    return User;
}());
var CourseInfo = /** @class */ (function () {
    function CourseInfo(paramcourseId, paramcoursename, paramRequireddays, paramuserid) {
        this.CourseId = CourseIdAutoIncrement.toString();
        this.CourseName = paramcoursename;
        this.RequiredDays = paramRequireddays;
    }
    return CourseInfo;
}());
function newuser() {
    var UserName = document.getElementById("username");
    var UserAge = document.getElementById("userAge");
    var Mobilenumber = document.getElementById("Mobilenumber");
    document.getElementById("newuser").style.display = "block";
    document.getElementById("login").style.display = "none";
}
function login() {
    var userid = document.getElementById("userid");
    if (userid.value == "") {
        alert("please enter valid userid");
    }
    else {
    }
}
