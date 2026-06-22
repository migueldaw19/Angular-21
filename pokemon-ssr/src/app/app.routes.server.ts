import { RenderMode, ServerRoute } from '@angular/ssr';

const POKEMON_LIMIT = 151;
 
async function fetchPokemonNames(limit: number): Promise<string[]> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await response.json();
  return data.results.map((pokemon: { name: string }) => pokemon.name);
}
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  {
    // Para una ruta dinamica en el que dependa una consulta API basta con hacer una pequeña consulta para obtener el id
    path: 'pokemon/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      const data = await response.json();

      return data.results.map((name: any, index: number) => ({
        id: String(name.name)
      }));
    },
  },
  {
    // Para una ruta dinamica que por ejemplo indique el numero de una pagina se hace de la siguiente manera
    path: 'pokemons/page/:page',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return Array.from({ length: POKEMON_LIMIT }, (_, i) => ({ page: (i + 1).toString() }));
    },
  }
];
