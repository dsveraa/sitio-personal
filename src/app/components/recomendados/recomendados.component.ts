import { Component } from '@angular/core';
import { VideosRecomendadosService } from '../../services/videos-recomendados.service';

@Component({
  selector: 'app-recomendados',
  standalone: true,
  imports: [],
  templateUrl: './recomendados.component.html',
  styleUrl: './recomendados.component.css'
})
export class RecomendadosComponent {

  constructor(private videosRecomendadosService: VideosRecomendadosService,) { }

  get recomendados() {
    return this.videosRecomendadosService.videosRecomendados;
  }

}
