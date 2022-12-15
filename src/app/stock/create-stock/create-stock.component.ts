import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {}
  createStock() {
    // validating the form with #stockForm directive passed to the form
    // handle stock creation
    // navigate to homepage
    this.router.navigate(['view']); // entry passed has to be registered in the routes. otherwise, it won't work.
  }
}
