import { Component, ViewChild, ElementRef } from '@angular/core';
import { RecomendadosComponent } from '../../recomendados/recomendados.component';

@Component({
  selector: 'app-gasco-autogas',
  standalone: true,
  imports: [RecomendadosComponent],
  templateUrl: './gasco-autogas.component.html',
  styleUrl: './gasco-autogas.component.css'
})
export class GascoAutogasComponent {

  @ViewChild('ancla') ancla: ElementRef;

  ngAfterViewInit(): void {
      this.scrollAncla();
  }

  scrollAncla() {
      this.ancla.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
