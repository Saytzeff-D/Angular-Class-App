import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  public anything;
  public itemFromChild;
  public objFromChild = [];
  public objGoingToChild;
  ngOnInit(): void {
  }

  addItem(item: any){
    this.itemFromChild = item
  }
  myObj(obj: any){
    this.objFromChild.push(obj)
  }
  delItem(i){
    this.objFromChild.splice(i, 1)
  }
  passItem(i){
    let passingGoods = this.objFromChild[i].goods
    let passingPrice = this.objFromChild[i].price
    this.objGoingToChild = {goods: passingGoods, price: passingPrice}
  }
}
