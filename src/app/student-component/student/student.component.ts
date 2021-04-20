import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

import { IStudent } from 'src/app/model/IStudent';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input()  studentModel: IStudent
  @Output() deleteStudent:EventEmitter<number>=new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }
  passData(id:number){
    this.deleteStudent.emit(id);
  }

}
