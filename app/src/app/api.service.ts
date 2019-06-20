import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


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
    return this.http.get<string[]>(url);
  }

  getMetrics(server: string, job: string): Observable<string[]> {
    var url = apiServer + jobsApi + server + "/" + job + metricsApiSuffix;
    return this.http.get<any[]>(url);
  }
}
