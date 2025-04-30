import { Routes } from '@angular/router';
import { AutenticacaoComponent } from './pages/autenticacao/autenticacao.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'autenticacao', pathMatch: 'full'
    },
    {
        path: 'autenticacao', component: AutenticacaoComponent
    }
];
