import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCard } from './pokemon-card';
import { SimplePokemon } from '../../iterfaces';
import { provideRouter, RouterLink } from '@angular/router';
import { By } from '@angular/platform-browser';

const mockPokemon: SimplePokemon = {
  id: '1',
  name: 'bulbasaur',
};

describe('PokemonCard', () => {
  let component: PokemonCard;
  let fixture: ComponentFixture<PokemonCard>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonCard],
      providers: [provideRouter([])],
    });

    fixture = TestBed.createComponent(PokemonCard);
    component = fixture.componentInstance;

    // Valores inputs
    // Dado que para que se puedan hacer las pruebas debe de haber al menos 1 valor por defecto. Es por ello que se crea un mock simulando un valor
    fixture.componentRef.setInput('pokemon', { ...mockPokemon });

    // Como lo hemos creado a mano hay que indicar que detecte los cambios
    fixture.detectChanges(); // Importante
  });

  it('should create', () => {
    // console.log(fixture.nativeElement.innerHTML);
    expect(component).toBeTruthy();
  });

  it('should have the SimplePokemon signal input', () => {
    // Para una comprobacion profunda se usa toStrictEqual
    expect(component.pokemon()).toStrictEqual(mockPokemon);
  });

  it('should compute the correct pokemon image URL', () => {
    const expectedUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${mockPokemon.id}.png`;
    expect(component.pokemonImage()).toBe(expectedUrl);
  });

  it('should render pokemon name and image correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const nameElement = compiled.querySelector('h2');
    const imgElement = compiled.querySelector('img');

    expect(nameElement?.textContent.trim()).toBe(mockPokemon.name);

    expect(imgElement?.src).toBe(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${mockPokemon.id}.png`
    );
    expect(imgElement?.alt).toBe(mockPokemon.name);
  });

  it('should have the correct routeLink configuration', () => {
    // Esto nos permite buscar la directiva
    const debugElement = fixture.debugElement.query(By.directive(RouterLink));
    // Esto nos permite obtener la instancia de la directiva
    const routerLinkInstance = debugElement.injector.get(RouterLink);

    const expectedUrl = `/pokemon/${mockPokemon.name}`;

    expect(routerLinkInstance.urlTree?.toString()).toBe(expectedUrl);
  });
});
