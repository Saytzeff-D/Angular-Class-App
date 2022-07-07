import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public item;
  public goods;
  public price;
  constructor() { }

  @Input() schoolName;
  @Output() addItemEvent = new EventEmitter<String>()
  @Output() addGoodsEvent = new EventEmitter<Object>()
  @Input() passedObj;
  ngOnInit(): void {
    console.log('component init')
  }
  
  ngOnChanges(){
    console.log('change')
    this.goods = this.passedObj.goods
    this.price = this.passedObj.price
  }

  emitItem(){
    console.log(this.item)
    this.addItemEvent.emit(this.item)
  }
  saveThem(){
    let itemObj = {goods: this.goods, price: this.price}
    this.addGoodsEvent.emit(itemObj)
    this.goods = ''
    this.price = ''
  }
}
