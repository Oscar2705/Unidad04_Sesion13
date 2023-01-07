import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent {
  valor!:string;
  moneda!:string;
  error="(Escriba un numero)";
  num="Elige una opción"

  //Ejercicio 3
  fecha = '';
  fa!:Date;
  tiempo = '';

  calcular():void {
    if(!this.fecha) {
      this.fecha = new Date().toLocaleString();
    }

    this.fa = new Date();
    let fecha2 = new Date(this.fecha).getTime();
    let numero = this.fa.getTime() - fecha2;

    // Dias
    if(numero >= 86400000) {
      let dias  = Math.floor(numero / 86400000);
      this.tiempo = `Hace ${dias} dias.`
    }else if(3600000 <=numero) {
      let hrs = Math.floor(numero / 3600000);
      this.tiempo = `Hace ${hrs} horas.`
    }else if(60000 <= numero) {
      let min  = Math.floor(numero / 60000);
      this.tiempo = `Hace ${min} minutos.`
    }else {
      let sec  = Math.floor(numero / 1000);
      this.tiempo = `Hace ${sec} segundos.`
    }

  }
}
