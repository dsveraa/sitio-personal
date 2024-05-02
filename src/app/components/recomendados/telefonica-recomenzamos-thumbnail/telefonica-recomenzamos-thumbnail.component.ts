import { Component } from '@angular/core';
import { VideosRecomendadosService } from '../../../services/videos-recomendados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telefonica-recomenzamos-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './telefonica-recomenzamos-thumbnail.component.html',
  styleUrl: './telefonica-recomenzamos-thumbnail.component.css'
})
export class TelefonicaRecomenzamosThumbnailComponent {

  constructor(
    private videosRecomendadosService: VideosRecomendadosService,
    private router: Router,
  ) {}

  asignarVideoActual(id: number) {
    this.videosRecomendadosService.modelarRecomendados(id);
  }

  go() {
    this.router.navigate(['/telefonica-recomenzamos']);
  }
}