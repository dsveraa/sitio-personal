import { Component, OnDestroy } from '@angular/core';
import { GascoAutogasThumbnailComponent } from './gasco-autogas-thumbnail/gasco-autogas-thumbnail.component';
import { VolkswagenLastChanceThumbnailComponent } from './volkswagen-last-chance-thumbnail/volkswagen-last-chance-thumbnail.component';
import { ZiknesThumbnailComponent } from './ziknes-thumbnail/ziknes-thumbnail.component';
import { MetroMuralThumbnailComponent } from './metro-mural-thumbnail/metro-mural-thumbnail.component';
import { SqmAmintecThumbnailComponent } from './sqm-amintec-thumbnail/sqm-amintec-thumbnail.component';
import { TelefonicaRecomenzamosThumbnailComponent } from './telefonica-recomenzamos-thumbnail/telefonica-recomenzamos-thumbnail.component';
import { NgComponentOutlet } from '@angular/common';
import { VideoActualService } from '../../services/video-actual.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recomendados',
  standalone: true,
  imports: [
    GascoAutogasThumbnailComponent,
    VolkswagenLastChanceThumbnailComponent,
    ZiknesThumbnailComponent,
    MetroMuralThumbnailComponent,
    SqmAmintecThumbnailComponent,
    TelefonicaRecomenzamosThumbnailComponent,
    NgComponentOutlet
  ],
  templateUrl: './recomendados.component.html',
  styleUrl: './recomendados.component.css'
})

export class RecomendadosComponent
 implements OnDestroy 
 {

  numeroRecibido!: number;
  private subscription: Subscription;

  constructor(private videoActualService: VideoActualService) {
    this.subscription = this.videoActualService.numero$.subscribe(numero => {
      console.log(numero)
      this.elegir3Videos(numero);
    });
   }

  recomendados: any = [];

  listaVideos: any = [
    GascoAutogasThumbnailComponent, 
    VolkswagenLastChanceThumbnailComponent, 
    ZiknesThumbnailComponent, 
    MetroMuralThumbnailComponent, 
    SqmAmintecThumbnailComponent, 
    TelefonicaRecomenzamosThumbnailComponent
  ]
 
  elegir3Videos(numero) {
    
    let recomendados: any = [];
    
    if (numero === 0) {
      recomendados.push(
        this.listaVideos[1],
        this.listaVideos[2],
        this.listaVideos[3]
      );
    } else if (numero === this.listaVideos.length - 1) {
      recomendados.push(
        this.listaVideos[numero - 3],
        this.listaVideos[numero - 2],
        this.listaVideos[numero - 1]
      );
    } else if (numero === this.listaVideos.length - 2) {
      recomendados.push(
        this.listaVideos[numero - 2],
        this.listaVideos[numero - 1],
        this.listaVideos[numero + 1]
      );
      console.log(recomendados);
    } else {
      recomendados.push(
        this.listaVideos[numero - 1],
        this.listaVideos[numero + 1],
        this.listaVideos[numero + 2]
      );
    }
    
    this.recomendados = recomendados;
    console.log(this.recomendados);   
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

  

