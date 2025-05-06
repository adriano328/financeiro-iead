import { Component } from '@angular/core';
import { MenuLateralComponent } from '../components/menu-lateral/menu-lateral.component';
import { CabecalhoComponent } from '../components/cabecalho/cabecalho.component';
import { RodapeComponent } from '../components/rodape/rodape.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MenuLateralComponent, CabecalhoComponent, RodapeComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
