import { Routes } from "@angular/router";
import { CreateMovieComponent } from "./components/create-movie/create-movie.component";
import { ListMoviesComponent } from "./components/list-movies/list-movies.component";

export const moviesRoutes: Routes = [
    {
        path: 'create',
        component: CreateMovieComponent
    },
    {
        path: '',
        component: ListMoviesComponent
    }
];