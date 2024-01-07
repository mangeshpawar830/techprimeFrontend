import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  constructor(private api:ApiService){}

  public projectData: any[] = [];

  public currentPage: number = 1;
  public itemPerPage: number = 7;
  public totalProduct: number = 0;

  ngOnInit() {
    this.getProjects();
  }

  public getProjects(): void {
    this.api.project_lists().subscribe((res: any) => {
    
      this.projectData = res;
      console.log(this.projectData);
      console.log(res);
      this.totalProduct = res.length;
    })
  }

 


  public changestatus(id:number,obj:any): void {

    console.log("psid: "+id)
    this.api.change_status(id,obj).subscribe((res: any)=>{
      console.log(id);

      console.log(obj);
      this.getProjects();

    })
  }

  onSearch() {
    this.getProjects();
  }

  onSort() {
    this.getProjects();
  }
}
