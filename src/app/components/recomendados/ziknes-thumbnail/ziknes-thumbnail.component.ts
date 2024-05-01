import { Component } from '@angular/core';
import { VideosRecomendadosService } from '../../../services/videos-recomendados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ziknes-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './ziknes-thumbnail.component.html',
  styleUrl: './ziknes-thumbnail.component.css'
})
export class ZiknesThumbnailComponent {

  constructor(
    private videosRecomendadosService: VideosRecomendadosService,
    private router: Router,
  ) {}

  asignarVideoActual(id: number) {
    this.videosRecomendadosService.modelarRecomendados(id);
  }

  go() {
    this.router.navigate(['/ziknes']);
  }

}
