import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoActualService } from '../../../services/video-actual.service';


@Component({
  selector: 'app-metro-mural-thumbnail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './metro-mural-thumbnail.component.html',
  styleUrl: './metro-mural-thumbnail.component.css'
})
export class MetroMuralThumbnailComponent {
  
  constructor(
    private videoActualService: VideoActualService,
  ) {}

  enviarNumero(id: number) {
    this.videoActualService.enviarNumero(id);
  }

}