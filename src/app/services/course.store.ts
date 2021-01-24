import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Course, sortCoursesBySeqNo } from '../models/course';
import { CourseService } from './course.service';

// Three Shakeable Service
@Injectable({
    providedIn: 'root'
})
export class CourseStore {

    private subscrption: Subscription;

    // stateful the keep the courses and emit new values
    private subject = new BehaviorSubject<Course[]>([]);

    courses$: Observable<Course[]> = this.subject.asObservable();

    constructor(
        private courseService: CourseService,
        private httpClient: HttpClient) {
        console.log('CoursesSTORE instance');
        this.loadAllCourses();
    }

    reloadAllCourses() {
        console.log('reloading courses');
        this.loadAllCourses();
    }

    private loadAllCourses() {

        const loadCourses$ = this.httpClient.get<Course[]>('/api/courses')
            .pipe(
                map(courses => courses['payload'].sort(sortCoursesBySeqNo)),
                catchError((err) => {
                    const message = 'Could not load courses';
                    console.log(message, err);
                    return throwError(err);
                }),
                tap(courses => {
                    console.log('emitting courses', courses);
                    this.subject.next(courses);
                })
            );
        this.subscrption = loadCourses$.subscribe();
        

        // this.courseService.getAllCourses()
        //     .pipe(
        //         tap(courses => {
        //             console.log('CoursesSTORE loadAllCourses');
        //             this.subject.next(courses);  // emit values
        //         })
        //     );
    }

}

