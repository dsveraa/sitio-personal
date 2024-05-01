import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosRecomendadosService {

  constructor() { }

  videoActual!: number;
  recomendados: string[] = [];

  get videosRecomendados() {
    return this.recomendados;
  }

  listaVideos = [
    "Gasco autogas",
    "Volkswagen last chance",
    "Ziknes 3d printer",
    "Metro mural",
    "SQM amintec as",
    "Telefonica recomenzamos",
  ]

  modelarRecomendados(id: number) {
    this.videoActual = id;
    this.elegir3Videos();
  }

  elegir3Videos() {
    let seleccion: string[] = [];

    if (this.videoActual === 0) {
      seleccion.push(
        this.listaVideos[1],
        this.listaVideos[2],
        this.listaVideos[3]
      );
    } else if (this.videoActual === this.listaVideos.length - 1) {
      seleccion.push(
        this.listaVideos[this.videoActual - 3],
        this.listaVideos[this.videoActual - 2],
        this.listaVideos[this.videoActual - 1]
      );
    } else if (this.videoActual === this.listaVideos.length - 2) {
      seleccion.push(
        this.listaVideos[this.videoActual - 2],
        this.listaVideos[this.videoActual - 1],
        this.listaVideos[this.videoActual + 1]
      );
    } else {
      seleccion.push(
        this.listaVideos[this.videoActual - 1],
        this.listaVideos[this.videoActual + 1],
        this.listaVideos[this.videoActual + 2]
      );
    }
    
    this.recomendados = seleccion;
  }
}
