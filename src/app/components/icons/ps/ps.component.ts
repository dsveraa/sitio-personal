import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ps',
  standalone: true,
  imports: [],
  templateUrl: './ps.component.html',
  styleUrl: './ps.component.css'
})
export class PsComponent {
  @Input() size!: number; 
}
