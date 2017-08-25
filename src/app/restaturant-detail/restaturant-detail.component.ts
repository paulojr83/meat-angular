import { Component, OnInit } from '@angular/core'
import { RestaurantsService } from '../restaurants/restaurants.service'
import { Restaurant } from '../restaurants/restaurant/restaurant.model'

import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'mt-restaturant-detail',
  templateUrl: './restaturant-detail.component.html'
})
export class RestaturantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantsService: RestaurantsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {   
    let uId = this.activatedRoute.snapshot.params['id']    
    this.restaurantsService.restaurantById(uId)
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
