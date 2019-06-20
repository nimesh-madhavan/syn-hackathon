import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { debug } from 'util';

@Component({
  selector: 'app-metrics-list',
  templateUrl: './metrics-list.component.html',
  styleUrls: ['./metrics-list.component.css']
})
export class MetricsListComponent implements OnInit {

  constructor(private api: ApiService) { }

  jobs = [];
  metrics = [];

  ngOnInit() {
    this.api.getJobs('demo.robustperception.io:9090').subscribe((data) => {
      this.jobs = data;
    });

    this.api.getMetrics('demo.robustperception.io:9090', 'node').subscribe((data) => {
      this.metrics = data;
    });
  }
}
