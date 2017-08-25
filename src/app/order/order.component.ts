import { Component, OnInit } from '@angular/core';
import { RadioOption } from "../shared/radio/radio-option.model";
import { OrderService } from "../order/order.service";
import { CartItem } from "../restaturant-detail/shopping-cart/cart-item.model";
import { Order, OrderItem } from "../order/order.model";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'


@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})

export class OrderComponent implements OnInit {

  constructor(
    private orderService:OrderService, 
    private router: Router,
    private formBuilder:FormBuilder) { }

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPatter = /^[0-9]*$/
  orderForm: FormGroup

  delivery:number =8  

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value:'MON'},
    {label: 'Cartão de Débito', value:'DEB'},
    {label: 'Cartão Refeição', value:'REF'}
  ]

  ngOnInit() {
      this.orderForm = this.formBuilder.group({
        name: this.formBuilder.control('', [ Validators.required, Validators.minLength(3) ]),
        email: this.formBuilder.control('', [ Validators.required, Validators.pattern(this.emailPattern) ]),
        emailConfirmation: this.formBuilder.control('', [ Validators.required, Validators.pattern(this.emailPattern) ]),
        address: this.formBuilder.control('', [ Validators.required, Validators.minLength(5)]),
        number: this.formBuilder.control('', [ Validators.required, Validators.pattern(this.numberPatter) ]),
        optionalAddress: this.formBuilder.control(''),
        paymaentOption: this.formBuilder.control('', [ Validators.required ])
      }, {validator: OrderComponent.equalsTo})
  }

  static equalsTo(group: AbstractControl):{ [key:string]: boolean }{
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if(!email || !emailConfirmation){
      return undefined
    }

    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true}
    }

    return undefined
  }
  
  itemsValue():number{
    return this.orderService.itemsValue()
  }

  cartItems():CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item:CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item:CartItem){
      this.orderService.decreaseQty(item)
  }

  remove(item:CartItem){
      this.orderService.remove(item)
  }

  testEvntVaiSeFuder(item:CartItem){
    this.orderService.testEvntVaiSeFuder(item)
  }
  
  checkOrder(order:Order){
    order.orderItems = this.cartItems()
         .map((item:CartItem)=>new OrderItem(item.quantity, item.menuItem.id))
        this.orderService.checkOrder(order).subscribe((order: string) =>{
        this.router.navigate(['/order-summary'])
        this.orderService.clear()
    })

  }
}
