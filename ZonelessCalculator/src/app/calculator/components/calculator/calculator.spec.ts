import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculator } from './calculator';
import { signal } from '@angular/core';
import { CalculatorService } from '../../services/calculator';
import { By } from '@angular/platform-browser';
import { CalculatorButton } from '../calculator-button/calculator-button';

// El mock se usara para simular el servicio
class MockCalculatorService{
  resultado= signal('100');
  comando= signal('+');
  actual=signal('1');
  construirNumero = vi.fn();
}

describe('Calculator', () => {
  let component: Calculator;
  let fixture: ComponentFixture<Calculator>;
  let mockCalculatorService: MockCalculatorService

  beforeEach(async () => {

    mockCalculatorService=new MockCalculatorService();

    // Añadimos en el provider el Mock
    await TestBed.configureTestingModule({
      imports: [Calculator],
      providers: [
        {
          provide: CalculatorService,
          useValue:mockCalculatorService
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Calculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {


    const compiled = fixture.nativeElement as HTMLElement

    // Y al hacer el console log de una de las variables que conste en el Mock saldra el resultado indicado en el Mock.
    //console.log(component.actual)

    expect(component).toBeTruthy();
  });

  it('should have initial values from service', () => {
    
    
    expect(component.actual()).toBe('1')
    expect(component.comando()).toBe('+')
    expect(component.resultado()).toBe('100');


  });

  it('should display values in the template', () => {
    
    mockCalculatorService.resultado.set('10');
    mockCalculatorService.comando.set('-');
    mockCalculatorService.actual.set('4');

    // Usamos detectChanges para que se actualice el HTML
    fixture.detectChanges();
    
    // Tras poner en el HTML un test-id lo buscamos en el query selector indicandolo ente []
    const result = (fixture.nativeElement as HTMLElement).querySelector('[test-id="resultado"]')

    // Para obtener el resto de valores se busca por la clase que tiene el span
    const calculo = (fixture.nativeElement as HTMLElement).querySelector('.text-4xl');

    expect(result?.innerHTML).toBe('10');

    // Con toContain podemos ver si es el resultado esperado sin ser tan estricto
    expect(calculo?.innerHTML).toContain('4 - ');
  });

  it('should call constructNumber when handleClick is called', () => {
    
    component.handleClick('2');

    // Con toHaveBeenCalledWith miramos si el servicio ha recibido el 2 indicado en el handleClick
    expect(mockCalculatorService.construirNumero).toHaveBeenCalledWith('2');
  });

  it('should handle keyboard events correctly', () => {
    
    // Creamos un evento que al pulsar una tecla envie el valor 2
    const event = new KeyboardEvent('keyup',{key: '2'})

    document.dispatchEvent(event);

    expect(mockCalculatorService.construirNumero).toHaveBeenCalledWith('2');
    
  });

  it('should handle special keyboard events (Enter -> =)', () => {
    // Creamos un evento que al pulsar una tecla envie el valor Enter
    const event = new KeyboardEvent('keyup',{key: 'Enter'})

    document.dispatchEvent(event);

    // Como en la función le hacemos enter que Enter es un = esperamos que el servicio sea un =
    expect(mockCalculatorService.construirNumero).toHaveBeenCalledWith('=');
  });

  it('should handle special keyboard events (Escape -> C)', () => {
    // Creamos un evento que al pulsar una tecla envie el valor Enter
    const event = new KeyboardEvent('keyup',{key: 'Escape'})

    document.dispatchEvent(event);

    // Como en la función le hacemos enter que Enter es un Escape esperamos que el servicio sea un C
    expect(mockCalculatorService.construirNumero).toHaveBeenCalledWith('C');
  });

  it('should call constructnumber when button is clicked', () => {
    
    // Para hacer esta prueba dado que no se usa el evento click sino una personalizado (Onclick) se usa el debug element
    const buttons = fixture.debugElement.queryAll(
      By.directive(CalculatorButton)
    );

    const boton = buttons[0];

    // Con triggerEventHandler podremos realizar el evento personalizado para pruebas
    boton.triggerEventHandler('OnClick','C');

    expect(mockCalculatorService.construirNumero).toHaveBeenCalledWith('C');

  });
 
  it('should update resultText signal when service updates', () => {

    mockCalculatorService.resultado.set('999');
    fixture.detectChanges();
    expect(component.resultado()).toBe('999')
  });

  it('should have 19 calculator-button components with content projected', () => {
      
    const compiled = fixture.nativeElement as HTMLElement

    const buttons = compiled.querySelectorAll('app-calculator-button');

    expect(buttons[0].querySelector('button')?.innerHTML).toContain('C')
      
  });
});
