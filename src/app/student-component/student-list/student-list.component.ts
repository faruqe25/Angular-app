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
  Confirm(data){
    var a=JSON.stringify(this.studentService.getStudentIndex(data));
    var id=Number(a);
    this.studentModelList.splice(id,1).splice(0);
    localStorage.setItem("Students",JSON.stringify(this.studentModelList))

  }

}
