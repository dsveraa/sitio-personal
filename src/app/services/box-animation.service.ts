import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoxAnimationService {

  constructor() { }
  
  animateElement(id: string) {
    const elemento = document.getElementById(id);
    const posicionElemento = elemento!.getBoundingClientRect().top;
    const tamanoPantalla = window.innerHeight;

    if (posicionElemento! < tamanoPantalla) {
      elemento!.style.animation = 'aparicion 1s';
    }
  }
}
