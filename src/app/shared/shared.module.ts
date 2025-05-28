import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [ProductCardComponent, MaterialModule]
})
export class SharedModule {}
