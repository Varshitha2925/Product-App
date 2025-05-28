import { Injectable } from '@angular/core';
import { Observable, of, delay, map } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly DATA: Product[] = [
    {id:2,name:'Fitness Tracker',price:149.99,description:'Heart-rate monitoring',category:'Wearables',rating:4.6,imageUrl:'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800',inStock:true},
    {id:3,name:'Camera Lens',price:899.99,description:'Pro‑grade lens',category:'Photography',rating:4.9,imageUrl:'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=800',inStock:false}
  ];
  getAll(): Observable<Product[]> { return of(this.DATA).pipe(delay(300)); }
  getById(id:number):Observable<Product|undefined>{return this.getAll().pipe(map(l=>l.find(p=>p.id===id))); }
}
