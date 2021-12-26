import { Component } from '@angular/core';
import { ChatService } from './chat.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  conversation ;


  onConversationSelected(conversation): void{
    this.conversation = conversation;
  }

  constructor(private chat: ChatService){
    // console.warn( this.chat.getChat())
  }
}

