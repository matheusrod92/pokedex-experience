import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PokemonComponent, PokemonListComponent],
  exports: [PokemonListComponent]
})
export class PokemonsModule { }
