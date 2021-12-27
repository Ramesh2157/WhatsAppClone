import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from '../chat.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() conversationsClicked: EventEmitter<any> = new EventEmitter();
  conversations: any;
  name: any;
  constructor(public chat: ChatService) {
    this.conversations = this.chat.getChat().conversations;
  }

  chatClick(name: any) {
    this.chat.getName().name = name;
    console.log(this.chat.getName().name)
  }

  ngOnInit(): void {

  }

}
