import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from '../local-store.service'

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {
  serverName = ""
  serverUrl = ""
  alertMessageEmpty= "Name or URL Feild is Empty !!"
  alertSuccessFlush = "Server List is now empty !"
  constructor(private localStore: LocalStoreService) {
  }

  ngOnInit() {

  }

  AddServers() {
    if (this.serverName == "" || this.serverUrl==""){
      alert(this.alertMessageEmpty);
      return;
    }

    this.localStore.AddServers(this.serverName, this.serverUrl);

  }
  FlushServers(){
    this.localStore.FlushServers();
    alert(this.alertSuccessFlush)
  }
}
