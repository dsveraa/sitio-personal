import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoActualService } from '../../../services/video-actual.service';

@Component({
  selector: 'app-ziknes-thumbnail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ziknes-thumbnail.component.html',
  styleUrl: './ziknes-thumbnail.component.css'
})
export class ZiknesThumbnailComponent {

  constructor(
    private videoActualService: VideoActualService,
  ) {}

  enviarNumero(number: number) {
    this.videoActualService.enviarNumero(number);
  }

}
