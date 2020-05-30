import { environment } from './../environments/environment';
import { RequestBenchmarkEntry } from './../models/request-benchmark-entry';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsiteSpeedTestService {

constructor(
  private httpClient: HttpClient
) { }

  getHishtory(): Observable<RequestBenchmarkEntry[]>{
    const url: string = `${environment.apiEndpoint}/api/website-statistic`;
    
    return this.httpClient.get<RequestBenchmarkEntry[]>(url);
  }

  getSpeedTestDetails(id: number): Observable<RequestBenchmarkEntry>{
    const url: string = `${environment.apiEndpoint}/api/website-statistic/${id}`;

    return this.httpClient.get<RequestBenchmarkEntry>(url);
  }

  evaluatePerformance(uri: string): Observable<RequestBenchmarkEntry>{
    const url: string = `${environment.apiEndpoint}/api/website-statistic`;
    const requestBody = {
      uri: uri
    }

    return this.httpClient.post<RequestBenchmarkEntry>(url, requestBody)
  }
}
