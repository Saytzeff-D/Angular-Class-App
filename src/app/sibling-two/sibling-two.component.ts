import { Component, OnInit } from '@angular/core';
import { BehaviourService } from '../behaviour.service';

@Component({
  selector: 'app-sibling-two',
  templateUrl: './sibling-two.component.html',
  styleUrls: ['./sibling-two.component.css']
})
export class SiblingTwoComponent implements OnInit {

  constructor(public behaviour: BehaviourService) { }

  public name;
  ngOnInit(): void {
    this.behaviour.dataSource.subscribe(data=>{
      this.name = data;
    })
  }

}
