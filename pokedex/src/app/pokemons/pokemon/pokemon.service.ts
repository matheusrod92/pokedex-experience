import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {

	constructor(private http: HttpClient) { }

	listPokemons() {
		return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')
	}

	getPokemon(id: number) {
		return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + id)
	}
}
