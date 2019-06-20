import { Injectable } from '@angular/core';
import { ServerListComponent } from './server-list/server-list.component';
import { JsonPipe } from '@angular/common';
import { Observable, of } from 'rxjs';

const serversKey = 'servers';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {
  servers = []
  constructor() {}

  GetServers() : Observable<any[]> {
    this.servers = JSON.parse(localStorage.getItem(serversKey));
    return of(this.servers);
  }

  AddServers(sname: string, surl: string) {
    this.servers.push({ name: sname, url: surl });
    localStorage.setItem(serversKey, JSON.stringify(this.servers));
  }
}