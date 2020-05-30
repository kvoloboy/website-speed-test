import { WebsiteSpeedTestService } from './../../services/website-speed-test.service';
import { RequestBenchmarkEntry } from './../../models/request-benchmark-entry';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-speed-test',
  templateUrl: './speed-test.component.html',
  styleUrls: ['./speed-test.component.css']
})
export class SpeedTestComponent {
  
  requestBenchmarkEntry: RequestBenchmarkEntry;
  processingStarted: boolean = false;

  constructor(
    private speedTestService: WebsiteSpeedTestService
  ) { }

    public websiteTestForm = new FormGroup({
      uri: new FormControl(undefined, Validators.pattern('^https?:\/\/.*'))
    });

  onFormSubmit(){
    this.requestBenchmarkEntry = null;
    
    const uri:string = this.websiteTestForm.get("uri").value;
    this.processingStarted = true;
    this.speedTestService.evaluatePerformance(uri)
    .subscribe((entry: RequestBenchmarkEntry) => this.requestBenchmarkEntry = entry);
  }
}
