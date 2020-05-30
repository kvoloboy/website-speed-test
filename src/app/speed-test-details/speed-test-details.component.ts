import { RequestBenchmarkEntry } from "./../../models/request-benchmark-entry";
import { WebsiteSpeedTestService } from "./../../services/website-speed-test.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-speed-test-details",
  templateUrl: "./speed-test-details.component.html",
  styleUrls: ["./speed-test-details.component.css"],
})
export class SpeedTestDetailsComponent implements OnInit {
  public entryId: number;
  public requestBenchmarkEntry: RequestBenchmarkEntry;

  constructor(
    private route: ActivatedRoute,
    private speedTestService: WebsiteSpeedTestService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.entryId = +paramMap.get("id");
      this.speedTestService
        .getSpeedTestDetails(this.entryId)
        .subscribe(
          (entry: RequestBenchmarkEntry) => {
            this.requestBenchmarkEntry = entry;
          } 
        );
    });
  }
}
