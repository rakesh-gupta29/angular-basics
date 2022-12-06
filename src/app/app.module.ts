//  main module for app

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';

@NgModule({
  // mark this as angular module
  declarations: [AppComponent, StockItemComponent], // which component and directives  is to be used
  imports: [BrowserModule, AppRoutingModule], // modules  to be loaded for the app
  providers: [],
  bootstrap: [AppComponent], // entry point module for starting the application
})
export class AppModule {}
