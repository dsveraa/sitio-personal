import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-cinema4d',
  standalone: true,
  imports: [],
  templateUrl: './cinema4d.component.html',
  styleUrl: './cinema4d.component.css'
})
export class Cinema4dComponent {

  @Input() size?: number;

}
