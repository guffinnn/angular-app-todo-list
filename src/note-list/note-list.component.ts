import { Component } from '@angular/core';
// Импортируем объект хранения ежедневных записей
import { NOTES } from '../notes';
import { NgFor} from "@angular/common";

// Создание компонента Note-list
@Component({
  selector: 'app-note-list',
  standalone: true,
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  imports: [NgFor],
})

export class NoteListComponent {
  notes = NOTES;
}
