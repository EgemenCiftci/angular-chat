import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SessionListComponent } from "./components/session-list/session-list.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, SessionListComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
}
