import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from '../local-store.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
  servers = [];
  noServerMsg = "";
  alertSuccessFlush = "Server List is now empty !"
  constructor(private localStore: LocalStoreService, private toastr: ToastrService) { }

  ngOnInit() {
    this.localStore.GetServers().subscribe(item => {
      this.servers = item || [];
      if (this.servers.length == 0) {
        this.noServerMsg = "No Servers available! Please add a server to view metrices"
      }
      else {
        this.noServerMsg = "";
      }
    });
  }

  FlushServers() {
    this.localStore.FlushServers();
    this.toastr.success('Servers removed from list');
    this.noServerMsg = "No Servers available! Please add a server to view metrices"
  }
}
