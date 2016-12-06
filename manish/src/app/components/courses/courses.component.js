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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var course_service_1 = require('../../services/course/course.service');
var CoursesComponent = (function () {
    function CoursesComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    CoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // (+) converts string 'id' to a number
        this.courses = this.route.params
            .switchMap(function (params) {
            _this.selectedId = +params['id'];
            return _this.service.getCourses();
        });
    };
    CoursesComponent.prototype.isSelected = function (courses) { return courses.id === this.selectedId; };
    CoursesComponent.prototype.onSelect = function (course) {
        this.router.navigate(['/courses', course.id]);
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'courses',
            templateUrl: 'app/views/courses/list.html',
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService, router_1.ActivatedRoute, router_1.Router])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map