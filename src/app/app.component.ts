import { Component } from '@angular/core';

import { Header } from './header/header';
import { ServerStatusComponent } from './server-status/server-status.component';
import { TrafficComponent } from './traffic/traffic.component';                                                             
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, ServerStatusComponent, TrafficComponent, TicketsComponent, DashboardItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
 
}
