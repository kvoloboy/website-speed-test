import { RequestBenchmarkEntry } from "./../../models/request-benchmark-entry";
import { Component, OnInit, Input } from "@angular/core";
import * as CanvasJS from "../../assets/lib/canvasjs.min";

@Component({
  selector: "app-display-speed-test",
  templateUrl: "./display-speed-test.component.html",
  styleUrls: ["./display-speed-test.component.css"],
})
export class DisplaySpeedTestComponent implements OnInit {
  @Input()
  public requestBenchmarkEntry: RequestBenchmarkEntry;

  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Website performance test results",
      },
      data: [
        {
          type: "column",
          dataPoints: this.getDataPoints(),
        },
      ],
    });

    chart.render();
  }

  private getDataPoints(){
    const dataPoints = [];

    this.requestBenchmarkEntry.endpoints.forEach(endpoint => {
      const dataPoint = {
        y: endpoint.responseTime,
        label: endpoint.uri
      }

      dataPoints.push(dataPoint);
    })

    return dataPoints;
  }
}
