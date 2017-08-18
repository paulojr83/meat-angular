import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantsService }  from './restaurants/restaurants.service';
import { RestaturantDetailComponent } from './restaturant-detail/restaturant-detail.component';
import { MenuComponent } from './restaturant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaturant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaturant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaturant-detail/reviews/reviews.component'
import { ShoppingCartService } from "./restaturant-detail/shopping-cart/shopping-cart.service";
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaturantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)    
  ],
  providers: [RestaurantsService, ShoppingCartService, {provide:LOCALE_ID, useValue:'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }