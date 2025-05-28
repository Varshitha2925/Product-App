import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product, Category } from '../../../../models/product.model';
import { ProductService } from '../../../../core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;
  filtered$!: Observable<Product[]>;
  categories:(Category|'All')[]=['All','Electronics','Wearables','Photography','Furniture','Accessories','Gaming'];
  selected:'All'|Category='All';
  constructor(private svc:ProductService,private router:Router){}
  ngOnInit(){ this.products$=this.svc.getAll(); this.apply(); }
  apply(){ this.filtered$=this.products$.pipe(map(list=>this.selected==='All'?list:list.filter(p=>p.category===this.selected))); }
  nav(id:number){ this.router.navigate(['/products',id]); }
}
