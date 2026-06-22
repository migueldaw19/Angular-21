import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon, SimplePokemon } from '../iterfaces';
import { PokeAPIResponse } from '../iterfaces/pokemon-api';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient);

  public loadPage(page: number): Observable<SimplePokemon[]> {
    // 1 = 0

    if (page !== 0) {
      --page;
    }

    // Si nos mandan un valor negativo esto nos permitira siempre tener un valor correcto
    page = Math.max(0, page);

    // En la url hacemos un calculo al offset para que traiga la información a partir del 20 multiplicado por la pagina en la que estemos
    // PokeAPIResponse sera la interfaz que nos permitira recibir la informacion tal como la queremos
    return this.http
      .get<PokeAPIResponse>(
        `https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`
      )
      .pipe(
        map((resp) => {
          // Para que cumpla con la estructura de simplePokemon vamos a mapear cada resultado y montarlo para que se cumpla
          const simplePokemons: SimplePokemon[] = resp.results.map(
            (pokemon) => ({
              id: pokemon.url.split('/').at(-2) ?? '',
              name: pokemon.name,
            })
          );

          return simplePokemons;
        })

        // tap(console.log)
      );
  }

  public loadPokemon(id: string) {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
