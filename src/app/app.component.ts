import { Component, OnDestroy } from '@angular/core';
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
export class AppComponent implements OnDestroy {
  private routerSubscription: Subscription;

  constructor(private _inHome: HomeService, private router: Router) {

    // Suscripción al evento de cambio de ruta
    this.routerSubscription = this.router.events.subscribe((event) => {

      // Verifica si el evento es de tipo NavigationEnd (si se terminó de cargar la ruta)
      if (event instanceof NavigationEnd) {

        const currentUrl = this.router.url;

        if (currentUrl === '/home') {
          this._inHome.aplicarEstadoHome(true)
        }
      }
    });
  }

  get home() {
    return this._inHome.estadoHome;
  }

  // Método ngOnDestroy para limpiar la suscripción al destruir el componente
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}