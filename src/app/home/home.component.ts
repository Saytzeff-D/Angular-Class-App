import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, public homeService: HomeService) { }

  public todo= "";
  public todoList = []
  public name = '';
  public phone = '';
  public email = '';
  public studArr = []
  public reply = ' '
  public user = []
  ngOnInit(): void {
    let student = this.homeService.getIt()
    this.homeService.getIt().subscribe(todos => {
      console.log(todos)
      this.studArr = todos
    })
    // if (student) {
    //   this.studArr = student
    // }
    // else{
    //   this.studArr = []
    // }
    let list = JSON.parse(localStorage.getItem('myData'))
    if(list){
      this.todoList = list
    }
    else{
      this.todoList = []
    }
  }

  addStud(){
    let studObj = {name: this.name, contact: this.phone, email: this.email}
    this.homeService.setData(studObj).subscribe(data=>{
      console.log(data)
    })
    this.studArr.push(studObj)
    // localStorage.setItem('allStudent', JSON.stringify(this.studArr))
    this.name = this.phone = this.email = ''
  }
  logIn(){
    // let stud = this.homeService.getIt()
    for (let i = 0; i < this.studArr.length; i++) {
      if (this.todo == this.studArr[i].email) {
        this.user.push(this.studArr[i].name)
        localStorage.setItem('currentUser', JSON.stringify(this.user))
        this.router.navigate([`/home/info/${this.studArr[i].name}`])
      }
      else if(this.todo == ''){this.reply = 'Please fill out the field'}
      else{
        this.reply = 'Invalid Email'}
    }
  }
  delMe(i){
    this.todoList.splice(i, 1)
    localStorage.setItem('myData', JSON.stringify(this.todoList))
  }
  viewTodo(id){
    // alert()
    console.log(id)
    this.router.navigate([`/home/info/${id}`])
  }

}
