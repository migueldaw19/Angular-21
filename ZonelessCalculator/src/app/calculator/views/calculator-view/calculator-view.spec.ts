import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorView } from './calculator-view';
import { Component } from '@angular/core';


// Sirve para simular un componente para que una vez veamos el log no sea tan grande como si fuera el componente real
@Component({
  selector: 'app-calculator',
  template: '<div>MockCalculator</div>'
})

class MockCalculatorComponent{

}

describe('CalculatorView', () => {
  let component: CalculatorView;
  let fixture: ComponentFixture<CalculatorView>;

  beforeEach(async () => {
    //await TestBed.configureTestingModule({
    //  imports: [CalculatorView],
    //}).compileComponents();

    await TestBed.configureTestingModule({
      imports: [CalculatorView],
    }).overrideComponent( CalculatorView, {
      set:{
        imports: [MockCalculatorComponent]
      }
    });

    fixture = TestBed.createComponent(CalculatorView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('componente de calculadora inicializado', async () => {
      // Fixture es una ambiente controlado de nuestra aplicación
      const fixture = TestBed.createComponent(CalculatorView);
      // compiled se dedica a revisar el HTML. Con InnerHTML 
      const compiled = fixture.nativeElement as HTMLElement
      console.log(compiled.innerHTML)
      // con esto obtenemos la etiqueta app-calculator en el HTML
      const div = compiled.querySelector('app-calculator');
      expect(div).toBeTruthy();

   })

   it('should render router-outlet with css clases', async () => {
        // Fixture es una ambiente controlado de nuestra aplicación
       const fixture = TestBed.createComponent(CalculatorView);
       // compiled se dedica a revisar el HTML. Con InnerHTML 
       const compiled = fixture.nativeElement as HTMLElement
       // con esto obtenemos el primer div de nuestro HTML
       const div = compiled.querySelector('div');
       // se añade una variable con todas las clases que quiero que salga en el div
       const clases = 'w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden'.split(' ');
       
       // Esto hará que aunque añadamos clases al div no de error
       const divalue = div?.classList.value.split(' ');
       
       // Con esto miramos que todas las clases indicadas en la variable clases (esto se hace de esta manera en caso que el class del div se cambia de orden)
       clases.forEach( classname =>{
         expect(divalue).toContain(classname)
       })
     })
});
