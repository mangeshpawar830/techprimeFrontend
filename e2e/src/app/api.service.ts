import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  add_project(obj:any)
  {
    return this.http.post('http://localhost:8765/projectcatogory/save',obj);
  }

  // project_list(page: number, pageSize: number)
  // {
  //   var obj={'offset':page,'pagesize':pageSize};
  //   return this.http.post('http://localhost:1000/project_list',obj);
  // }

  project_lists()
  {
    return this.http.get('http://localhost:8765/projectcatogory/getAllinfo');
  }

  search_project_list(object:any,)
  {
    var obj={'text':object};
    return this.http.post('http://localhost:1000/search_project_list',obj);
  }

  order_project_list(column:any)
  {
    var obj={'column':column};
    return this.http.post('http://localhost:1000/order_project_list',obj);
  }

  // change_status(id:number,status:any)
  // {
  //   var obj={'project_id':id, 'status':status};
  //   return this.http.post('http://localhost:8765/projectcatogory/changeStatus',obj);
  // }
  change_status(id: number, status: any) {
    const obj = { 'psid': id, 'psname': status };  // Corrected parameter names
    return this.http.post('http://localhost:8765/projectcatogory/changeStatus', obj);
  }
  

  project_count(){
    return this.http.get('http://localhost:8765/projectcatogory/projectcount');
  }
  

  chart_count(): Observable<any[][]> {
    return this.http.get<any[][]>('http://localhost:8765/projectcatogory/summary');
  }




  
}


