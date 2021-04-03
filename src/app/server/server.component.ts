import { Component } from '@angular/core';

@Component({
  selector: 'app-server', // una stringa, a piacimento, unica, senza la possibilità di poterla confondere.
  templateUrl: './server.component.html', // file html di riferimento del componente
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = ' offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerSatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
