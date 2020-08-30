import { AddPassComponent } from './add-pass/add-pass.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetPassComponent } from './get-pass/get-pass.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'addPassword',
    component: AddPassComponent
  },
  {
    path: 'getPassword',
    component: GetPassComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
