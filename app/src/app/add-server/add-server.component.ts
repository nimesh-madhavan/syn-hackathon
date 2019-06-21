import { Component, OnInit } from '@angular/core';
import { LocalStoreService } from '../local-store.service'
import { ApiService } from '../api.service'
import * as $ from "jquery";
import "bootstrap";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {
  serverName = ""
  serverUrl = ""
  invalidServer = "";
  constructor(private localStore: LocalStoreService, private apiService: ApiService, private toastService : ToastrService) {
  }

  ngOnInit() {

  }

  AddServers() {
    if (this.serverName == "" || this.serverUrl == "") {
      this.invalidServer = "Server Name or Url empty. Both fields need to be specified!"
      return;
    }
    else {
      this.invalidServer = ""
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
        $("#serverModal").modal('hide');
        $(".modal-backdrop").css("display", "none");
        this.toastService.success('Server added.');
      }
    });
  }

  ClearForm () {
    this.serverName = "";
    this.serverUrl = "";
    this.invalidServer = "";
  }
}
