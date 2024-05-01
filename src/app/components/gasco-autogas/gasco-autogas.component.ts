import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RecomendadosComponent } from '../recomendados/recomendados.component';

@Component({
  selector: 'app-gasco-autogas',
  standalone: true,
  imports: [RecomendadosComponent],
  templateUrl: './gasco-autogas.component.html',
  styleUrl: './gasco-autogas.component.css'
})
export class GascoAutogasComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
}

