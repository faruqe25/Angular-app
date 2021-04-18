import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
 addStudentForm:FormGroup;
 students:any={}
  constructor() { }

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
    console.log(this.addStudentForm.value);
    this.students=Object.assign(this.students,this.addStudentForm.value);
    this.addStudent(this.students);
    this.addStudentForm.reset();
  }
  addStudent(students){
    var studentlist=[];
    if(localStorage.getItem("Students")){
      studentlist=JSON.parse(localStorage.getItem("Students"))
      studentlist=[students,...studentlist]

    }
    else{
      studentlist=[students]

    }
    localStorage.setItem("Students",JSON.stringify(studentlist))

  }

}
