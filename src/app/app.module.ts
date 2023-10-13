import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from "../header/header.component";
import {NoteListComponent} from "../note-list/note-list.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    NoteListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
