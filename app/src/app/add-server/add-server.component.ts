import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from '../local-store.service'

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {
  serverName="Enter Server Name"
  serverUrl="Enter Server url"
  constructor(private localStore : LocalStoreService) {
  }

  ngOnInit() {

  }

  AddServers() {
      this.localStore.AddServers(this.serverName,this.serverUrl);
  }
}
