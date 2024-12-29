import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Observable } from 'rxjs';
import { Session } from '../../models/session';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-session-list',
  standalone: true,
  imports: [MatListModule, AsyncPipe],
  templateUrl: './session-list.component.html',
  styleUrl: './session-list.component.css'
})
export class SessionListComponent {
  sessions$: Observable<Session[]> | undefined;
}
