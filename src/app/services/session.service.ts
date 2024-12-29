import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../models/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  sessions$?: Observable<Session[]>;
  
  constructor() { 

  }

  addSession() {

  }

  removeSession(sessionId: number) {

  }

  addUser(sessionId: number, userName: string) {

  }

  removeUser(sessionId: number) {
    
  }

  addMessage(sessionId: number, messageContent: string) {

  }

  removeMessage(sessionId: number) {

  }
}
