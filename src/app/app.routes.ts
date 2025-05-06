import { Routes } from '@angular/router';
import { AutenticacaoComponent } from './pages/autenticacao/autenticacao.component';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'autenticacao', pathMatch: 'full'
    },
    {
        path: 'autenticacao', component: AutenticacaoComponent
    },
    {
        path: 'layout', component: LayoutComponent, children: [
        
        ]
    }
];
