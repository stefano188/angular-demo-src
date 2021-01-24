import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { Course, sortCoursesBySeqNo } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { 
    console.log('CourseService instance');
  }

  getAllCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>('/api/courses')
      .pipe(
        map(courses => {
          console.log('CourseService getAllCourses');
          // console.log('getAllCourses', courses);
          // console.log('getAllCourses payload', courses["payload"]);
          // console.log('getAllCourses payload type', typeof(courses["payload"]));
          // console.log('getAllCourses keys', Object.keys(courses));
          // console.log('getAllCourses values', Object.values(courses));
          return courses["payload"];
        }),
        catchError((err) => {
          const message = 'Could not load courses';
          console.log(message, err);
          return throwError(err);
        }),
        tap((courses: Course[]) => courses.sort(sortCoursesBySeqNo)),
        shareReplay() // share among multiple subscriptions
      );
  }
}
