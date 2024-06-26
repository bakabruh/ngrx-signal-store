import { Component, inject, output } from '@angular/core';
import { ChildEditMovieComponent } from '../child-edit-movie/child-edit-movie.component';
import { Movie } from '../../models';
import { moviesStore } from '../../movies.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-movie',
  standalone: true,
  imports: [ChildEditMovieComponent],
  templateUrl: './update-movie.component.html',
  styleUrl: './update-movie.component.css'
})
export class UpdateMovieComponent {
  private readonly store = inject(moviesStore);
  private readonly router: Router = inject(Router);
  requestToCancel = output();

  updateMovie(movie: Movie): void {
    this.store.updateOne(movie);
    this.router.navigate(['movies']);
  }

  cancelMovie(): void {
    this.requestToCancel.emit();
  }
}
