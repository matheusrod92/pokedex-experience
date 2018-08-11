import { PokemonDetailComponent } from './components/pokemon/pokemon-detail/pokemon-detail.component';
import { IndexComponent } from './components/index/index.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  {path: 'index', component: IndexComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full' },
  {path: 'pokemon', component: PokemonComponent},
  {path: 'pokemon/:id', component: PokemonDetailComponent},
  {path: '**', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
