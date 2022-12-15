//  main module for app

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { FormsModule } from '@angular/forms';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { RouterModule } from '@angular/router';

// define routes
const appRoutes = [
  { path: '', component: StockListComponent }, // home route
  { path: 'view', component: StockListComponent },
  {
    path: 'create',
    component: CreateStockComponent,
  },
];
@NgModule({
  // mark this as angular module
  declarations: [
    AppComponent,
    StockItemComponent,
    StockListComponent,
    HeaderComponent,
    FooterComponent,
    CreateStockComponent,
  ], // which component and directives  is to be used
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ], // modules  to be loaded for the app
  providers: [], // registering the services . not added by default as not all services are for app level
  bootstrap: [AppComponent], // entry point module for starting the application
})
export class AppModule {}
