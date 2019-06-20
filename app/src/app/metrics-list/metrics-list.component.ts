import { Component, OnInit, Input } from '@angular/core';
import { Metrics } from '../metrics';
import { ApiService } from '../api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-metrics-list',
  templateUrl: './metrics-list.component.html',
  styleUrls: ['./metrics-list.component.css']
})
export class MetricsListComponent implements OnInit {
  server: string;
  selectedMetrics: Metrics;
  jobs: any;
  metrics: any;

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.server = params.server;
    });
  }

  ngOnInit() {
    this.api.getJobs(this.server).subscribe((data) => {
      this.jobs = data;
    });
  }
  onSelectJob(job): void {
    this.api.getMetrics(this.server, job).subscribe((data) => {
      this.metrics = data;
    });
  }
  onSelect(metrics: Metrics): void {
    this.selectedMetrics = metrics;
  }
}
