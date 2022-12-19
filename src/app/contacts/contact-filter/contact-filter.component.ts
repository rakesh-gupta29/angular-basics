import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.css'],
})
export class ContactFilterComponent implements OnInit {
  public query: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {}

  handleQueryUpdate(): void {
    // implement debounce here
    console.log(this.query);
  }
  handleQuerySubmission() {
    // implement debounce here
    console.log(this.query);
  }
}
/*
 task for this module is : 
  passing the query update to url on input element valu change
  implement a debounce function  to update the url
  fetching data from backend 
  handle form submit  for query
*/
