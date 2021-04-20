import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IStudent } from 'src/app/model/IStudent';
import { StudentService } from 'src/app/services/student.service';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() studentModel: IStudent
  @Output() deleteStudent: EventEmitter<number> = new EventEmitter<number>();
  public detailsMode: boolean = false;


  constructor(private studentService: StudentService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    var id = this.router.snapshot.params['id']
    if (id) {
      var a = this.studentService.getStudentDetails(Number(id))
      if (a) {
        this.studentModel = {
          Name: a["Name"],
          Program: a["Program"],
          Address: a["Address"],
          Id: a["Id"]
        }
      }
      this.detailsMode = true;

    }
  }
  passData(id: number) {
    this.deleteStudent.emit(id);
  }

}
