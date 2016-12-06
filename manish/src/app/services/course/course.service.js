"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var course_1 = require('../../models/course');
var courses = [
    new course_1.Course(1, 'Course 1'),
    new course_1.Course(2, 'Course 2'),
    new course_1.Course(3, 'Course 3'),
    new course_1.Course(4, 'Course 4'),
    new course_1.Course(5, 'Course 5')
];
//let coursesPromise = courses;
var coursesPromise = Promise.resolve(courses);
var CourseService = (function () {
    function CourseService() {
    }
    CourseService.prototype.getCourses = function () {
        return coursesPromise;
    };
    CourseService.prototype.getCourse = function (id) {
        // (+) converts string 'id' to a number
        return coursesPromise.then(function (d) { return d.find(function (r) { return r.id == +id; }); });
        //return coursesPromise.find(d => d.id === +id);
    };
    CourseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map