import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Pokemon } from '../pokemon/pokemon';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
	styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

	pokemon: Pokemon[] = []

	constructor(
		private activatedRoute: ActivatedRoute,
		private pokemonService: PokemonService
	) { }

	ngOnInit(): void {
		this.pokemon = this.activatedRoute.snapshot.data['pokemon']
		this.pokemonService.listPokemons().subscribe(response => {
			this.pokemon = response.result.map(pokemon => )
		})
	}

}
