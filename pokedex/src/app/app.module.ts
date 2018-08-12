import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PokemonsModule } from './pokemons/pokemons.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		PokemonsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
