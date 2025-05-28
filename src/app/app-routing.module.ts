import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'cart', loadChildren: ()=>import('./features/cart/cart.module').then(m=>m.CartModule)},
  { path:'products', loadChildren: ()=>import('./features/products/products.module').then(m=>m.ProductsModule)},
  { path:'', redirectTo:'products', pathMatch:'full'},
  { path:'**', redirectTo:'products'}
];

@NgModule({imports:[RouterModule.forRoot(routes)],exports:[RouterModule]})
export class AppRoutingModule{}
