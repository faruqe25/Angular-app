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
  getStudentIndex(id){
    var studentlist=[];
    if(localStorage.getItem("Students")){
      studentlist=JSON.parse(localStorage.getItem("Students"));
      return studentlist.findIndex(item => {
        return (item["Id"] === id)
     })
    }
    return false;

  }
  getStudentDetails(id){
    var studentlist=[];
    if(localStorage.getItem("Students")){
      studentlist=JSON.parse(localStorage.getItem("Students"));
      return studentlist.find(item => {
        return (item["Id"] === id)
     })
    }
    return false;
  }
  editStudent(students,id){
    var index=Number(this.getStudentIndex(id));
    var studentlist=[];

      studentlist=JSON.parse(localStorage.getItem("Students"))
      studentlist.splice(index,1,students)


    localStorage.setItem("Students",JSON.stringify(studentlist))
  }
  constructor() { }


}
