import { Injectable } from '@angular/core';
import { Course } from '../../models/course';


let courses = [
  new Course(1, 'Course 1'),
  new Course(2, 'Course 2'),
  new Course(3, 'Course 3'),
  new Course(4, 'Course 4'),
  new Course(5, 'Course 5')
];

//let coursesPromise = courses;
let coursesPromise = Promise.resolve(courses);

@Injectable()
export class CourseService { 
    getCourses() {
        return coursesPromise;
    }    

    getCourse(id: number | string) {
        // (+) converts string 'id' to a number
        return coursesPromise.then(d => d.find(r => r.id == +id));
        //return coursesPromise.find(d => d.id === +id);
    }
}
