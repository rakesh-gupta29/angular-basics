import { Component, OnInit } from '@angular/core';
import { Careers } from 'src/app/models/careers/careers';
import { WarningModal } from 'src/app/services/warningModal/warning-modal';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
})
export class CareersComponent implements OnInit {
  public careers!: Array<Careers>;
  constructor(private warningModal: WarningModal) {}

  ngOnInit(): void {
    this.careers = [
      new Careers(
        '100',
        'dummy name',
        'dummy email',
        'madhya pradesh',
        '1234567890',
        'dummy subject',
        'this is dummy cover letter',
        'dummy linkedin url',
        'dummy portfolio url',
        'dummy resume url'
      ),
      new Careers(
        '100',
        'dummy name',
        'dummy email',
        'madhya pradesh',
        '1234567890',
        'dummy subject',
        'this is dummy cover letter',
        'dummy linkedin url',
        'dummy portfolio url',
        'dummy resume url'
      ),
      new Careers(
        '100',
        'dummy name',
        'dummy email',
        'madhya pradesh',
        '1234567890',
        'dummy subject',
        'this is dummy cover letter',
        'dummy linkedin url',
        'dummy portfolio url',
        'dummy resume url'
      ),
      new Careers(
        '100',
        'dummy name',
        'dummy email',
        'madhya pradesh',
        '1234567890',
        'dummy subject',
        'this is dummy cover letter',
        'dummy linkedin url',
        'dummy portfolio url',
        'dummy resume url'
      ),
      new Careers(
        '100',
        'dummy name',
        'dummy email',
        'madhya pradesh',
        '1234567890',
        'dummy subject',
        'this is dummy cover letter',
        'dummy linkedin url',
        'dummy portfolio url',
        'dummy resume url'
      ),
      new Careers(
        '100',
        'dummy name',
        'dummy email',
        'madhya pradesh',
        '1234567890',
        'dummy subject',
        'this is dummy cover letter',
        'dummy linkedin url',
        'dummy portfolio url',
        'dummy resume url'
      ),
      new Careers(
        '100',
        'dummy name',
        'dummy email',
        'madhya pradesh',
        '1234567890',
        'dummy subject',
        'this is dummy cover letter',
        'dummy linkedin url',
        'dummy portfolio url',
        'dummy resume url'
      ),
      new Careers(
        '100',
        'dummy name',
        'dummy email',
        'madhya pradesh',
        '1234567890',
        'dummy subject',
        'this is dummy cover letter',
        'dummy linkedin url',
        'dummy portfolio url',
        'dummy resume url'
      ),
    ];
  }
  deleteCallback(id: string): void {
    console.log('deleting the item with id ', id);
  }
  handleDelete(id: string) {
    this.warningModal.activate(() => this.deleteCallback(id));
  }
}
