import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CourseService } from '../../services/course/course.service';
import { Course } from '../../models/course';

@Component({
    selector: 'courses',
    templateUrl: 'app/views/courses/list.html',
})
export class CoursesComponent implements OnInit {

    courses: Observable<Course[]>;
    //courses: Course[];

    private selectedId: number;
    constructor(
        private service: CourseService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
      // (+) converts string 'id' to a number
        this.courses = this.route.params
            .switchMap((params: Params) => {
                this.selectedId = +params['id'];
                return this.service.getCourses();
            });
    }
    isSelected(courses: Course) { return courses.id === this.selectedId; }

    onSelect(course: Course) {
        this.router.navigate(['/courses', course.id]);
    }
}
