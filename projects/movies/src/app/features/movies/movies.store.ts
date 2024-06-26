import { computed } from "@angular/core";
import { Movie, Movies } from "./models";
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

export interface MoviesState {
    items: Movies,
    loading: boolean,
}

export const initialMoviesState: MoviesState = {
    items: [],
    loading: false,
}

export const moviesStore = signalStore(
    {providedIn: 'root'},
    withState(initialMoviesState),
    withMethods(store => ({

        addOne(item: Movie): void {
            const nextId = store.items().length + 1;
            item.id = nextId;

            patchState(store, {loading: true});
            patchState(store, {items: [...store.items(), item]});
            patchState(store, {loading: false});
        },

        updateOne(item: Movie): void {
            patchState(store, {loading: true});
            const findMovie = store.items().find((item) => item.id === item.id);
            if(findMovie) {
                findMovie.title = item.title;
                findMovie.description = item.description;
                patchState(store, {items: [...store.items(), item]});
            }
            patchState(store, {loading: false});
        },

        removeOne(item: Movie): void {

        }

    })),

    withComputed(store => ({
        empty: computed(() => store.items().length === 0),
    }))
);