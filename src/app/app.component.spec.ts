import { AppComponent } from './app.component';
import { Stock } from './model/stock';

import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  it('App : Instantiasation logic for component', () => {
    const appComp = new AppComponent();
    expect(appComp.stock).toBeUndefined();
    appComp.ngOnInit();
    expect(appComp.stock).toEqual(
      new Stock('this is a stock', 100, 'stock', 10, '1')
    );
  });
  it('App : changeFavStatus method', () => {
    const appComp = new AppComponent();
    appComp.ngOnInit();
    expect(appComp.stock.isFav).toBeFalsy();
    // toggle function is checked
    appComp.changeFavStatus('1');
    expect(appComp.stocks[0].isFav).toBeTrue();
    appComp.changeFavStatus('1');
    expect(appComp.stocks[0].isFav).toBeFalse();
    appComp.stocks.forEach((elem) => {
      expect(elem.isFav).toBeFalse();
    });
  });
});
