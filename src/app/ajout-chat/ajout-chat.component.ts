import { Component } from '@angular/core';

@Component({
  selector: 'app-ajout-chat',
  templateUrl: './ajout-chat.component.html',
  styleUrls: ['./ajout-chat.component.css']
})
export class AjoutChatComponent {
  chat: { nom: string,  couleur: string } = { nom: '',  couleur: '' };


}
