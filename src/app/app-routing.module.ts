 import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';


const appRoutes: Routes=[
  { path : 'list'  , component  : ListEmployeesComponent}         ,
  { path :'create' , component  : CreateEmployeeComponent}        ,
  { path : ''      , redirectTo : '/list' , pathMatch : 'full'} ,
  { path : 'home'  , component  : CreateEmployeeComponent} ,
]
 

const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
