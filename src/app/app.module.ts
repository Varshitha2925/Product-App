import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './core/components/header/header.component';

@NgModule({
  declarations:[AppComponent,HeaderComponent],
  imports:[BrowserModule,BrowserAnimationsModule,AppRoutingModule,SharedModule],
  bootstrap:[AppComponent]
})
export class AppModule{}
