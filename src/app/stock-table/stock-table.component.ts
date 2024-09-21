import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss']
})
export class StockTableComponent {

  @Input() tableData: any[] = []; // Input for dynamic data
  @Input() displayedColumns: string[] = []; // Input for column keys
  @Input() columnLabels: { [key: string]: string } = {}; // Column header names (label mappings)

  onSelectRow(row: any) {
    console.log('Selected row:', row);
  }
}
