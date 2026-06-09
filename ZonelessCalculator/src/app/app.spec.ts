import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  // Vitest
  it('should be 4', () =>{

    //Preparamos las pruebas

    const num1 = 1;
    const num2 = 2

    // Realizamos las pruebas
    
    const resultado = num1 + num2;

    // Asercion

    // Si aquí en expect usamos el result y el toBe lo ponemos en 4 saltará error dado que la aplicación espera que sea el número 4 el resultado y no un 3

    /*
      Esto es en caso que queramos hacer un error personlizado en vez el que te indique vitest

      if(result != 4){
        throw new Error('El resultado debe ser 4');
      }

    */

    expect(2+2).toBe(4);

    // Si en una prueba tienes 2 expect y el 1ª falla no continua con el siguiente
  })

  it('should create the app', () => {
    // Fixture es una ambiente controlado de nuestra aplicación
    const fixture = TestBed.createComponent(App);
    // Es la instacia de AppComponent. Esto hace que podamos llmar funciones que no sean privadas del app.ts 
    const app = fixture.componentInstance;
    // compiled se dedica a revisar el HTML. Con InnerHTML 
    const compiled = fixture.nativeElement as HTMLElement
    // toBeTruthy sirve para que en caso que app no se pueda compilar de error
    expect(app).toBeTruthy();
  });

  it('should render router-outlet', async () => {
     // Fixture es una ambiente controlado de nuestra aplicación
    const fixture = TestBed.createComponent(App);
    // compiled se dedica a revisar el HTML. Con InnerHTML 
    const compiled = fixture.nativeElement as HTMLElement
    // con esto obtenemos si hay un router-outlet en nuestro HTML
    const router = compiled.querySelector('router-outlet');
    // Con esto das a entender que espera que haya un router-outlet
    expect(router).toBeTruthy();
  })
  it('should render router-outlet with css clases', async () => {
     // Fixture es una ambiente controlado de nuestra aplicación
    const fixture = TestBed.createComponent(App);
    // compiled se dedica a revisar el HTML. Con InnerHTML 
    const compiled = fixture.nativeElement as HTMLElement
    // con esto obtenemos el primer div de nuestro HTML
    const div = compiled.querySelector('div');
    // se añade una variable con todas las clases que quiero que salga en el div
    const clases = 'min-w-screen min-h-screen bg-olive-600 flex items-center justify-center px-5 py-5'.split(' ');
    
    // Esto hará que aunque añadamos clases al div no de error
    const divalue = div?.classList.value.split(' ');
    
    // Con esto miramos que todas las clases indicadas en la variable clases (esto se hace de esta manera en caso que el class del div se cambia de orden)
    clases.forEach( classname =>{
      expect(divalue).toContain(classname)
    })
  })
  it('should render router-outlet buy me a beer link', async () => {
    // Fixture es una ambiente controlado de nuestra aplicación
    const fixture = TestBed.createComponent(App);
    // compiled se dedica a revisar el HTML. Con InnerHTML 
    const compiled = fixture.nativeElement as HTMLElement
    // con esto obtenemos el primer div de nuestro HTML
    const div = compiled.querySelector('a');

    expect(div).not.toBeNull();

    // se añade una variable con el nombre que debería tener a
    const name = 'Buy me a beer';

    // Se añade la variable con el href
    const href= 'https://www.buymeacoffee.com/scottwindon';

    // Obtenermos el titulo del A
    const valorA= div?.title;

    // Obtenemos el href
    const hrefA= div?.href;

    // Metodo antiguo
    expect(valorA).toContain(name)
    expect(hrefA).toContain(href)

    // Metodo nuevo
    expect(div?.getAttribute('title')).toContain('Buy me a beer')
    expect(div?.getAttribute('href')).toContain('https://www.buymeacoffee.com/scottwindon')

  })

  /*
  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, ZonelessCalculator');
  });
  */

  // Jasmine Karma para versiones antiguas de Angular
  
  /*
    // Haciendo esto no es necesario hacer el testBed y compile en cada prueba
    let fixture: ComponentFixture<App>
    let compiled: HTMLElement


    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [App],
      }).compileComponents();
      fixture = TestBed.createComponent(App);
      compiled = fixture.nativeElement as HTMLElement;
    });

    it('should render title', async () => {
      await fixture.whenStable();
      expect(compiled.querySelector('h1')?.textContent).toContain('Hello, ZonelessCalculator');
    });

    it('should render router-outlet', async () => {
      // Con esto das a entender que espera un router-outlet que no sea nulo
      expect(compiled.querySelector('router-outlet')).not.toBeNull();
    })

    it('should render router-outlet with css clases', async () => {
      const div = compiled.querySelector('div');
      // se añade una variable con todas las clases que quiero que salga en el div
      const clases = 'min-w-screen min-h-screen bg-olive-600 flex items-center justify-center px-5 py-5'.split(' ');

      // Esto hará que aunque añadamos clases al div no de error
      const divalue = div?.classList.value.split(' ');

      // Con esto miramos que todas las clases indicadas en la variable clases (esto se hace de esta manera en caso que el class del div se cambia de orden)
      clases.forEach( classname =>{
        expect(divalue).toContain(classname)
      })
    })

    it('should render router-outlet buy me a beer link', async () => {
      const div = compiled.querySelector('a');

      
      // con esto obtenemos el primer div de nuestro HTML
      const div = compiled.querySelector('a');

      expect(div).not.toBeNull();

      // se añade la variable con el href que deberia tener
      const href = 'https://www.buymeacoffee.com/scottwindon';

      // se añade una variable con el nombre que debería tener a
      const name = 'Buy me a beer';

      // Obtenermos el titulo del A
      const valorA= div?.title;

      // Obtenemos el href
      const hrefA= div?.href;

      expect(valorA).toContain(name)
      expect(hrefA).toContain(href)
    })

    it('should be 4', () =>{
      //Preparamos las pruebas

        const num1 = 1;
        const num2 = 2

        // Realizamos las pruebas

        const resultado = num1 + num2;

        Esto es en caso que queramos hacer un error personlizado en vez el que te indique Jassmin
        if(result != 4){
          throw new Error('El resultado debe ser 4');
        }

        expect(2+2).toBe(4);
    }
  */
});
