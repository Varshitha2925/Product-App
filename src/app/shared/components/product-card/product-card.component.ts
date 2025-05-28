import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() selected = new EventEmitter<number>();
  constructor(private cart: CartService){}
  select(){ this.selected.emit(this.product.id); }
  add(evt:Event){ evt.stopPropagation(); this.cart.add(this.product); }
}
