import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {CourseService} from '../../services/course/course.service';
import {Course} from '../../models/course';

@Component({
  selector: 'course-detail',
  templateUrl: 'app/views/courses/detail.html',
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class CourseDetailComponent implements OnInit { 
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }
  @HostBinding('style.display') get display() {
    return 'block';
  }
  @HostBinding('style.position') get position() {
    return 'absolute';
  }

  course: Course;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CourseService
  ) {}

  ngOnInit() {
      // (+) converts string 'id' to a number
    this.route.params
      .switchMap((params: Params) => this.service.getCourse(+params['id']))
      .subscribe((course: Course) => this.course = course);
  }
  
  gotoCourses() {
    let courseId = this.course ? this.course.id : null;
    // Pass along the course id if available
    // so that the Courses (Course List) component can select that hero.
    this.router.navigate(['/courses', { id: courseId }]);
  }

}
