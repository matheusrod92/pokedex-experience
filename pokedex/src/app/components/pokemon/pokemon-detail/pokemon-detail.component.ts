import { Pokemon } from './../model/pokemon.model';
import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location) { }

    ngOnInit(): void {
      this.getHero();
    }

    getHero(): void {
      const nameOrId = this.route.snapshot.paramMap.get('id');
      this.pokemonService.getPokemon(nameOrId)
        .subscribe(
          (res) => {
            this.pokemon = new Pokemon(
              res.id,
              res.name,
              res.height,
              res.sprites.front_default,
              res.types[0].type.name,
              res.stats[0].stat.name);
          }
        );
    }

}
