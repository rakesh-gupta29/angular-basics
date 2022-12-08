import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
})
export class CreateStockComponent {
  public stock: Stock;
  public confirmed: boolean;
  public setValue(event: Event): void {
    this.stock.name = (event.target as HTMLInputElement).value;
  }
  constructor() {
    this.stock = new Stock('Stock Name', 0, 'name', 0);
  }
  createStock() {
    alert('Creating a Stock');
  }
}
