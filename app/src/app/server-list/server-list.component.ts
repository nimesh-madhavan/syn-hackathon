import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from '../local-store.service'

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
  servers = [];

  constructor(private localStore : LocalStoreService) { }

  ngOnInit() {
    this.localStore.GetServers().subscribe(item => this.servers= item);
  }

}
