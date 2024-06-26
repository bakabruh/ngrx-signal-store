import { Component, inject, input, signal } from '@angular/core';
import { moviesStore } from '../../movies.store';
import { Movie } from '../../models';
import { Router } from '@angular/router';
import { UpdateMovieComponent } from '../update-movie/update-movie.component';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [UpdateMovieComponent],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent {
  store = inject(moviesStore);
  buttonEdit: string = "Edit";
  toEditMovie = signal<Movie | undefined>(undefined);

  editMovie(movie: Movie): void {
    this.toEditMovie.set(movie);
  }
}
