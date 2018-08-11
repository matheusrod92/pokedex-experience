import { Pokemon } from './model/pokemon.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]>  {
    return this.http.get<Pokemon[]>(this.url + '?limit=9&offset=143')
    .pipe(
      catchError(this.handleError('pokemons', []))
    );
  }

  getPokemon(nameOrId: string): Observable<any>  {
    return this.http.get<Pokemon[]>(this.url + nameOrId)
    .pipe(
      catchError(this.handleError('pokemons', []))
    );
  }

      /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    private log(message: string) {
      console.log(message);
    }
}
