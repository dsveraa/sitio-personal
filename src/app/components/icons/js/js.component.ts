import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-js',
  standalone: true,
  imports: [],
  templateUrl: './js.component.html',
  styleUrl: './js.component.css'
})
export class JsComponent {
@Input() size:any;
}
