import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
serverId: number = 19;
serverStatus: string = 'offline';
allowNewServer: any;


getServerStatus() {
  return this.serverStatus;
} 


constructor() {
  
}

 

  ngOnInit(): void {
    
  }

}
