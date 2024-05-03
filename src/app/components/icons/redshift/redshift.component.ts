import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-redshift',
  standalone: true,
  imports: [],
  templateUrl: './redshift.component.html',
  styleUrl: './redshift.component.css'
})
export class RedshiftComponent {

  @Input() size?: number;

}
