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
  messages: any;
  name: any;
  me: any;
  message = '';
  constructor(public chat: ChatService) {
    this.conversations = this.chat.getChat().conversations;
    
    this.name = this.chat.getName().name;
  }

  ngOnInit(): void { }

  submitMessage(event){
  let value= event.target.value;
  event.target.value ='';

  this.conversations.messages.unshift({
    id: 1,
    body: value,
    time: '10:20',
    me:true,
    
  })

  }
  






}
