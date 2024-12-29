import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../models/message';
import { SessionService } from '../../services/session.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  sessionId?: number;
  messages$?: Observable<Message[]>;
  newMessage: string = '';
  currentUser: string = 'User';

  constructor(private sessionService: SessionService) {
  }

  sendMessage() {
    if (this.sessionId) {
      this.sessionService.addMessage(this.sessionId, this.newMessage.trim());
      this.newMessage = '';
    }
  }
}
