import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { InvitacionComponent } from './components/invitacion/invitacion.component';
import { VideoHeaderComponent } from './components/video-header/video-header.component';
import { VideosComponent } from './components/videos/videos.component';
import { HomeComponent } from './components/home/home.component';
import { HomeService } from './services/home.service';
import { Subscription } from 'rxjs';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { BoxAnimationService } from './services/box-animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    VideoHeaderComponent,
    InvitacionComponent,
    VideosComponent,
    HomeComponent,
    FooterComponent,
    FormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy, OnInit {

  constructor(
    private _inHome: HomeService,
    private router: Router,
    private animationService: BoxAnimationService,
  ) {

    // se suscribe al evento de cambio de ruta
    this.routerSubscription = this.router.events.subscribe((event) => {

      // si el evento es de tipo NavigationEnd (si se terminó de cargar la ruta)
      if (event instanceof NavigationEnd) {

        const currentUrl = this.router.url;

        if (currentUrl === '/home') {
          this._inHome.aplicarEstadoHome(true)
        }
      }
    });
  }

  private routerSubscription: Subscription;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        // this.animationService.animateElement('box1');
        // this.animationService.animateElement('box2');
        this.animationService.animateElement('box3');
        this.animationService.animateElement('box4');
        this.animationService.animateElement('box5');
        this.animationService.animateElement('box6');
      });
      console.log(window.innerWidth);
    }
  }

  get home() {
    return this._inHome.estadoHome;
  }

  // limpia la suscripción al destruir el componente
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

}