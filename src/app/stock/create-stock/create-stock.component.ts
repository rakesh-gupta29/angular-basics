import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock';
@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
})
export class CreateStockComponent {
  public stock: Stock = new Stock(
    'enter symbol',
    'enter mic_code',
    'enter name',
    'enter country',
    'enter type'
  );
  public confirmed: boolean;
  public status: boolean;
  constructor() {}
  createStock() {
    // validating the form with #stockForm directive passed to the form
  }
}
