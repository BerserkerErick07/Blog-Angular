import { Component } from '@angular/core';
import { HeaderData, HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private iuData: HeaderData = {
      title: 'Contáctame!',
      subtitle: 'Futuro Desarrollador Web Angulaar',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/base-pbc.firebasestorage.app/o/web-developer-definition-skills-and-responsibilities-908401.png?alt=media&token=1bb2840c-cfdb-4685-a231-fba09c42c88f'
    };

  constructor(private headerService: HeaderService) {
    headerService.uiData.set(this.iuData);
  }

}
