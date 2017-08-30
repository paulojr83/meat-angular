import { NgModule } from '@angular/core'

import { OrderService } from "../order/order.service"
import { RestaurantsService } from "../restaurants/restaurants.service"
import { ShoppingCartService } from "../restaturant-detail/shopping-cart/shopping-cart.service"

@NgModule({
    providers:[RestaurantsService, ShoppingCartService,OrderService]
})
export class CoreModule{}