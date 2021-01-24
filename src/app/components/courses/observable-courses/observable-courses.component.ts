import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'observable-courses',
  templateUrl: './observable-courses.component.html',
  styleUrls: ['./observable-courses.component.css']
})
export class ObservableCoursesComponent implements OnInit {

  statelessCourses$: Observable<Course[]>;

  constructor(private courseService: CourseService) { 

  }

  ngOnInit() {
    this.statelessCourses$ = this.courseService.getAllCourses();
  }

}
