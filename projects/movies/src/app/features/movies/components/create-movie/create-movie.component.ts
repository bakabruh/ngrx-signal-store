import { Component, inject } from '@angular/core';
import { ChildEditMovieComponent } from '../child-edit-movie/child-edit-movie.component';
import { Movie } from '../../models';
import { moviesStore } from '../../movies.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  standalone: true,
  imports: [ChildEditMovieComponent],
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css'
})
export class CreateMovieComponent {
  store = inject(moviesStore);
  private readonly router: Router = inject(Router);

  saveMovie(movie: Movie): void {
    this.store.addOne(movie);
    this.redirectToList();
  }

  cancelAndRedirect(): void {
    this.redirectToList();
  }

  private redirectToList(): void {
    this.router.navigate(['/movies']);
  }
}
