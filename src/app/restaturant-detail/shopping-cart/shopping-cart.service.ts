import { CartItem } from "../../restaturant-detail/shopping-cart/cart-item.model";
import { MenuItem } from "../../restaturant-detail/menu-item/menu-item.model";
import { Injectable } from '@angular/core'
import { NotificationService } from "../../shared/messages/notification.service";

@Injectable()
export class ShoppingCartService {
    
    constructor(private notificationService: NotificationService){}

    items:CartItem[] = []
    clear(){
        this.items=[]
    }

    addItem(item:MenuItem){
        
        let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)
        
        if(foundItem){
           this.increaseQty(foundItem)
        }else{
           this.items.push(new CartItem(item))
        }
        this.notificationService.notify(`Você adicionou o item ${item.name}`);
    }

    removeItem(item:CartItem){    
        let indx = this.items.indexOf(item)
        if(item.quantity > 1){
            item.quantity = item.quantity - 1
            this.items[indx] = item            
        }else{
            this.items.splice(indx, 1)
        }
    }

    total():number{        
        return this.items
        .map(item=> item.value())
        .reduce((prev, value)=> prev + value, 0)
    }

    increaseQty(item:CartItem){
        item.quantity = item.quantity + 1
    }

    decreaseQty(item:CartItem){
        this.removeItem(item)
    }

    remove(item:CartItem){
        let indx = this.items.indexOf(item)
        let itemName = item.menuItem.name;
        this.items.splice(indx, 1)
        this.notificationService.notify(`Você removeu o item ${itemName}`);
    }
    
}