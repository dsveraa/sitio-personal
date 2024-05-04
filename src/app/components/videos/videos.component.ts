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
  isMobile!: boolean;

  constructor(
    private animationService: BoxAnimationService,
    private videoActualService: VideoActualService,
    
  ) { }

  enviarNumero(numero: number) {
    this.videoActualService.enviarNumero(numero);
  }

  ngOnInit(): void {
    this.isMobile = this.detectMobile();
    this.animarEntrada();
  }

  detectMobile(): boolean {
    const userAgent = navigator.userAgent.toLowerCase();
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  }
  animarEntrada() {
    this.animationService.animateElementInit('boxWeb');
  }

  playVideo(video: HTMLVideoElement) {
    video.currentTime = 0;
    video.play();
  }
  pauseVideo(video: HTMLVideoElement) {
    video.pause();
  }

}
