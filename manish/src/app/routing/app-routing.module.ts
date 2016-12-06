import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from '../components/home/home.component';
import {CoursesComponent} from '../components/courses/courses.component';
import {CourseDetailComponent} from '../components/courses/coursedetail.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
