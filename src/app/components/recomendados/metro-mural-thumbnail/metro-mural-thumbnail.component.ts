import { Component } from '@angular/core';
import { VideosRecomendadosService } from '../../../services/videos-recomendados.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-metro-mural-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './metro-mural-thumbnail.component.html',
  styleUrl: './metro-mural-thumbnail.component.css'
})
export class MetroMuralThumbnailComponent {
  
  constructor(
    private videosRecomendadosService: VideosRecomendadosService,
    private router: Router,
  ) {}

  asignarVideoActual(id: number) {
    this.videosRecomendadosService.modelarRecomendados(id);
  }

  go() {
    this.router.navigate(['/metro-mural']);
  }
}