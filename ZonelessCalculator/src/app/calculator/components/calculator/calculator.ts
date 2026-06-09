import { Component, computed, HostListener, inject, viewChildren } from '@angular/core';
import { CalculatorButton } from '../calculator-button/calculator-button';
import { CalculatorService } from '../../services/calculator';

@Component({
  selector: 'app-calculator',
  imports: [CalculatorButton],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
  host: {
    '(document:keyup)': 'valorBoton($event)'
  }
})
export class Calculator {

  // En caso que no tengamos acceso al constructor se acude a inject
  private calculatorService = inject(CalculatorService)


  // Para obtener los valores del servicio se acude a esta función (este es un metodo  posible)
  //get resultado(){
  //  return this.calculatorService.resultado
  //}

  // Este es otro metodo posible
  public resultado = computed( () => this.calculatorService.resultado ())
  public comando = computed( () => this.calculatorService.comando ())
  public actual = computed( () => this.calculatorService.actual ())

  // Cuando quieres traer mas de un valor del hijo
  public botones = viewChildren(CalculatorButton);

  handleClick(key: string) {
    this.calculatorService.construirNumero(key)
  }

  // Con HostListener se obtiene el valor dela tecla marcada

  // Hay 2 maneras para que al hacer cierta acción muestre la tecla marcada con @HostListener o bien desde el host
  //@HostListener('document:keyup',['$event'])

  valorBoton(event: KeyboardEvent) {

    const key = event.key

    // Record para asegurar que recibe un string y devuelve un string
    const equivalente: Record<string,string> = {
      Escape : 'C',
      Clear: 'C',
      '/':'÷',
      X:'*',
      Enter:'='
    }

    // Si el valor no es ninguno de los valores de equivalente muestra el valor, sinó mostrará el que este indicado en equivalente
    this.handleClick(equivalente[key]??key)

    this.botones().forEach(element => {
      element.keywordpress(key)
    });
  }



}
