import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoActualService {

  private numeroSubject = new BehaviorSubject<number>(0);
  numero$ = this.numeroSubject.asObservable();

  enviarNumero(numero: number) {
    console.log("soy el servicio y recibí el numero")
    this.numeroSubject.next(numero);
  }
}
