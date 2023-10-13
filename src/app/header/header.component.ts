import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Команда для создания нового компонента Header
// ng generate component Header --standalone --inline-template
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // Объявление переменной
  names = ['Jack', 'Bob', 'Fedor', 'James'];
}
