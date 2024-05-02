import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoActualService } from '../../../services/video-actual.service';

@Component({
  selector: 'app-telefonica-recomenzamos-thumbnail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './telefonica-recomenzamos-thumbnail.component.html',
  styleUrl: './telefonica-recomenzamos-thumbnail.component.css'
})
export class TelefonicaRecomenzamosThumbnailComponent {

  constructor(
    private videoActual: VideoActualService,
  ) {}

  enviarNumero(id: number) {
    this.videoActual.enviarNumero(id);
  }

}