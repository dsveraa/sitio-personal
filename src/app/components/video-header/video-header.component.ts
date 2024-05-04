import { Component } from '@angular/core';
import { VideoLoaderComponent } from '../video-loader/video-loader.component';

@Component({
  selector: 'app-video-header',
  standalone: true,
  imports: [VideoLoaderComponent],
  templateUrl: './video-header.component.html',
  styleUrl: './video-header.component.css'
})
export class VideoHeaderComponent {
  showLoader = true;

  videoLoaded() {
    this.showLoader = false; 
  }
}
