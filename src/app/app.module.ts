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
import { AddProductComponent } from './product-component/add-product/add-product.component';
import { ProductDetailsComponent } from './product-component/product-details/product-details.component';
import { ProductListComponent } from './product-component/product-list/product-list.component';
import { AddProductTypeComponent } from './product-component/add-product-type/add-product-type.component';
import { ProductTypeListComponent } from './product-component/product-type-list/product-type-list.component';
import { ProductService } from './services/product.service';

const appRoutes: Routes=[
  {path:'', component: StudentListComponent},
  {path:'addstudent', component: AddStudentComponent},
  {path:'editstudent/:id', component: EditStudentComponent},
  {path:'studentdetails/:id', component: StudentComponent},
  // For RMS
  {path:'producttypelist', component: ProductTypeListComponent},
  {path:'addproduct', component: AddProductComponent},
  {path:'productlist', component: ProductListComponent},


]
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    NavBarComponent,
    StudentListComponent,
    AddStudentComponent,
    EditStudentComponent,
    //New App RMS
    AddProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    AddProductTypeComponent,
    ProductTypeListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
