import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-audition',
  standalone: true,
  imports: [],
  templateUrl: './audition.component.html',
  styleUrl: './audition.component.css'
})
export class AuditionComponent {
@Input() size!: number;
}
