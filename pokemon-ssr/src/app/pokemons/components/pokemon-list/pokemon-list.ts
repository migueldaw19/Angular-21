import { Component, input } from '@angular/core';
import { SimplePokemon } from '../../iterfaces';
import { RouterModule } from '@angular/router';
import { PokemonCard } from '../pokemon-card/pokemon-card';

@Component({
  selector: 'app-pokemon-list',
  imports: [RouterModule,PokemonCard],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList {
  public pokemons = input.required<SimplePokemon[]>();
}
