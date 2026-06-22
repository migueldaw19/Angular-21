import { Component, effect, inject, signal } from '@angular/core';
import { PokemonList } from '../../pokemons/components/pokemon-list/pokemon-list';
import { PokemonListSkeleton } from './ui/pokemon-list-skeleton/pokemon-list-skeleton';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PokemonService } from '../../pokemons/services/pokemon.service';
import { SimplePokemon } from '../../pokemons/iterfaces';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-pokemons-page',
  imports: [PokemonList,PokemonListSkeleton,RouterLink],
  templateUrl: './pokemons-page.html',
  styleUrl: './pokemons-page.css',
})
export class PokemonsPage {
  // public currentName = signal('Fernando');

  // injectamos el servicio
  private pokemonsService = inject(PokemonService);
  public pokemons = signal<SimplePokemon[]>([]);

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title);

  // Para tosignal hay que apuntar a @angular/core/rxjs-interop
  public currentPage = toSignal<number>(
    /*
    Si viniera de un Query Parametre se veria así
    this.route.queryParamMap.pipe(
      map((params) => params['page'] ?? '1'),
      // isNaN devolvera true si page es un numero
      map((page) => (isNaN(+page) ? 1 : +page)),
      map((page) => Math.max(1, page))
    )
      */    
     // Si fuera dinamico se vería así
      this.route.params.pipe(
      // Con ?? indicamos que si esa condición no se cumple se hace lo siguiente
      map((params) => params['page'] ?? '1'),
      map((page) => (isNaN(+page) ? 1 : +page)),
      map((page) => Math.max(1, page))
    )
  );

  // Se pone en true para que muestre el skeleton como pantalla de carga
  // public isLoading = signal(true);

  // ApplicationRef nos permite sabe el estado de nuestra aplicacion
  // private appRef = inject(ApplicationRef);

  // Aqui se hace una suscricion en el que vemos si la aplicacion es estable o no 
  // private $appState = this.appRef.isStable.subscribe((isStable) => {
  //   console.log({ isStable });
  // });
  // Para evitar la fuga de memoria es conveniente ngOnDestroy para eliminar la suscripcion

  /*

    NOTA

    Una aplicación se considera estable cuando su zona inyectada por dependencias no tiene tareas micro o macro actuales o programadas.

  */

  /*
  Si viniera de un Query Parametre se veria así
  ngOnInit(): void {
    // this.route.queryParamMap.subscribe(console.log);
    console.log(this.currentPage());

    this.loadPokemons();
    // title
    // Meta-tags
    // Stable

    // Una vez pasado x tiempo is loading pasa a falso para que desaparezca la pantalla de carga
    // setTimeout(() => {
    //   this.isLoading.set(false);
    // }, 5000);
  }
  */

  // Dado que ahora es dinamico no depende de ngOninit sino que se utiliza esta función
  public loadOnPageChanged = effect(
    () => {
      this.loadPokemons(this.currentPage());
    }
    // Ya no es necesario, escribir es ahora siempre permitido
    // {
    //   allowSignalWrites: true,
    // }
  );

  /*
  Si viniera de un Query Parametre se veria así
  public loadPokemons(page = 0) {
    const pageToLoad = this.currentPage()! + page;

    console.log({ pageToLoad, currentPage: this.currentPage() });

    Mandamos al servicio el numero de la página
    this.pokemonsService
      .loadPage(pageToLoad)
      .pipe(
        Tap es para realizar un efecto secundario en el observable
        tap(() =>
          this.router.navigate([], { queryParams: { page: pageToLoad } })
        ),
        tap(() => this.title.setTitle(`Pokémons SSR - Page ${pageToLoad}`))
      )
      .subscribe((pokemons) => {
        Para que funcione nos tenemos que suscribir para que obtegamos el listado
        this.pokemons.set(pokemons);
      });
  }
      */
  // Si fuera dinamico se vería así

  public loadPokemons(page = 0) {
    this.pokemonsService
      .loadPage(page)
      .pipe(tap(() => this.title.setTitle(`Pokémons SSR - Page ${page}`)))
      .subscribe((pokemons) => {
        this.pokemons.set(pokemons);
      });
  }

  // ngOnDestroy(): void {
  //   this.$appState.unsubscribe();
  // }
}
