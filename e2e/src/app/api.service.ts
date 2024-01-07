import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseurl = "http://localhost:8080/projectcatogory"; 

  add_project(obj: any) {
    return this.http.post(`${this.baseurl}/save`, obj); 
  }

  project_lists() {
    return this.http.get(`${this.baseurl}/getAllinfo`); 
  }

 

  change_status(id: number, status: any) {
    const obj = { 'psid': id, 'psname': status };
    return this.http.post(`${this.baseurl}/changeStatus`, obj); 
  }

  project_count() {
    return this.http.get(`${this.baseurl}/projectcount`); 
  }

  chart_count(): Observable<any> {
    return this.http.get(`${this.baseurl}/summary`); 
  }
}
