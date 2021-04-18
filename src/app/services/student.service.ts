import { Injectable } from '@angular/core';
import { IStudent } from '../model/IStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getAllStudentList() :Array<IStudent> {
    return [
      {
        Name: "Md Omar Faruqe",
        Program: "BCSE",
        Id: 17103079,
        Address: "Gazipur"
      },
      {
        Name: "tasmi Tamanna Erin",
        Program: "BCSE",
        Id: 17103103,
        Address: "Dhaka"
      },
      {
        Name: "Rashedul Islam Sadar",
        Program: "BCSE",
        Id: 17103080,
        Address: "Dhaka"
      },
      {
        Name: "Touhedure Rahman",
        Program: "BCSE",
        Id: 17103081,
        Address: "Dhaka"
      },
      {
        Name: "Beguni Tie",
        Program: "EEE",
        Id: 0,
        Address: "Canada"
      }
    ]

  }
  constructor() { }


}
