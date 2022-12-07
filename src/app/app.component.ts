import {
  Component,
  SimpleChanges,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';
import { Stock } from './model/stock';
@Component({
  selector: 'app-root', // root  component for the app
  templateUrl: './app.component.html', // html template
  styleUrls: ['./app.component.css'], // scoped css file
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit
{
  public title = 'stock-market';
  public stocks: Array<Stock> = [];
  public stock: Stock;
  constructor() {}
  ngOnInit(): void {
    this.stock = new Stock('this is a stock', 100, 'stock', 10, '1');
    this.stocks = [
      new Stock('item one', 100, 'one', 10, '1'),
      new Stock('item two', 200, 'two', 20, '2'),
      new Stock('item three', 300, 'three', 30, '3'),
      new Stock('item four', 400, 'four', 40, '4'),
      new Stock('item five', 500, 'five', 50, '5'),
    ];

    console.log('App component - On init method called');
  }
  changeFavStatus(target: string) {
    this.stocks.forEach((elem) => {
      if (elem.id === target) {
        elem.isFav = !elem.isFav;
      }
    });
  }

  ngAfterViewInit(): void {
    console.log('App Component - After View Init');
  }
  ngAfterViewChecked(): void {
    console.log('App Component - After View Checked');
  }
  ngAfterContentInit(): void {
    console.log('App Component - After Content Init');
  }
  ngAfterContentChecked(): void {
    console.log('App Component - After Content Checked');
  }
  ngDoCheck(): void {
    console.log('App Component - Do Check');
  }
  ngOnDestroy(): void {
    console.log('App Component - On Destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('App Component - On Changes - ', changes);
  }
  testMethod() {
    console.log('test method for app componet was triggered');
  }
}
