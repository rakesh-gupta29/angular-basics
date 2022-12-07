import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StockItemComponent } from './stock-item.component';
import { Stock } from '../../model/stock';
import { By } from '@angular/platform-browser';

describe('StockItemComponent', () => {
  let component: StockItemComponent;
  let fixture: ComponentFixture<StockItemComponent>;
  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(StockItemComponent);
    component = fixture.componentInstance;
    component.item = new Stock('Testing Stock', 10, 'TS', 100, '10');
    fixture.detectChanges(); // trigger the lifecycle of the component
  }));

  // testbed : utilify for creating modules and components  to test
  // the components. beforeEach ensures that it is executed
  // before anything else
  // read more about async behavior of angular

  // create a testbed to configure a custom component  and provides us to use later
  // fixture : the combination of the template, the component class instance, and Angular’s
  // magic to combine the two

  it('should instantiate and render stock data', () => {
    const nameEl = fixture.debugElement.query(By.css('.name')); // running css queries
    expect(nameEl.nativeElement.textContent).toEqual('Testing Stock'); // checking for
    const priceEl = fixture.debugElement.query(By.css('.price'));
    expect(priceEl.nativeElement.textContent).toEqual('10');
    const filledBtn = fixture.debugElement.query(By.css('.filled-btn'));
    expect(filledBtn).toBeNull();
    const toggleFav = fixture.debugElement.query(By.css('.toggle-btn'));
    expect(toggleFav).toBeDefined();
  });
  it('should trigger toggle event', () => {
    // write a test for button and it should emit an event to parent
  });
});

/*


*/
