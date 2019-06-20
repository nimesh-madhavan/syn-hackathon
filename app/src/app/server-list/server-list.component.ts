import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
  servers = [
    {
      name: "server1",
      url: "demo.robustperception.io:9090"
    },
    {
      name: "server2",
      url: "testserver.com"
    }
  ];
  
  constructor() { }

  ngOnInit() {

  }

}
