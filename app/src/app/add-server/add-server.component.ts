import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from '../local-store.service'
import { ApiService } from '../api.service'
//import $ from "jquery";

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {
  serverName = ""
  serverUrl = ""
  alertMessageEmpty = "Name or URL Field is Empty !!"
  invalidServer = "";
  constructor(private localStore: LocalStoreService, private apiService: ApiService) {
  }

  ngOnInit() {

  }

  AddServers() {
    if (this.serverName == "" || this.serverUrl == "") {
      alert(this.alertMessageEmpty);
      return;
    }
    this.apiService.getJobs(this.serverUrl).subscribe(item => {
      if (item.length == 0) {
        this.invalidServer = "Invalid server"
      }
      else {
        this.invalidServer = "";
        this.localStore.AddServers(this.serverName, this.serverUrl);
        this.serverName = "";
        this.serverUrl = "";
        var abc = document.getElementById("serverModal");
        console.log(abc);
        window.location.reload();
      }
    });

    //this.localStore.AddServers(this.serverName, this.serverUrl);
    //this.serverName = "";
    //this.serverUrl = "";
    //window.location.reload();
  }
}
