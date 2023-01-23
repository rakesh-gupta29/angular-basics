import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css'],
})
export class GenresComponent implements OnInit {
  constructor() {}
  loading = true;
  genres: { title: string; id: string }[] = [
    { title: 'Documentry', id: '10' },
    { title: 'Documentry', id: '10' },
    { title: 'Documentry', id: '10' },
    { title: 'Documentry', id: '10' },
    { title: 'Documentry', id: '10' },
    { title: 'Documentry', id: '10' },
    { title: 'Documentry', id: '10' },
    { title: 'Documentry', id: '10' },
    { title: 'Documentry', id: '10' },
    { title: 'Documentry', id: '10' },
    { title: 'Documentry', id: '10' },
    { title: 'Documentry', id: '10' },
    { title: 'Documentry', id: '10' },
    { title: 'Documentry', id: '10' },
    { title: 'Documentry', id: '10' },
    { title: 'Documentry', id: '10' },
    { title: 'Documentry', id: '10' },
    { title: 'Documentry', id: '10' },
  ];

  ngOnInit(): void {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        this.loading = false;
        resolve(true);
      }, 100000);
    });
  }
}
