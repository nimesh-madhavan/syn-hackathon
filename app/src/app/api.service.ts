import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



const apiServer = "http://localhost:3000";
const jobsApi = "/api/jobs/";
const metricsApiSuffix = "/metadata"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getJobs(server: string): Observable<string[]> {
    var url = apiServer + jobsApi + server;
    return this.http.get<string[]>(url).pipe(
       retry(1),
       catchError(this.handleError)
     );
  }
  handleError(error) {
   let errorMessage = '';
   if (error.error instanceof ErrorEvent) {
     // client-side error
     errorMessage = `Error: ${error.error.message}`;
   } else {
     // server-side error
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
  // return throwError(errorMessage);
  return of([])
 }
  getMetrics(server: string, job: string): Observable<string[]> {
    var url = apiServer + jobsApi + server + "/" + job + metricsApiSuffix;
    return this.http.get<any[]>(url).pipe(
       retry(1),
       catchError(this.handleError)
     );
  }
}
