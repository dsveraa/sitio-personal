import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ae',
  standalone: true,
  imports: [],
  templateUrl: './ae.component.html',
  styleUrl: './ae.component.css'
})
export class AeComponent {
  @Input() size!: number; 

}
