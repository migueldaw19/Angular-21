import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  input,
  OnInit,
  output,
  signal,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  imports: [],
  templateUrl: './calculator-button.html',
  styleUrl: './calculator-button.css',
  host: {
    class: 'border-r border-b border-indigo-400',
    '[class.w-2/4]': 'isDoubleSize()',
    '[class.w-1/4]': '!isDoubleSize()',
    // attribute: 'hola',
    // 'data-size': 'XL',
  },
})
export class CalculatorButton {
  public isPressed = signal(false);

  public OnClick = output<string>();
  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');

  // Cuando recibe el input revisa si isComand lleva un valor y lo transforma true o false. 
  public isCommand = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  // Cuando recive el input a traves del host revisa si isDoubleSize es true o false para poner la clase indicada
  public isDoubleSize = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  // El HostBinding añadirá la clase is-command al botón si la función isCommand devuelve true
  @HostBinding('class.is-command') get commandStyle() {
    return this.isCommand();
  }

  // @HostBinding('class.w-2/4') get commandStyle() {
  //   return this.isDoubleSize();
  // }

  handleClick() {
    console.log('handleClick');
    if (!this.contentValue()?.nativeElement) {
      return;
    }

    const value = this.contentValue()!.nativeElement.innerText;

    this.OnClick.emit(value.trim());
  }
  // Función que sirve para verificar la tecla que ha marcado el usuario
  keywordpress(key:string){


    // Esta condición sirve para que no se rompa la calculadora en caso de que se pulse un botón sin valor
    if(!this.contentValue()?.nativeElement){
      return;
    }
    const value = this.contentValue()!.nativeElement.innerText;

    // Esta condición permite verificar si la tecla marcada corresponde a un botón de la calculadora
    if(value != key){
      return;
    }

    // Con esto permite mostrar el botón que se ha marcado con respecto a la tecla indicada

    this.isPressed.set(true);

    setTimeout(()=>{
      this.isPressed.set(false);
    },100)

  }
}