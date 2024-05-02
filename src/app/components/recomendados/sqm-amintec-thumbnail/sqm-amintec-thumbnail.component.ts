import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoActualService } from '../../../services/video-actual.service';

@Component({
  selector: 'app-sqm-amintec-thumbnail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sqm-amintec-thumbnail.component.html',
  styleUrl: './sqm-amintec-thumbnail.component.css'
})
export class SqmAmintecThumbnailComponent {

  constructor(
    private videoActualService: VideoActualService,
  ) {}

  enviarNumero(id: number) {
    this.videoActualService.enviarNumero(id);
  }

}
