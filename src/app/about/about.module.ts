import { NgModule } from '@angular/core'
import { AboutComponent } from './about.component'
import { Routes, RouterModule} from '@angular/router'


const ROUTERS: Routes= [
    {path:'', component:AboutComponent}
]

@NgModule({
    declarations:[AboutComponent],
    imports:[RouterModule, RouterModule.forChild(ROUTERS)]
})
export class AboutModule{

}