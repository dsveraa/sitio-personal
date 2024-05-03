import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideosComponent } from './components/videos/videos.component';
import { WebComponent } from './components/web/web.component';
import { PrintComponent } from './components/print/print.component';
import { GascoAutogasComponent } from './components/video-pages/gasco-autogas/gasco-autogas.component';
import { VolkswagenLastChanceComponent } from './components/video-pages/volkswagen-last-chance/volkswagen-last-chance.component';
import { RecomendadosComponent } from './components/recomendados/recomendados.component';
import { ZiknesPrinterComponent } from './components/video-pages/ziknes-printer/ziknes-printer.component';
import { MetroMuralComponent } from './components/video-pages/metro-mural/metro-mural.component';
import { SqmAmintecComponent } from './components/video-pages/sqm-amintec/sqm-amintec.component';
import { TelefonicaRecomenzamosComponent } from './components/video-pages/telefonica-recomenzamos/telefonica-recomenzamos.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'web', component: WebComponent },
    { path: 'print', component: PrintComponent },
    { path: 'recomendados', component: RecomendadosComponent },
    { path: 'gasco-autogas', component: GascoAutogasComponent },
    { path: 'volkswagen-last-chance', component: VolkswagenLastChanceComponent },
    { path: 'ziknes-printer', component: ZiknesPrinterComponent},
    { path: 'metro-mural', component: MetroMuralComponent},
    { path: 'sqm-amintec', component: SqmAmintecComponent},
    { path: 'telefonica-recomenzamos', component: TelefonicaRecomenzamosComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
