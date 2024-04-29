import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  private _inHome?: boolean;

  get estadoHome() {
    return this._inHome;
  }

  aplicarEstadoHome(value: boolean) {
    this._inHome = value;
  }
}
