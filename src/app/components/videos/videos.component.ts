import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { VideosRecomendadosService } from '../../services/videos-recomendados.service';
import { BoxAnimationService } from '../../services/box-animation.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { VideoActualService } from '../../services/video-actual.service';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit{
  @ViewChild('videoGasco') videoGasco!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoVolkswagen') videoVolkswagen!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoZiknes') videoZiknes!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoMetro') videoMetro!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoSQM') videoSQM!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoTelefonica') videoTelefonica!: ElementRef<HTMLVideoElement>;

  constructor(
    private animationService: BoxAnimationService,
    private videoActualService: VideoActualService,
    private router: Router,
  ) { }
  
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
    video.currentTime = 0;
    video.play();
  }
  pauseVideo(video: HTMLVideoElement) {
    video.pause();
  }
  playOnLoad(video: HTMLVideoElement) {
    this.playVideo(video);
  }

}
