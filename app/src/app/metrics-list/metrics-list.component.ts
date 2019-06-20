import { Component, OnInit } from '@angular/core';
import { Metrics } from '../metrics'
import { METRICES } from '../mock-metrics';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-metrics-list',
  templateUrl: './metrics-list.component.html',
  styleUrls: ['./metrics-list.component.css']
})
export class MetricsListComponent implements OnInit {

  metrices = METRICES;
  selectedMetrics: Metrics;
  jobs :any;
  metrics :any;

  constructor(private api: ApiService) { }

ngOnInit() {
 this.api.getJobs('demo.robustperception.io:9090').subscribe((data) => {
 this.jobs = data;
 });
 //var node;
 //this.api.getMetrics('demo.robustperception.io:9090', node).subscribe((data) => {
 //this.metrics = data;
 //});
 }
 onSelectJob(job): void {
   this.api.getMetrics('demo.robustperception.io:9090', job).subscribe((data) => {
   this.metrics = data;
   });
 }
  onSelect(metrics: Metrics): void {
  this.selectedMetrics = metrics;
}
}
