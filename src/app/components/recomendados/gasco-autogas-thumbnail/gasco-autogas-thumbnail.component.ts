import { Component } from '@angular/core';
import { VideosRecomendadosService } from '../../../services/videos-recomendados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gasco-autogas-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './gasco-autogas-thumbnail.component.html',
  styleUrl: './gasco-autogas-thumbnail.component.css'
})
export class GascoAutogasThumbnailComponent {

  constructor(
    private videosRecomendadosService: VideosRecomendadosService,
    private router: Router,
  ) {}

  asignarVideoActual(id: number) {
    this.videosRecomendadosService.modelarRecomendados(id);
  }

  go() {
    this.router.navigate(['/gasco-autogas']);
  }
}
