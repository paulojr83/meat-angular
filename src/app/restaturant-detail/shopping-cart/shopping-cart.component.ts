import { Component, OnInit } from '@angular/core'
import { ShoppingCartService } from  './shopping-cart.service'
import { MenuItem } from "../../restaturant-detail/menu-item/menu-item.model";
import { CartItem } from "../../restaturant-detail/shopping-cart/cart-item.model";

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor( private shoppingCartService: ShoppingCartService ) { }

  ngOnInit() {
  }
  
  items():CartItem[]{
    return this.shoppingCartService.items
  }

  total(): number{
    return this.shoppingCartService.total()
  }

  clear(){
    this.shoppingCartService.clear()
  }

  removeItem(item:CartItem){    
    
    this.shoppingCartService.removeItem(item)
  }

  addItem(item:MenuItem){    
    this.shoppingCartService.addItem(item)
  }
}
