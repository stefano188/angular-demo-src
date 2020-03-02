import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { AppError } from '../models/app-error';
import { error } from 'protractor';
import { BadRequest } from '../models/bad-request';
import { NotFound } from '../models/not-found';

@Injectable({
  providedIn: 'root'
})
export class DemoHttpService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.url)
      .pipe(
        map(result => result as []), 
        catchError(this.handleError)
      );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadRequest());
    } else if (error.status === 404) {
      return throwError(new NotFound());
    } 
    return throwError(new AppError(error));
  }
}
