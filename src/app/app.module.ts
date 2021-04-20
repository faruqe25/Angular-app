import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { StudentComponent } from './student-component/student/student.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StudentListComponent } from './student-component/student-list/student-list.component';
import { AddStudentComponent } from './student-component/add-student/add-student.component';
import { StudentService } from './services/student.service';
import { EditStudentComponent } from './student-component/edit-Student/edit-Student.component';

const appRoutes: Routes=[
  {path:'', component: StudentListComponent},
  {path:'addstudent', component: AddStudentComponent},
  {path:'editstudent/:id', component: EditStudentComponent},
  {path:'studentdetails/:id', component: StudentComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    NavBarComponent,
    StudentListComponent,
    AddStudentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
