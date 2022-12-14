import { Component } from '@angular/core';
@Component({
  selector: 'app-root', // root  component for the app
  templateUrl: './app.component.html', // html template
  styleUrls: ['./app.component.css'], // scoped css file
})
export class AppComponent {
  public title = 'stock-market';
  public options: string = 'view';
  changeView(target: string) {
    this.options = target;
  }
  constructor() {}
}
