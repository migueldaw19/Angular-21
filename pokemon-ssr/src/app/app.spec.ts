import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideRouter } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="test-class">
      <a href="test-link">Test Link</a>
    </nav>
  `,
})
class MockNavbarComponent {}

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let app: App;
  beforeEach(async () => {
    // ! #1 Para hacer la prueba con el navbar real
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();

    // ! #2 Para hacer la prueba con la simulacion de navbar
    // y que no salgan ciertos errores 
    // await TestBed.configureTestingModule({
    //   imports: [AppComponent],
    //   providers: [provideRouter([])],
    // })
    //   .overrideComponent(AppComponent, {
    //     add: {
    //       imports: [MockNavbarComponent],
    //     },
    //     remove: {
    //       imports: [NavbarComponent],
    //     },
    //   })
    //   .compileComponents();

    // ! #3 Para hacer la prueba con la simulacion de navbar
    // y que salgan los errores de otros componentes (No recomendado porque puede dar falsos errores)
    //TestBed.overrideComponent(App, {
    //  set: {
    //    imports: [MockNavbarComponent],
    //    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    //  },
    //});

    fixture = TestBed.createComponent(App);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;

    // console.log(fixture.nativeElement.innerHTML);

    expect(app).toBeTruthy();
  });

  it('should render the navbar and router-outlet', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-navbar')).toBeTruthy();
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  // Si se mueven las clases en el html esta prueba es contraproducente
  it('should match snapshot', () => {

    const compiled = fixture.nativeElement as HTMLElement;

    // Recuerda que antes de hacer esta prueba borrar el archivo de snapshot si has cambiado el mock o el html original
    expect(compiled.innerHTML).toMatchSnapshot();
  });
});
