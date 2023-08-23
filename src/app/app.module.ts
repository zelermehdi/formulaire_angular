import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutChatComponent } from './ajout-chat/ajout-chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCatComponent } from './add-cat/add-cat.component'; 


@NgModule({
  declarations: [
    AppComponent,
  
    AjoutChatComponent,
       AddCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
