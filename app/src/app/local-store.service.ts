import { Injectable } from '@angular/core';
import { ServerListComponent } from './server-list/server-list.component';
import { JsonPipe } from '@angular/common';

const serversKey ='servers';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {
  constructor() { 
    if(!localStorage.getItem(serversKey)){
    var servers = [
      {
        name: "server1",
        url: "demo.robustperception.io:9090"
      },
      {
        name: "server2",
        url: "testserver.com"
      }
    ];
  
      localStorage.setItem(serversKey, JSON.stringify( servers));
    }
  }

  GetServers() {
    return JSON.parse( localStorage.getItem(serversKey));
  }
}
