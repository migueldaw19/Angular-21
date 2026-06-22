import { Component, computed, input } from '@angular/core';
import { SimplePokemon } from '../../iterfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  imports: [RouterModule],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css',
})
export class PokemonCard {
  public pokemon = input.required<SimplePokemon>();


  /*

  Las Computed Signals son señales cuyos valores dependen de otras señales. Se actualizan automáticamente cuando cambian las señales de las que dependen. Esto se realiza mediante la función computed.

  */
  public readonly pokemonImage = computed(
    () =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        this.pokemon().id
      }.png`
  );

  // Los effects son funciones que se ejecutan automáticamente cuando cambian los valores de las señales de las que dependen. Esto es útil para manejar efectos secundarios, como la sincronización de datos o la actualización del DOM.
  // logEffect = effect(() => {
  //   console.log('PokemonCard: ', this.pokemon());
  // });
}
