import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorButton } from './calculator-button';
import { Component } from '@angular/core';



// Simularemos el componente padre para comprobar el contenido proyectado
@Component({
  imports:[CalculatorButton],
  //` Nos permitira crear el template en mas lineas. si usamos ' lo tendríamos que hacer todo en una sola linea
  template:`
  <app-calculator-button>
    <span class="projected-content">7</span>
  </app-calculator-button>`
})

class TesHostComponent{}

describe('CalculatorButton', () => {
  let component: CalculatorButton;
  let fixture: ComponentFixture<CalculatorButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorButton],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply w-1/4 double size is false', () => {
    const host= fixture.nativeElement as HTMLElement;
    // Con esto podemos obtener las clases del host
    const hostCSS= host.classList.value;

    expect(hostCSS).toContain("w-1/4")

  });

  it('should apply w-2/4 double size is true', () => {
    // Con esto le diremos que es un botón grande y detectaremos los cambios
    fixture.componentRef.setInput('isDoubleSize',true);
    fixture.detectChanges();

    const host= fixture.nativeElement as HTMLElement;
    // Con esto podemos obtener las clases del host
    const hostCSS= host.classList.value;

    expect(hostCSS).toContain("w-2/4")

  });

  it('should apply is-command class when isCommand is true', () => {
     // Con esto le diremos que es un botón grande y detectaremos los cambios
    fixture.componentRef.setInput('isCommand',true);
    fixture.detectChanges();

    const host= fixture.nativeElement as HTMLElement;
    // Con esto podemos obtener las clases del host
    const hostCSS= host.classList.value;

    expect(hostCSS).toContain("is-command")
  });

  it('should emit onClick when handleClick is called', () => {
    // Vitest detectara cualquier evento relacionado con un on Click que espere un emit
    const spy = vi.spyOn(component.OnClick, 'emit');

    const buttonElement = (fixture.nativeElement as HTMLElement).querySelector(
      'button'
    );

    // Ponemos un inner text para añadir un valor del boton y llamamos a la función click
    buttonElement!.innerText = '9';

    buttonElement!.click();

    expect(buttonElement).toBeTruthy();

    // Y aqui revisamos si el spy se activa y con el valor que hemos puesto en el botón
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('9');


  });


  it('should set isPressed to true and then false when keyboardPressedStyle is called with matching key', async (done) => {
    component.contentValue()!.nativeElement.innerText='9'

    component.keywordpress('9');

    expect(component.isPressed()).toBe(true)

    // Modo sencillo
    //setTimeout(()=>{
    //  expect(component.isPressed()).toBe(false)
    //},101)

    //Modo con promesas
    await new Promise((resolve)=>setTimeout(resolve,101))
    expect(component.isPressed()).toBe(false)
    
  });

  it('should NOT set isPressed if key does not match', () => {
    component.contentValue()!.nativeElement.innerText=''

    component.keywordpress('9');

    expect(component.isPressed()).toBe(false)
  });

  it('should display projected content', () => {
    
    //Creamos el componente simulado
    const fixtureHost= TestBed.createComponent(TesHostComponent);

    //sirve para detectar los cambios que ocurran en el componente simulado
    fixtureHost.detectChanges();

    const compile = fixtureHost.nativeElement as HTMLElement

    expect(compile.querySelector('.projected-content')).toBeTruthy()

    expect(compile.textContent.trim()).toBe('7')
  });
});
