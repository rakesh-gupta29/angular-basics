import { Component, OnInit, Input } from '@angular/core';
interface Movie {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() public movie!: Movie;
  public year!: string;
  public baseUrl: string = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2//';
  constructor() {}

  ngOnInit(): void {
    this.year = this.movie.first_air_date.split('-')[0] || '';
  }
}
