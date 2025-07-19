import { Routes } from '@angular/router';
import { AlquileresComponent } from './pages/alquileres/alquileres.component';
import { HeroComponent } from './components/hero/hero.component';

export const routes: Routes = [
    {
        path: '',
        component: HeroComponent
    },
    {
        path: 'alquileres',
        component: AlquileresComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
