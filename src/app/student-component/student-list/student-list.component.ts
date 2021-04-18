import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/app/model/IStudent';
import { StudentService } from 'src/app/services/student.service';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentModelList: Array<IStudent> ;
  constructor( private studentService:StudentService) { }

  ngOnInit(): void {
   this.studentModelList= this.studentService.getAllStudentList();
  }

}
