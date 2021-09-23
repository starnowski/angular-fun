import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ApplicationConfig } from 'application-config';


@Injectable({
  providedIn: 'root'
})
export class ApplicationServiceService {

  constructor() { }

  getApplicationConfig(): Observable<ApplicationConfig> {
  {
    const url = `/application-config`;
    return this.http.get<ApplicationConfig>(url)
      .pipe(
        catchError(this.handleError<ApplicationConfig>(`get application config`))
      );
  }
}
