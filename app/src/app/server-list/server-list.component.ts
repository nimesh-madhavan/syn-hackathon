import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from '../local-store.service'

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
  servers = [];
  noServerMsg = "";
  alertSuccessFlush = "Server List is now empty !"
  constructor(private localStore: LocalStoreService) { }

  ngOnInit() {
    this.localStore.GetServers().subscribe(item => this.servers = item);
    if (this.servers.length == 0) {
      this.noServerMsg = "No Server available !"
    }
    else {
      this.noServerMsg = "";
    }
  }

  FlushServers() {
    this.localStore.FlushServers();
    alert(this.alertSuccessFlush)
    window.location.reload();
  }
}
