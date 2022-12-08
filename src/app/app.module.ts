//  main module for app

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  // mark this as angular module
  declarations: [AppComponent, StockItemComponent, CreateStockComponent], // which component and directives  is to be used
  imports: [BrowserModule, AppRoutingModule, FormsModule], // modules  to be loaded for the app
  providers: [],
  bootstrap: [AppComponent], // entry point module for starting the application
})
export class AppModule {}
