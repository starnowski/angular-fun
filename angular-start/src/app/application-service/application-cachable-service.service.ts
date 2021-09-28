import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ApplicationConfig } from './application-config';
import { Cacheable } from 'ngx-cacheable';

@Injectable({
  providedIn: 'root'
})
export class ApplicationCachableServiceService {

  constructor(private http: HttpClient) { }

  @Cacheable()
  getApplicationConfig(): Observable<ApplicationConfig> {
    const url = `/application-config`;
    return this.http.get<ApplicationConfig>(url)
      .pipe(
        catchError(this.handleError<ApplicationConfig>(`get application config`))
      );
  }

  private handleError<T>(operation = 'operation') {
      return (error: HttpErrorResponse): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        const message = (error.error instanceof ErrorEvent) ?
          error.error.message :
         `server returned code ${error.status} with body "${error.error}"`;

        // TODO: better job of transforming error for user consumption
        throw new Error(`${operation} failed: ${message}`);
      };

    }
}


