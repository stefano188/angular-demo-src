import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { CourseStore } from 'src/app/services/course.store';

@Component({
  selector: 'store-courses',
  templateUrl: './store-courses.component.html',
  styleUrls: ['./store-courses.component.css']
})
export class StoreCoursesComponent implements OnInit {

  statefulCourses$: Observable<Course[]>;

  constructor(private coursesStore: CourseStore) { 
  }

  ngOnInit() {
    this.statefulCourses$ = this.coursesStore.courses$;
  }

  reloadCourses() {
    this.coursesStore.reloadAllCourses();
  }

}
