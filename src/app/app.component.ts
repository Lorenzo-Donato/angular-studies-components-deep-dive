import { Component } from '@angular/core';

import { Header } from './header/header';
import { ServerStatusComponent } from './server-status/server-status.component';
import { TrafficComponent } from './traffic/traffic.component';                                                             
import { TicketsComponent } from './tickets/tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, ServerStatusComponent, TrafficComponent, TicketsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
 
}
