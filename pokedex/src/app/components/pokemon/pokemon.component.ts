import { Pokemon } from './model/pokemon.model';
import { PokemonService } from './pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemons()
      .subscribe((response: any) => {
        // if (!response) {
        //   console.error(response);
        // }

        console.log(response);

        const legendary = response.results;

        legendary.forEach(el => {
          this.pokemons.push(el);
        });

      });
  }

}
