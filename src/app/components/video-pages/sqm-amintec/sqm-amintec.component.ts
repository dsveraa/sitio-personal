import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { RecomendadosComponent } from '../../recomendados/recomendados.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sqm-amintec',
  standalone: true,
  imports: [RecomendadosComponent],
  templateUrl: './sqm-amintec.component.html',
  styleUrl: './sqm-amintec.component.css'
})
export class SqmAmintecComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }


  @ViewChild('ancla') ancla: ElementRef;

  ngAfterViewInit(): void {
    this.scrollAncla();
  }

  scrollAncla() {
    if (isPlatformBrowser(this.platformId)) {
      this.ancla.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}