import { SpeedTestDetailsComponent } from "./speed-test-details/speed-test-details.component";
import { SpeedTestComponent } from "./speed-test/speed-test.component";
import { HistoryComponent } from "./history/history.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/speedTest", pathMatch: "full" },
  { path: "speedTest", component: SpeedTestComponent, pathMatch: "full" },
  { path: "history", component: HistoryComponent, pathMatch: "full" },
  { path: "history/:id", component: SpeedTestDetailsComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
