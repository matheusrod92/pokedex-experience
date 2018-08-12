import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
	@Input() id = ''
	@Input() name = ''
	@Input() height = ''
	@Input() sprite = ''
	@Input() types = ''
}



