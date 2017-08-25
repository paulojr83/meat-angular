import { Component, OnInit, Input, Output } from '@angular/core';
import { CartItem } from "../../restaturant-detail/shopping-cart/cart-item.model";

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {

  @Input() delivery: number
  @Input() itemsValue:number

  constructor() { }

  ngOnInit() {
  }

  total():number{       
    return this.delivery + this.itemsValue
  }
}
