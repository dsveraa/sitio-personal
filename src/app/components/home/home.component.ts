import { Component } from '@angular/core';
import { VideoHeaderComponent } from '../video-header/video-header.component';
import { InvitacionComponent } from '../invitacion/invitacion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VideoHeaderComponent, InvitacionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
