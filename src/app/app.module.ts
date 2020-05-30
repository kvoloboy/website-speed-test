import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { SpeedTestDetailsComponent } from './speed-test-details/speed-test-details.component';
import { SpeedTestComponent } from './speed-test/speed-test.component';
import { DisplaySpeedTestComponent } from './display-speed-test/display-speed-test.component';

@NgModule({
   declarations: [
      AppComponent,
      HistoryComponent,
      SpeedTestComponent,
      SpeedTestDetailsComponent,
      SpeedTestComponent,
      DisplaySpeedTestComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
