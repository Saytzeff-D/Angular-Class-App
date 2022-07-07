import { Component, Input, OnInit } from '@angular/core';
import { BehaviourService } from '../behaviour.service';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {

  constructor(public behaviour: BehaviourService) { }
  @Input() myObj: any;

  public firstname;
  public lastname;
  public address;
  public phone;
  public myFirstname;
  ngOnInit(): void {
  }

  ngOnChanges(){
    this.firstname = this.myObj.firstname;
    this.lastname = this.myObj.lastname;
    this.address = this.myObj.email;
    this.phone = this.myObj.mobile;
  }

  editMe(){
    let i = this.myObj.index;
    this.behaviour.arraySource[i].firstname.next(this.firstname)
  }

}
