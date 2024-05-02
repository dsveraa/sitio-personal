import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { RecomendadosComponent } from '../../recomendados/recomendados.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-ziknes-printer',
  standalone: true,
  imports: [RecomendadosComponent],
  templateUrl: './ziknes-printer.component.html',
  styleUrl: './ziknes-printer.component.css'
})
export class ZiknesPrinterComponent {

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

