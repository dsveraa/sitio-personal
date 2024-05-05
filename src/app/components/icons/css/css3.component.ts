import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-css3',
  standalone: true,
  imports: [],
  templateUrl: './css3.component.html',
  styleUrl: './css3.component.css'
})
export class CssComponent {
@Input() size: any;
}
