import { Component, computed, effect } from '@angular/core';
import { AboutService } from '../../services/about.service'; // AHORA se importa AboutService
import { HeaderData, HeaderService } from '../../services/header.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
nombre() {
throw new Error('Method not implemented.');
}
edad() {
throw new Error('Method not implemented.');
}
  private iuData: HeaderData = {
    title: 'Este soy yo!',
    subtitle: 'Futuro Desarrollador Web',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/base-pbc.firebasestorage.app/o/web-developer-definition-skills-and-responsibilities-908401.png?alt=media&token=1bb2840c-cfdb-4685-a231-fba09c42c88f'
  };

  nombreCompleto = computed(() => this.aboutService.nombre());
  edadUsuario = computed(() => this.aboutService.edad());

  constructor(
    private headerService: HeaderService,
    private aboutService: AboutService
  ) {
    headerService.uiData.set(this.iuData);
    this.aboutService.fetchUserData();

    effect(() => {
      console.log('Datos de usuario:', this.nombreCompleto(), this.edadUsuario());
    });
  }
}
