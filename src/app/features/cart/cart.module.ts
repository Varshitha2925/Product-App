import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes=[{path:'',component:CartPageComponent}];

@NgModule({
  declarations:[CartPageComponent],
  imports:[CommonModule,MaterialModule,RouterModule.forChild(routes)]
})
export class CartModule{}
