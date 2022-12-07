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
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Stock } from '../../model/stock';
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent
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
  @Input() public item: Stock;
  @Input() public index: number;
  @Output() changeFavStatus: EventEmitter<string>;

  constructor() {
    this.changeFavStatus = new EventEmitter<string>();
  }
  toggleFav() {
    this.changeFavStatus.emit(this.item.id);
  }

  ngOnInit(): void {
    console.log('Stock  Item: Oninit method called ');
  }
  ngAfterViewInit(): void {
    console.log('Stock Item - After View Init');
  }
  ngAfterViewChecked(): void {
    console.log('Stock Item - After View Checked');
  }
  ngAfterContentInit(): void {
    console.log('Stock Item - After Content Init');
  }
  ngAfterContentChecked(): void {
    console.log('Stock Item - After Content Checked');
  }
  ngDoCheck(): void {
    console.log('Stock Item - Do Check');
  }
  ngOnDestroy(): void {
    console.log('Stock Item - On Destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Stock Item - On Changes - ', changes);
  }

  showInfo() {
    alert('this button will be used for routing. Coming Soon!');
  }
}

/*
 Description of a Component :
  Selector : how Angular identifies when the component is used in HTML
    can be like app-stock-item or .stock-item ( used as  <div  class =".stock-item">) or : '[app-stock-item]' ( used as < div app-stock-item >)
  Template : It can be inline or an array of files.
  styleUrls : using an array of  style files to be used (scoped in for this particular fiel only) or using inline style attribute ( declaring teh style inline).
      We cn tell Angular whether this style will be inlined or not as : 
      ViewEncapsulation.Emulated
        This the default, where Angular creates shimmed CSS to emulate the behavior
        that shadow DOMs and shadow roots provide.
      ViewEncapsulation.Native
        This is the ideal, where Angular will use shadow roots. This will only work on
        browsers and platforms that natively support it.
      ViewEncapsulation.None
        Uses global CSS, without any encapsulation
  There are many other properties allowed for any component in angular . Find a full list here https://angular.io/api/core/Component 
*/

/*
 <div *ngIf="stock.favorite">
  <button>Remove from favorite</button>
 </div>
    above code  is translated to the following code.
 <ng-template [ngIf]="stock.favorite">
  <div>
  <button>Remove from favorite</button>
  </div>
 </ng-template>
*/

/*
  following are the  values available within the context of *ngIf :
   first : boolean, last: boolean, index: number , even: boolean, odd: boolean.
*/

/*
  Track By : Angular uses Object- reference which might change (e.g.when fetching data from backend) without changing the actual data. therefore, trackby option is a function by which the  change is detected. If trackby does not return a different value, The component is not re-rendered.
  in above case, we can have  : 
  trackBy : "trackByCode"
  trackByCode ( index : index of item in *ngFor directive  , stock :actual Element  ) {
    return index ;
  }
*/
