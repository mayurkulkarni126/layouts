import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgChartsModule } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';

@NgModule({
  imports: [
    CommonModule,
    ChartsRoutingModule,
    MatCardModule,
    MatGridListModule,
    NgChartsModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [DataService]
})
export class ChartsModule {}
