import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoActualService } from '../../../services/video-actual.service';

@Component({
  selector: 'app-volkswagen-last-chance-thumbnail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './volkswagen-last-chance-thumbnail.component.html',
  styleUrl: './volkswagen-last-chance-thumbnail.component.css'
})
export class VolkswagenLastChanceThumbnailComponent {
  
  constructor(
    private videoActualService: VideoActualService
  ) {}

  enviarNumero(numero: number) {
    this.videoActualService.enviarNumero(numero);
  }

}
