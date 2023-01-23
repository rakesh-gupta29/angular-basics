import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css'],
})
export class BlogCreateComponent implements OnInit {
  constructor() {}
  public id: string = '';
  public title: string = '';
  public coverImage: string = '';
  public content: string = '';
  public subTitle: string = '';
  public likeCount = 0;

  ngOnInit(): void {}
}
