import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() conversation;
  conversations: any;
  name: any;
  constructor(public chat: ChatService) {
    this.conversations = this.chat.getChat().conversations;
    // this.name = this.chat.getName().name;
  }

  ngOnInit(): void {
  }

}
