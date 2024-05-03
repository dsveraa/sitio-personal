import { Component, OnInit } from '@angular/core';
import { BoxAnimationService } from '../../services/box-animation.service';

@Component({
  selector: 'app-print',
  standalone: true,
  imports: [],
  templateUrl: './print.component.html',
  styleUrl: './print.component.css'
})
export class PrintComponent implements OnInit {

  constructor(private animationService: BoxAnimationService) { }

  ngOnInit(): void {
    this.animarEntrada();
  }
  animarEntrada() {
    this.animationService.animateElementInit('boxWeb');
  }
}
