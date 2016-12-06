import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import {CoursesComponent} from '../components/courses/courses.component';
import {CourseDetailComponent} from '../components/courses/coursedetail.component';

import { CourseService } from '../services/course/course.service';
import { CourseRoutingModule } from '../routing/course-routing.module';

@NgModule({
  imports:      [ CommonModule, FormsModule, CourseRoutingModule ],
  declarations: [ CoursesComponent, CourseDetailComponent ],
  providers: [CourseService]
})
export class CourseModule { }
