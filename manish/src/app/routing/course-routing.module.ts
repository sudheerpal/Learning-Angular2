import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CoursesComponent} from '../components/courses/courses.component';
import {CourseDetailComponent} from '../components/courses/coursedetail.component';

const courseRoutes: Routes = [
  { path: 'courses/:id', component: CourseDetailComponent },
  {
    path: 'courses',
    component: CoursesComponent,
    data: {
      title: 'Courses List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(courseRoutes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
