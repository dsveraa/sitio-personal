import { Component } from '@angular/core';
import { VideosRecomendadosService } from '../../../services/videos-recomendados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sqm-amintec-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './sqm-amintec-thumbnail.component.html',
  styleUrl: './sqm-amintec-thumbnail.component.css'
})
export class SqmAmintecThumbnailComponent {

  constructor(
    private videosRecomendadosService: VideosRecomendadosService,
    private router: Router,
  ) {}

  asignarVideoActual(id: number) {
    this.videosRecomendadosService.modelarRecomendados(id);
  }

  go() {
    this.router.navigate(['/sqm-amintec']);
  }
}
