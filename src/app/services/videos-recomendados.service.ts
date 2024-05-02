import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosRecomendadosService {

  constructor() { }

  videoActual!: number;
  _recomendados: string[] = [];

  get videosRecomendados() {
    return this._recomendados;
  }

  listaVideos = [
    "app-gasco-autogas-thumbnail",
    "app-volkswagen-last-chance-thumbnail",
    "app-ziknes-thumbnail",
    "app-metro-mural-thumbnail",
    "app-sqm-amintec-thumbnail",
    "app-telefonica-recomenzamos-thumbnail"
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
      console.log(seleccion)
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

    this._recomendados = seleccion;
    // console.log(this._recomendados);
  }
}
