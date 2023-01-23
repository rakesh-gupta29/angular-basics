import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './screens/home/home.component';
import { MoviesComponent } from './screens/movies/movies.component';
import { GenresComponent } from './screens/genres/genres.component';
import { TvShowsComponent } from './screens/tv-shows/tv-shows.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'tv-shows', component: TvShowsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
