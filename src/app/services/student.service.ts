import { Injectable } from '@angular/core';
import { IStudent } from '../model/IStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getAllStudentList() :Array<IStudent> {
    return JSON.parse(localStorage.getItem("Students"))
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
  getStudent(id){
    var studentlist=[];
    if(localStorage.getItem("Students")){
      studentlist=JSON.parse(localStorage.getItem("Students"));
      return studentlist.findIndex(item => {
        return (item["Id"] === id)
     })



    }
    return false;

  }
  constructor() { }


}
