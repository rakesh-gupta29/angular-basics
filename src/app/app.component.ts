import { Component, OnInit } from '@angular/core';
import { WarningModal } from './services/warningModal/warning-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public warningModal: WarningModal) {}

  ngOnInit() {}

  title = 'dashboard';
}
