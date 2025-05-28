import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from '../../../../models/product.model';
import { ProductService } from '../../../../core/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$!: Observable<Product|undefined>;
  constructor(private route:ActivatedRoute,private svc:ProductService){}
  ngOnInit(){ this.product$=this.route.paramMap.pipe(switchMap(p=>this.svc.getById(Number(p.get('id'))))); }
}
