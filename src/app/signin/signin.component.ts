import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { BehaviourService } from '../behaviour.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public behaviour: BehaviourService) { }

  public anything;
  public objToChild;
  public firstName;
  public lastName;
  public middleName;
  public email;
  public phone;
  public phoneNum;
  public emailAddress;
  public newPassword;
  public confirmPassword;
  // public firstName = new FormControl();
  // public lastName = new FormControl();
  // public middleName = new FormControl();
  // public email = new FormControl();
  // public phone = new FormControl();
  public userForm = new FormGroup({
     firstName: new FormControl(''),
   lastName: new FormControl(''),
   middleName: new FormControl(''),
   email: new FormControl(''),
   phone: new FormControl('')
  })
  ngOnInit(): void {
    this.behaviour.arraySource.subscribe(array=> {
      this.anything = array;
    })
  }

  // submitForm(){
  //   let user = {
  //     firstname: this.firstName,
  //     lastname: this.lastName,
  //     middlename: this.middleName,
  //     email: this.email,
  //     phone: this.phone,
  //   }
  //   console.log(user)
  // }
  submitUs(){
    let data = {
      Firstname: this.firstName,
      Lastname: this.lastName,
      MobileNumber: this.phoneNum,
      EmailAddress: this.emailAddress
    }
    this.anything.push(data)
    this.firstName = '';
    this.lastName = '';
    this.phoneNum = '';
    this.emailAddress = ''
  }
  myDetails(i){
    this.objToChild ={
      index: i,
      firstname: this.anything[i].Firstname,
      lastname: this.anything[i].Lastname,
      mobile: this.anything[i].MobileNumber,
      email: this.anything[i].EmailAddress
    }
  }
  // submitReactiveForm(){
  //   let user = this.userForm.value
  //   // let user = {
  //   //   firstname: this.firstName.value,
  //   //   lastname: this.lastName.value,
  //   //   middlename: this.middleName.value,
  //   //   email: this.email.value,
  //   //   phone: this.phone.value
  //   // }
  //   console.log(user)
  // }

}
