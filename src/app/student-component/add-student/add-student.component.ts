import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IStudent } from 'src/app/model/IStudent';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
 addStudentForm:FormGroup;
 students:IStudent;
  constructor(private router:Router,private studentService:StudentService) { }

  ngOnInit() {
    this.addStudentForm=new FormGroup(
      {
        fullName:new FormControl("",[Validators.required,Validators.minLength(5)]),
        program:new FormControl("",Validators.required),
        address:new FormControl("",Validators.required),
      }
    );
  }
  onSubmitToAddStudent(){
    if(localStorage.getItem("StudentId")){
      var studentId=JSON.parse(localStorage.getItem("StudentId"));
      studentId++;
      localStorage.setItem("StudentId",JSON.stringify(studentId))
    }
    else{
      localStorage.setItem("StudentId",JSON.stringify(17103079))
    }
    this.studentService.addStudent(this.mapStudentBuilider());
    this.addStudentForm.reset();
    this.router.navigate(['/'])
  }

  mapStudentBuilider(){
    return this.students={
      Program:this.addStudentForm.get('program').value,
      Id:JSON.parse(localStorage.getItem("StudentId")),
      Address:this.addStudentForm.get('address').value,
      Name:this.addStudentForm.get('fullName').value
    }

  }

}
