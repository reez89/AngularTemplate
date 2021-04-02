import { Component } from '@angular/core';

@Component({
    selector: 'app-server', // una stringa, a piacimento, unica, senza la possibilità di poterla confondere.
    templateUrl: './server.component.html', // file html di riferimento del componente 
})
export class ServerComponent {
    serverId: number =  10;
    serverStatus: string = ' offline';

    getServerSatus(){
        return this.serverStatus;
    }
}