import { RequestBenchmarkEntry } from './../../models/request-benchmark-entry';
import { WebsiteSpeedTestService } from './../../services/website-speed-test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public benchmarkEntries: RequestBenchmarkEntry[];
  
  constructor(
    private speedTestService: WebsiteSpeedTestService
  ) { }

  ngOnInit() {
   this.speedTestService.getHishtory()
   .subscribe((entries: RequestBenchmarkEntry[]) => this.benchmarkEntries = entries); 
  }
}
