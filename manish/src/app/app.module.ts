import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';

import { CourseModule } from './modules/course.module';
import { IdeaModule } from './modules/idea.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailComponent } from './components/courses/coursedetail.component';


import { HttpService } from './services/http/http.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CourseModule,
    IdeaModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
