import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appVideoHover]',
  standalone: true
})
export class VideoHoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    const video = this.el.nativeElement as HTMLVideoElement;
    if (video) {
      video.play();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    const video = this.el.nativeElement as HTMLVideoElement;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }
}
