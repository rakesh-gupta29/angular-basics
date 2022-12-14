import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  public stocks: Array<Stock>;
  constructor() {}

  ngOnInit(): void {
    this.stocks = [
      {
        symbol: 'AACG',
        name: 'ATA Creativity Global',
        mic_code: 'XNMS',
        country: 'United States',
        type: 'Depositary Receipt',
      },
      {
        symbol: 'AACI',
        name: 'Armada Acquisition Corp. I',
        mic_code: 'XNMS',
        country: 'United States',
        type: 'Common Stock',
      },
      {
        symbol: 'AACIU',
        name: 'Armada Acquisition Corp. I Unit',
        mic_code: 'XNMS',
        country: 'United States',
        type: 'Common Stock',
      },
      {
        symbol: 'AACIW',
        name: 'Armada Acquisition Corp. I',
        mic_code: 'XNMS',
        country: 'United States',
        type: 'Common Stock',
      },
      {
        symbol: 'AACOU',
        name: 'Advancit Acquisition Corp. I',
        mic_code: 'XNCM',
        country: 'United States',
        type: 'Common Stock',
      },
      {
        symbol: 'AADI',
        name: 'Aadi Bioscience, Inc.',
        mic_code: 'XNCM',
        country: 'United States',
        type: 'Common Stock',
      },
      {
        symbol: 'AAL',
        name: 'American Airlines Group Inc',
        mic_code: 'XNGS',
        country: 'United States',
        type: 'Common Stock',
      },
    ];
  }
}
