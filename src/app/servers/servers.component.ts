import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus ='No server was created'
  serverName = '' ;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus ='Server was created!' + "Name is " + this.serverName;
    this.serverName = '';
  }

  onupdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value; // HTMLInputElement serve a far capire che tipo di evento si sta passando.
    
  }
}
