import { Injectable, signal } from '@angular/core';

const numero = ['0','1','2','3','4','5','6','7','8','9'];
const operadores = ['+','-','*','/','÷'];
const operadorEspecial = ['+/-','%','.','=','C','Backspace']

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {

  public resultado = signal('0')
  public actual = signal('0')
  public comando = signal('+')

  public construirNumero(valor:string){

    // Validar input 

    if(![...numero,...operadores,...operadorEspecial].includes(valor)){
      console.log('Valor no valido');
      return;
    }

    // Si valor es =
    
    if(valor == '='){
      this.calcular();
      this.comando.set('0');
      this.resultado.set(this.actual())
      this.actual.set('0');
      return;
    }

    // Para resetear todo

    if(valor == 'C'){
      this.resultado.set('0');
      this.actual.set('0');
      this.comando.set('+');
      return;
    }

    // Si se usa la tecla de borrar el ultimo digito
    if(valor=='Backspace'){
      if (this.resultado()=='0'){
        return;
      }else if (this.resultado()=='-0'){
        this.resultado.set('0')
      }else if(this.resultado().includes('-') && this.resultado().length==2){
        this.resultado.set('0')
      }else if(this.resultado().length==1){
        this.resultado.set('0')
      }else{
        this.resultado.update(v=> v.slice(0,-1))
      }
      return;
    }

    if(valor == '+/-'){
      if(this.resultado().includes('-')){
        this.resultado.update(v=> v.slice(1))
      }else{
        this.resultado.update(v=> '-' + v);
      }
      return;
    }

    if(operadores.includes(valor)){

      if(this.comando()=='0'){
        this.comando.set(valor);
        this.actual.set(this.resultado())
        this.resultado.set('0')
      }else{
        this.calcular();
        this.comando.set(valor);
        this.resultado.set('0')
      }


      return;
    }

    if(this.resultado().length>=10){
      console.log('Numero de caracteres excedido');
      return;
    }


    if(valor=='.' && !this.resultado().includes('.')){
      // También se puede poner la condición de vacio pero como está programado esto no ocurriría

      if(this.resultado()=='0'){
        this.resultado.set('0.');
      }else{
        this.resultado.update(v=> v + '.');
      }

      return;
    }

    if(numero.includes(valor)){
       if((this.resultado()=='0' || this.resultado()=='-0') && valor !='0' ){
        if(this.resultado().includes('-')){
          this.resultado.update(v=> '-' + valor);
        }else{
          this.resultado.set(valor);
        }
      // Se añade esta condicion para que no se pueda llenar las fila de 0 (por ejemplo 0000000.1)
       }else if(this.resultado()!='0'){
        this.resultado.update(v=> v + valor);
       }
       return;
    }

  }

  public calcular(){
    const numero1 = parseFloat(this.actual());
    const numero2 = parseFloat(this.resultado());
    const comando = this.comando;

    let total=0;

    switch(comando()){
      case '+':
        total = numero1 + numero2;
        break;
      case '-':
        total = numero1 -  numero2;
        break;
      case '*':
        total= numero1 * numero2;
        break;
      case 'x':
        total= numero1 * numero2;
        break;
      case '/':
        total= numero1 / numero2;
        break;
      case '÷':
        total= numero1 / numero2;
        break;
    }

    this.actual.set(total.toString());
  }
}
