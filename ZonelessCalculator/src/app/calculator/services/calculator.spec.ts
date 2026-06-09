import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator';

describe('Calculator', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
    // Para que solo afecte a la prueba donde se llama vitest
    vi.resetAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created with default values', () => {
    expect(service.resultado()).toBe('0');
    expect(service.actual()).toBe('0');
    expect(service.comando()).toBe('+');
  });

  it('should set resultText, subResultText to "0" when C is pressed', () => {
    service.actual.set('123');
    service.resultado.set('1');
    service.comando.set('-')

    service.construirNumero('C');

    expect(service.actual()).toBe('0');
    expect(service.resultado()).toBe('0');
    expect(service.comando()).toBe('+');

  });

  it('should update resultText with number input', () => {


    service.construirNumero('1');
    service.construirNumero('1');

    expect(service.resultado()).toBe('11');
  });

  it('should handle operators correctly', () => {

    const operadores = ['+','-','*','/','÷'];

    for(let operador=0; operador < operadores.length;operador++){
      service.resultado.set('1');
      service.comando.set(operadores[operador])
      expect(service.comando()).toBe(operadores[operador]);
      expect(service.resultado()).toBe('1');
    }

  });
  it('should calculate result correctly for addition', () => {
    service.construirNumero('1');
    service.construirNumero('+');
    service.construirNumero('1');
    service.construirNumero('=');

    expect(service.resultado()).toBe('2');

  });

  it('should calculate result correctly for subtraction', () => {
    service.construirNumero('1');
    service.construirNumero('-');
    service.construirNumero('1');
    service.construirNumero('=');

    expect(service.resultado()).toBe('0');
  });

  it('should calculate result correctly for multiplication', () => {
    service.construirNumero('1');
    service.construirNumero('*');
    service.construirNumero('1');
    service.construirNumero('=');

    expect(service.resultado()).toBe('1');
  });

  it('should calculate result correctly for division', () => {

    const comandos = ['/','÷'];

    for(let comando = 0; comando < comandos.length; comando++){
      service.actual.set('4');
      service.construirNumero(comandos[comando]);
      service.resultado.set('1');
      service.construirNumero('=');

      expect(service.resultado()).toBe('4');
    }
  });

  it('should handle decimal point correctly', () => {
    service.construirNumero('4');
    service.construirNumero('.');
    service.construirNumero('1');

    expect(service.resultado()).toBe('4.1');

    service.construirNumero('.');
    expect(service.resultado()).toBe('4.1');
  });

  it('should handle decimal point starting with 0', () => {
    service.construirNumero('0');
    service.construirNumero('.');
    service.construirNumero('0');

    expect(service.resultado()).toBe('0.0');
  });

  it('should handle sign change +/-', () => {
    service.construirNumero('1');
    service.construirNumero('+/-');
    expect(service.resultado()).toBe('-1');
  });

  it('should handle backspace', () => {

    const opciones = ['12','1','0'];

    for(let opcion=0;opcion<opciones.length;opcion++){
      service.resultado.set(opciones[opcion]);
      service.construirNumero('Backspace');
      if(opciones[opcion].length>1){
        expect(service.resultado()).toBe(opciones[opcion].slice(0,-1));
      }else{
        expect(service.resultado()).toBe('0');
      }
    }
    
  });

  it('should handle backspace with negative numbers', () => {
    const opciones = ['-12','-1','-0'];

    for(let opcion=0;opcion<opciones.length;opcion++){
      service.resultado.set(opciones[opcion]);
      service.construirNumero('Backspace');
      if(opciones[opcion].length>2){
        expect(service.resultado()).toBe(opciones[opcion].slice(0,-1));
      }else{
        expect(service.resultado()).toBe('0');
      }
    }
  });

  it('should handle max length', () => {


    const resultadoSpy = vi.spyOn(console, 'log')

    // Para ocultar los console.log de la consola de pruebas
    resultadoSpy.mockImplementation(()=>{})

    service.resultado.set('1234567890');
    service.construirNumero('4');
    expect(service.resultado().length).toBe(10);

    expect(resultadoSpy).toBeCalled();
    // Si el spy se activa 10 veces da ok
    //expect(resultadoSpy).toBeCalledTimes(10);
  });

  it('should handle invalid input', () => {
    service.resultado.set('123');
    service.construirNumero('G');
    expect(service.resultado()).toBe('123');
  });

  it('should handle negative zero input correctly', () => {
    service.resultado.set('0');
    service.construirNumero('+/-');
    expect(service.resultado()).toBe('-0');
  });
});
