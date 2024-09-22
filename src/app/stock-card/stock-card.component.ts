import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { io } from 'socket.io-client';

// Define the structure of a stock object
interface Stock {
  symbol: string;
  price: number;
  change: number;
  timestamp: string;
}

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {
  stocks: Stock[] = []; // Array of stocks
  @Output() stockSelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    // Establish WebSocket connection to your server
    const socket = io('https://stock-trade-be.onrender.com/'); // Replace with your actual WebSocket server URL

    // Listen for stockData events from the server
    socket.on('stockData', (data: Stock[]) => {
      this.stocks = data;
      this.stockSelected.emit(this.stocks);
    });
  }
  onSelectStock(stock: any): void {
    this.stockSelected.emit(stock); // Emit the selected stock
  }
}
