import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TvShowsComponent } from './screens/tv-shows/tv-shows.component';
import { HomeComponent } from './screens/home/home.component';
import { MoviesComponent } from './screens/movies/movies.component';
import { GenresComponent } from './screens/genres/genres.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TvShowsComponent,
    HomeComponent,
    MoviesComponent,
    GenresComponent,
    LoaderComponent,
    MovieCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
