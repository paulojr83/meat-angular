import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { RestaturantDetailComponent } from './restaturant-detail/restaturant-detail.component'
import { MenuComponent } from './restaturant-detail/menu/menu.component'
import { ReviewsComponent } from './restaturant-detail/reviews/reviews.component'
import { OrderComponent } from './order/order.component'
import { OrderSummaryComponent } from "./order-summary/order-summary.component";

export const ROUTES: Routes =[
    {path:'', component: HomeComponent, data: { title: 'Bem vindo' } },
    {path:'restaurants',component:RestaurantsComponent, data: { title: 'Restaurantes' } },
    {path:'restaurants/:id',component:RestaturantDetailComponent,
        children:[
            {path:'', redirectTo: 'menu', pathMatch: 'full',data: { title: 'Menu' } },
            {path:'menu', component: MenuComponent,data: { title: 'Menu' } },
            {path:'reviews', component: ReviewsComponent,data: { title: 'Review' } },
        ]},
    {path:'order', component:OrderComponent,data: { title: 'Pedido' } },
    {path:'order-summary', component:OrderSummaryComponent,data: { title: 'Resumo do Pedido' } },
    {path:'about', loadChildren: './about/about.module#AboutModule', data: { title: 'Sobre' } }
]