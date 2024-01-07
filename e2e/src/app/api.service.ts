import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseurl = "http://localhost:8080/projectcatogory"; // Corrected base URL

  add_project(obj: any) {
    return this.http.post(`${this.baseurl}/save`, obj); // Corrected URL
  }

  project_lists() {
    return this.http.get(`${this.baseurl}/getAllinfo`); // Corrected URL
  }

  search_project_list(object: any) {
    var obj = { 'text': object };
    return this.http.post('http://localhost:1000/search_project_list', obj);
  }

  order_project_list(column: any) {
    var obj = { 'column': column };
    return this.http.post('http://localhost:1000/order_project_list', obj);
  }

  change_status(id: number, status: any) {
    const obj = { 'psid': id, 'psname': status };
    return this.http.post(`${this.baseurl}/changeStatus`, obj); // Corrected URL
  }

  project_count() {
    return this.http.get(`${this.baseurl}/projectcount`); // Corrected URL
  }

  chart_count(): Observable<any> {
    return this.http.get(`${this.baseurl}/summary`); // Corrected URL and return type
  }
}
