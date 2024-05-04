import { Component, OnInit } from '@angular/core';
import { BoxAnimationService } from '../../services/box-animation.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { VideoActualService } from '../../services/video-actual.service';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit {
  isTouchDevice!: boolean;

  constructor(
    private animationService: BoxAnimationService,
    private videoActualService: VideoActualService,
  ) { 
    this.isTouchDevice = this.detectTouchDevice()
  }

  private detectTouchDevice(): boolean {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  enviarNumero(numero: number) {
    this.videoActualService.enviarNumero(numero);
  }

  ngOnInit(): void {
    this.animarEntrada();
  }
  animarEntrada() {
    this.animationService.animateElementInit('boxWeb');
  }

  playVideo(video: HTMLVideoElement) {
    if (!this.isTouchDevice) {
      video.currentTime = 0;
      video.play();
    }
  }
  pauseVideo(video: HTMLVideoElement) {
    if (!this.isTouchDevice) {
      video.pause();
    }
  }

}
