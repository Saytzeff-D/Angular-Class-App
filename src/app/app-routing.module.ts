import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { HomeGuard } from './home.guard';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { MaterialClassComponent } from './material-class/material-class.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParentComponent } from './parent/parent.component';
import { PipeClassComponent } from './pipe-class/pipe-class.component';
import { SigninComponent } from './signin/signin.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', children: [
    {path: '', component: HomeComponent},
    {path: 'info/:id', component: InfoComponent},
  ]},
  {path: 'list', children: [
    {path: '', component: FirstComponent},
    {path: 'details/:index', component: StudentComponent}
  ]},
  {path: 'signin', component: SigninComponent},
  {path: 'materials', component: MaterialClassComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'pipe', component: PipeClassComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
