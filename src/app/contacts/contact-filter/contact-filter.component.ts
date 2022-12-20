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
  private timer!: ReturnType<typeof setTimeout>;
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.query = params['q'];
    });
  }

  handleQueryUpdate(): void {
    let cb = this.debounce(() => this.updateUrlQuery(), 500);
    cb();
  }
  handleQuerySubmission() {
    this.updateUrlQuery();
  }
  updateUrlQuery() {
    this.router.navigate([], {
      relativeTo: this.activeRoute,
      queryParams: { q: this.query },
      queryParamsHandling: 'merge',
    });
  }
  debounce<T extends Function>(cb: T, delay: number) {
    return (...args: any[]) => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        cb.apply(this, args);
      }, delay);
    };
  }
}
/*
 task for this module is : 
  fetching data from backend 
  handle form submit  for query
  fetching route parameters  the reactive way 
*/
