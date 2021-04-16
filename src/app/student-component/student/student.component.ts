import { Component, Input, OnInit } from '@angular/core';
import { IStudent } from 'src/app/model/IStudent';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input()  studentModel: IStudent


  constructor() { }

  ngOnInit(): void {
  }

}
