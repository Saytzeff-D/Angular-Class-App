import { Component, OnInit } from '@angular/core';
import { BehaviourService } from '../behaviour.service';

@Component({
  selector: 'app-sibling-one',
  templateUrl: './sibling-one.component.html',
  styleUrls: ['./sibling-one.component.css']
})
export class SiblingOneComponent implements OnInit {

  constructor(public behaviour: BehaviourService) { }

  public name;
  ngOnInit(): void {
    this.behaviour.dataSource.subscribe(data=> {
      this.name = data;
    })
  }

  updateData(){
    this.behaviour.dataSource.next(this.name);
  }

}
