import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStudent } from 'src/app/model/IStudent';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-Student',
  templateUrl: './edit-Student.component.html',
  styleUrls: ['./edit-Student.component.css']
})
export class EditStudentComponent implements OnInit {
public StudentId:number;
public StudentModel:IStudent
  constructor(private studentService:StudentService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.StudentId =this.route.snapshot.params['id'];
   var a=this.studentService.getStudentDetails(Number(this.StudentId))
if(a){
    this.StudentModel={
      Name:a["Name"],
      Program:a["Program"],
      Address:a["Address"],
      Id:a["Id"]
    }
  }

  }


}
