import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-class',
  templateUrl: './pipe-class.component.html',
  styleUrls: ['./pipe-class.component.css']
})
export class PipeClassComponent implements OnInit {

  constructor() { }

  public money = 55687;
  public name = 'busta';
  public dob = new Date();
  public myname;
  public middlename;
  public lastname;
  public level;
  public Email;
  public arr = [];
  public filterText;
  ngOnInit(): void {
    let txt = ''
        for (let i = 0; i < this.name.length; i++) {
      let c = this.name[0]
      
       txt = c.toUpperCase()    
    }
    console.log(txt)
  }

  saveItem(){
    let firstInitial;
    let secondInitial;
    for (let i = 0; i < this.middlename.length; i++) {
      firstInitial = this.middlename[0];
      
    }
    for (let i = 0; i < this.lastname.length; i++) {
      secondInitial = this.lastname[0];
      
    }
    let item = {
      firstname: this.myname,
      middlename: this.middlename,
      lastname: this.lastname,
      initial: this.myname + ' ' + firstInitial + '.' + ' ' + secondInitial,
      level: this.level,
      email: this.Email
    }
    this.arr.push(item)
    this.myname = ''
    this.middlename = ''
     this.lastname = ''
     this.level = ''
     this.Email = ''
  }
  delItem(i){
    this.arr.splice(i, 1)
  }
}
