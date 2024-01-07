import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  constructor(private api: ApiService) {}

  public projectData: any[] = [];

  public currentPage: number = 1;
  public itemPerPage: number = 7;
  public totalProduct: number = 0;

  ngOnInit() {
    this.getProjects();
  }

  public getProjects(searchTerm?: string, sortField?: string): void {
    this.api.project_lists().subscribe((res: any) => {
      if (searchTerm) {
        res = res.filter((item: any) =>
          item.proname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.projectReason.prname.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (sortField) {
        res = res.sort((a: any, b: any) => {
          switch (sortField) {
            case 'project_priority':
              return a.projectPriority.ppname.localeCompare(b.projectPriority.ppname);
            case 'project_category':
              return a.projectCategory.pcname.localeCompare(b.projectCategory.pcname);
            case 'project_reason':
              return a.projectReason.prname.localeCompare(b.projectReason.prname);
            case 'project_division':
              return a.projectDivision.pdivname.localeCompare(b.projectDivision.pdivname);
            case 'project_department':
              return a.projectDept.pdname.localeCompare(b.projectDept.pdname);
            case 'project_location':
              return a.projectLocation.plname.localeCompare(b.projectLocation.plname);
            default:
              return 0;
          }
        });
      }

      this.projectData = res;
      this.totalProduct = res.length;
    });
  }

  public changestatus(id: number, obj: any): void {
    console.log("psid: " + id);
    this.api.change_status(id, obj).subscribe((res: any) => {
      console.log(id);
      console.log(obj);
      this.getProjects();
    });
  }

  onSearch() {
    const searchTerm = (document.querySelector('.serch-input') as HTMLInputElement).value;
    this.getProjects(searchTerm);
  }

  onSort() {
    const sortField = (document.querySelector('.sort-box') as HTMLSelectElement).value;
    this.getProjects(undefined, sortField);
  }
}
