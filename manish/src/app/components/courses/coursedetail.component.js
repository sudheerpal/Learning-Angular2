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
var CourseDetailComponent = (function () {
    function CourseDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    Object.defineProperty(CourseDetailComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseDetailComponent.prototype, "display", {
        get: function () {
            return 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseDetailComponent.prototype, "position", {
        get: function () {
            return 'absolute';
        },
        enumerable: true,
        configurable: true
    });
    CourseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // (+) converts string 'id' to a number
        this.route.params
            .switchMap(function (params) { return _this.service.getCourse(+params['id']); })
            .subscribe(function (course) { return _this.course = course; });
    };
    CourseDetailComponent.prototype.gotoCourses = function () {
        var courseId = this.course ? this.course.id : null;
        // Pass along the course id if available
        // so that the Courses (Course List) component can select that hero.
        this.router.navigate(['/courses', { id: courseId }]);
    };
    __decorate([
        core_1.HostBinding('@routeAnimation'), 
        __metadata('design:type', Object)
    ], CourseDetailComponent.prototype, "routeAnimation", null);
    __decorate([
        core_1.HostBinding('style.display'), 
        __metadata('design:type', Object)
    ], CourseDetailComponent.prototype, "display", null);
    __decorate([
        core_1.HostBinding('style.position'), 
        __metadata('design:type', Object)
    ], CourseDetailComponent.prototype, "position", null);
    CourseDetailComponent = __decorate([
        core_1.Component({
            selector: 'course-detail',
            templateUrl: 'app/views/courses/detail.html',
            animations: [
                core_1.trigger('routeAnimation', [
                    core_1.state('*', core_1.style({
                        opacity: 1,
                        transform: 'translateX(0)'
                    })),
                    core_1.transition(':enter', [
                        core_1.style({
                            opacity: 0,
                            transform: 'translateX(-100%)'
                        }),
                        core_1.animate('0.2s ease-in')
                    ]),
                    core_1.transition(':leave', [
                        core_1.animate('0.5s ease-out', core_1.style({
                            opacity: 0,
                            transform: 'translateY(100%)'
                        }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, course_service_1.CourseService])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());
exports.CourseDetailComponent = CourseDetailComponent;
//# sourceMappingURL=coursedetail.component.js.map