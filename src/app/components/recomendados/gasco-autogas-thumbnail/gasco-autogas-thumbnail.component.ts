import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoActualService } from '../../../services/video-actual.service';

@Component({
  selector: 'app-gasco-autogas-thumbnail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gasco-autogas-thumbnail.component.html',
  styleUrl: './gasco-autogas-thumbnail.component.css'
})
export class GascoAutogasThumbnailComponent {

  constructor(
    private videoActualService: VideoActualService,
  ) {}

  videoActual(id: number) {
    this.videoActualService.enviarNumero(id);
  }
}
