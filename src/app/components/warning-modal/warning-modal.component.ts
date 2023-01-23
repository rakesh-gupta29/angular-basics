import { Component, OnInit } from '@angular/core';
import { WarningModal } from 'src/app/services/warningModal/warning-modal';

@Component({
  selector: 'app-warning-modal',
  templateUrl: './warning-modal.component.html',
  styleUrls: ['./warning-modal.component.css'],
})
export class WarningModalComponent implements OnInit {
  constructor(private warningModal: WarningModal) {}

  ngOnInit(): void {}
  proceed() {
    console.log('procced with calling the callback');
    this.warningModal.proceed();
  }
  close() {
    console.log('procced without calling the callback');
    this.warningModal.close();
  }
}
