import { Component } from '@angular/core';
import { VideosRecomendadosService } from '../../../services/videos-recomendados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volkswagen-last-chance-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './volkswagen-last-chance-thumbnail.component.html',
  styleUrl: './volkswagen-last-chance-thumbnail.component.css'
})
export class VolkswagenLastChanceThumbnailComponent {
  
  constructor(
    private videosRecomendadosService: VideosRecomendadosService,
    private router: Router,
  ) {}

  asignarVideoActual(id: number) {
    this.videosRecomendadosService.modelarRecomendados(id);
  }

  go() {
    this.router.navigate(['/volkswagen-last-chance']);
  }
}
