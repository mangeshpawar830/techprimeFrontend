import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'create_project',component:CreateProjectComponent},
  { path: 'dashboard', component: DashboardComponent },
  {path:'project_list',component:ProjectListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
