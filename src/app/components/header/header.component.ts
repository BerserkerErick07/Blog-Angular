import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public headerService: HeaderService) {
    // This is the constructor for the HeaderComponent class.
    // It is currently empty, but you can add any initialization logic here if needed.
  }

}
