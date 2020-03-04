import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../models/app-error';
import { BadRequest } from '../models/bad-request';
import { NotFound } from '../models/not-found';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {

  constructor(
    private httpClient: HttpClient, 
    private url: string,
    private fakeurl?: string) { }

  getAll() {
    return this.httpClient.get(this.url)
      .pipe(
        map(result => result as []), 
        catchError(this.handleError));
  }

  create(resource) {
    return this.httpClient.post(this.url, JSON.stringify(resource))
      .pipe(
        map(response => response),
        catchError(this.handleError));
  }

  update(resource, body) {
    console.log('updating url', this.url + "/" + resource.id);
    return this.httpClient.put(this.url + "/" + resource.id, JSON.stringify(body))
      .pipe(
        map(response => {
          console.log('updated', response);
          response['updated'] = 'UPD';
          return response;
        }),
        catchError(this.handleError));
  }

  delete(resource) {
    console.log('deleting url', this.url + "/" + resource.id);
    return this.httpClient.delete(this.url + "/" + resource.id)
      .pipe(
        response => response,
        catchError(this.handleError));
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
