import { Component, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { RecomendadosComponent } from '../../recomendados/recomendados.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-gasco-autogas',
  standalone: true,
  imports: [RecomendadosComponent],
  templateUrl: './gasco-autogas.component.html',
  styleUrl: './gasco-autogas.component.css'
})
export class GascoAutogasComponent {

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
