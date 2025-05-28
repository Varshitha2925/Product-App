import { Component } from '@angular/core';
import { CartService, CartItem } from '../../../core/services/cart.service';

@Component({
  selector:'app-cart-page',
  templateUrl:'./cart-page.component.html',
  styleUrls:['./cart-page.component.scss']
})
export class CartPageComponent{
  items$=this.cart.items$;
  constructor(private cart:CartService){}
  remove(id:number){this.cart.remove(id);}
  clear(){this.cart.clear();}
  track(_,i:CartItem){return i.product.id;}
  total(items:CartItem[]){return items.reduce((t,i)=>t+i.product.price*i.qty,0);}
}
