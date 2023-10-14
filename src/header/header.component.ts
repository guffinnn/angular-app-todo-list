import { Component } from '@angular/core';
// Импорт директивы NgFor для let ... of ...
// Импорт директивы NgIf для if() { ... }
import { NgFor, NgIf } from '@angular/common';

// Команда для создания нового компонента Header
// ng generate component Header --standalone --inline-template
@Component({
  selector: 'app-header',
  standalone: true,
  /*templateUrl: './header.component.html',*/
  template: '<h1>{{ title }}</h1>',
  styleUrls: ['./header.component.css'],
  imports: [NgFor],
})
export class HeaderComponent {
  // Объявление переменной
  title = 'My Notes';
  nameOfUser = 'User';
  isRed = false;

  // Объявление массива
  products = ['apple', 'banana', 'pineapple'];

  // Объявление метода
  readUserName() {
    alert("Your name is ???");
  }

  changeColor() {
    this.isRed = !this.isRed;
  }
}
