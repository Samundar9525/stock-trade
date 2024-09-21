import { Component } from '@angular/core';
import { io } from 'socket.io-client';
export interface Stock {
  symbol: string; // Add symbol if needed
  price: string;  // Keep as string for input
  change: number; // Include change property
  timestamp: string; // Keep as string for input
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock-trade';
  selectedStock: any;
  graphStockData:any = []; // Use the defined interface
  dummyStockData: Stock[] = [
    { symbol: 'AAPL', price: '145.30', change: 1.24, timestamp: '2024-09-20T10:00:00Z' },
    { symbol: 'GOOGL', price: '2725.60', change: -5.10, timestamp: '2024-09-20T10:01:00Z' },
    { symbol: 'AMZN', price: '3342.00', change: 8.40, timestamp: '2024-09-20T10:02:00Z' },
    { symbol: 'TSLA', price: '733.50', change: 3.80, timestamp: '2024-09-20T10:03:00Z' },
    { symbol: 'MSFT', price: '299.40', change: -2.20, timestamp: '2024-09-20T10:04:00Z' },
    { symbol: 'NFLX', price: '612.10', change: 1.50, timestamp: '2024-09-20T10:05:00Z' },
    { symbol: 'FB', price: '353.45', change: 0.95, timestamp: '2024-09-20T10:06:00Z' },
    { symbol: 'NVDA', price: '194.25', change: -0.75, timestamp: '2024-09-20T10:07:00Z' },
    { symbol: 'BABA', price: '174.85', change: 1.20, timestamp: '2024-09-20T10:08:00Z' },
    { symbol: 'TSM', price: '115.60', change: 2.30, timestamp: '2024-09-20T10:09:00Z' },
    { symbol: 'V', price: '250.75', change: -1.40, timestamp: '2024-09-20T10:10:00Z' },
    { symbol: 'JNJ', price: '162.25', change: 0.50, timestamp: '2024-09-20T10:11:00Z' },
    { symbol: 'WMT', price: '142.80', change: 1.00, timestamp: '2024-09-20T10:12:00Z' },
    { symbol: 'PG', price: '142.60', change: 0.20, timestamp: '2024-09-20T10:13:00Z' },
    { symbol: 'HD', price: '322.00', change: 2.10, timestamp: '2024-09-20T10:14:00Z' },
    { symbol: 'DIS', price: '182.50', change: -3.20, timestamp: '2024-09-20T10:15:00Z' },
    { symbol: 'NFLX', price: '620.00', change: 5.00, timestamp: '2024-09-20T10:16:00Z' },
    { symbol: 'PEP', price: '158.90', change: 0.90, timestamp: '2024-09-20T10:17:00Z' },
    { symbol: 'KO', price: '56.80', change: -0.10, timestamp: '2024-09-20T10:18:00Z' },
    { symbol: 'MRK', price: '85.30', change: 0.30, timestamp: '2024-09-20T10:19:00Z' },
    { symbol: 'VZ', price: '56.40', change: 0.70, timestamp: '2024-09-20T10:20:00Z' },
    { symbol: 'T', price: '28.50', change: -0.50, timestamp: '2024-09-20T10:21:00Z' },
    { symbol: 'CSCO', price: '54.80', change: 0.20, timestamp: '2024-09-20T10:22:00Z' },
    { symbol: 'INTC', price: '55.20', change: 0.10, timestamp: '2024-09-20T10:23:00Z' },
    { symbol: 'ADBE', price: '652.90', change: 3.60, timestamp: '2024-09-20T10:24:00Z' },
    { symbol: 'NFLX', price: '620.00', change: 5.00, timestamp: '2024-09-20T10:25:00Z' },
    { symbol: 'NKE', price: '144.00', change: 1.10, timestamp: '2024-09-20T10:26:00Z' },
  ];


  stockData:Stock[] = [
  ];

  // Column definitions
  columnsToDisplay = ['symbol', 'price', 'change', 'timestamp'];

  // Column labels (display names)
  columnLabels = {
    symbol: 'Stock (WatchList)',
    price: 'Price ($)',
    change: 'Change',
    timestamp: 'Last Updated'
  };

  columnLabel1 = {
    symbol: 'Stock Name',
    price: 'Price ($)',
    change: 'Change',
    timestamp: 'Last Updated'
  };

  onStockSelected(stock: any): void {
    this.selectedStock = stock;
  }


  ngOnInit(): void {
    this.setupWebSocket();
  }

  setupWebSocket(): void {
    const socket = io('http://localhost:3000');

    socket.on('stockData', (data: Stock[]) => {
      this.graphStockData = data;
      this.stockData = data
    });
  }

  }
