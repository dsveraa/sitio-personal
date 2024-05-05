import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-html5',
  standalone: true,
  imports: [],
  templateUrl: './html5.component.html',
  styleUrl: './html5.component.css'
})
export class Html5Component {
@Input() size?: any;
}
