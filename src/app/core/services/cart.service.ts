import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Product } from '../../models/product.model';

export interface CartItem { product: Product; qty: number; }

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _items = new BehaviorSubject<CartItem[]>([]);
  readonly items$  = this._items.asObservable();
  readonly count$  = this.items$.pipe(map(items => items.reduce((a,i)=>a+i.qty,0)));

  add(product: Product, qty = 1) {
    const items = [...this._items.value];
    const idx = items.findIndex(i => i.product.id === product.id);
    if (idx > -1) items[idx].qty += qty;
    else items.push({ product, qty });
    this._items.next(items);
  }
  remove(id: number){ this._items.next(this._items.value.filter(i=>i.product.id!==id)); }
  clear(){ this._items.next([]); }
}
