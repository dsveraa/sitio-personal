import { Component } from '@angular/core';
import { VideosRecomendadosService } from '../../services/videos-recomendados.service';
import { GascoAutogasThumbnailComponent } from './gasco-autogas-thumbnail/gasco-autogas-thumbnail.component';
import { VolkswagenLastChanceThumbnailComponent } from './volkswagen-last-chance-thumbnail/volkswagen-last-chance-thumbnail.component';
import { ZiknesThumbnailComponent } from './ziknes-thumbnail/ziknes-thumbnail.component';
import { MetroMuralThumbnailComponent } from './metro-mural-thumbnail/metro-mural-thumbnail.component';
import { SqmAmintecThumbnailComponent } from './sqm-amintec-thumbnail/sqm-amintec-thumbnail.component';
import { TelefonicaRecomenzamosThumbnailComponent } from './telefonica-recomenzamos-thumbnail/telefonica-recomenzamos-thumbnail.component';

@Component({
  selector: 'app-recomendados',
  standalone: true,
  imports: [
    GascoAutogasThumbnailComponent,
    VolkswagenLastChanceThumbnailComponent,
    ZiknesThumbnailComponent,
    MetroMuralThumbnailComponent,
    SqmAmintecThumbnailComponent,
    TelefonicaRecomenzamosThumbnailComponent
  ],
  templateUrl: './recomendados.component.html',
  styleUrl: './recomendados.component.css'
})
export class RecomendadosComponent {

  constructor(private videosRecomendadosService: VideosRecomendadosService,) { }

  get recomendados() {
    return this.videosRecomendadosService.videosRecomendados;
  }

}
