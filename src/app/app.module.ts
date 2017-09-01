import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ROUTES } from './app.routes'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaturantDetailComponent } from './restaturant-detail/restaturant-detail.component';
import { MenuComponent } from './restaturant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaturant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaturant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaturant-detail/reviews/reviews.component'
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from "./shared/shared.module";
import { NotFoundComponent } from './not-found/not-found.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,    
    RestaurantsComponent,
    RestaurantComponent,
    RestaturantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,    
    OrderSummaryComponent, 
    NotFoundComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SharedModule.forRoot(),        
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})    
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, {provide:LOCALE_ID, useValue:'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }