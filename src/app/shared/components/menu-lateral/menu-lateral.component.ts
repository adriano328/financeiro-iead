import { Component } from '@angular/core';
import { Icones } from '../../interface/icones';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss'
})
export class MenuLateralComponent {

  icones: Icones[] = [
    { "nome": "Membros", "icone": "group" },
    { "nome": "Certificados", "icone": "verified" },
    { "nome": "Relatórios", "icone": "description" },
    { "nome": "Solicitações", "icone": "content_paste" },
    { "nome": "Processos", "icone": "folder" },
    { "nome": "Administração", "icone": "settings" },
    { "nome": "Eventos", "icone": "event" },
    { "nome": "Sair", "icone": "logout" }
  ]
}
