import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
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
  addStudentForm: FormGroup;
  students: IStudent;
  editMode: boolean=false ;
  @Input() studentModel: IStudent
  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit() {
    this.editMode=false;
    this.addStudentForm = new FormGroup(
      {
        fullName: new FormControl("", [Validators.required, Validators.minLength(5)]),
        program: new FormControl("", Validators.required),
        address: new FormControl("", Validators.required),
        id: new FormControl("0")
      }
    );
    if (this.studentModel != null) {
      this.editMode = true;
      this.addStudentForm.patchValue({
        fullName: this.studentModel.Name,
        program: this.studentModel.Program,
        address: this.studentModel.Address,
        id: this.studentModel.Id
      })
    }

  }
  onSubmitToAddStudent() {
    if (!this.editMode) {
      if (localStorage.getItem("StudentId")) {
        var studentId = JSON.parse(localStorage.getItem("StudentId"));
        studentId++;
        localStorage.setItem("StudentId", JSON.stringify(studentId))
      }
      else {
        localStorage.setItem("StudentId", JSON.stringify(17103079))
      }
      this.studentService.addStudent(this.mapStudentBuilider());

      this.router.navigate(['/'])
    }
    else{
      this.studentService.editStudent(this.mapStudentBuilider(),Number(this.addStudentForm.get('id').value));

      this.router.navigate(['/'])

    }
  }

  mapStudentBuilider() {
    if (!this.editMode) {
     return this.students = {
        Program: this.addStudentForm.get('program').value,
        Id: Number(localStorage.getItem("StudentId")),
        Address: this.addStudentForm.get('address').value,
        Name: this.addStudentForm.get('fullName').value
      }
    }
    return this.students = {
      Program: this.addStudentForm.get('program').value,
      Id: this.addStudentForm.get('id').value,
      Address: this.addStudentForm.get('address').value,
      Name: this.addStudentForm.get('fullName').value
    }


  }

}
