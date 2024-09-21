import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { StockGraphComponent } from './stock-graph/stock-graph.component';
import { PlotlyModule } from 'angular-plotly.js';
import { StockTableComponent } from './stock-table/stock-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    StockCardComponent,
    StockGraphComponent,
    StockTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
