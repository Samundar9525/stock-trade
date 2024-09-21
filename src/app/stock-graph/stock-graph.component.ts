import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
declare let Plotly: any;
@Component({
  selector: 'app-stock-graph',
  templateUrl: './stock-graph.component.html',
  styleUrls: ['./stock-graph.component.scss']
})
export class StockGraphComponent implements OnInit, OnChanges {

  @Input() stockData:any;
  @Input() graphsName:any =[]
  flag = true
  data:any =[];
  layout = {
    title: 'Stock Prices of ',
    xaxis: {
      title: 'Time',
      range: [new Date().toISOString(), new Date(Date.now() + 2 * 60 * 1000).toISOString()], // Current time to 1 hour ahead
      type: 'date' // Set the type to 'date' for time series data
    },
    yaxis: {
      range: [100,1000],
      title: 'Price ($)',
    }
  };
  ngOnInit(): void {
    this.initializeGraph();

  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    if(changes['graphsName']?.currentValue){
      this.layout.title += this.graphsName[0]
     setTimeout(() => {
      this.graphsName.map((res:any)=>{
        Plotly.newPlot(res, this.data, this.layout);
        this.flag=false
      })
     }, 100);
    }

    if(changes['stockData']?.currentValue && this.flag === false){
     let updates = changes['stockData'].currentValue;
     updates.map((res:any)=>{
      this.data.map((val:any)=>{
        if(res.symbol === val.name){
          val.x.push(res.timestamp);
          val.y.push(res.price)
        }
      })
     })
    }
    if(this.data.length>0 && this.graphsName.length>0){
      this.redrawPlot()
    }
  }

  initializeGraph(){
    this.graphsName.map((res:any)=>{
      let trace = {
        mode: 'lines',
        type: 'scatter',
        name: res,
        x: [],
        y: [],
        line: {
          color: this.getRandomColor(), // Set random color
        }
      }
      this.data.push(trace)
    })

  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  redrawPlot(){
    this.graphsName?.map((res:any)=>{
      console.log('mvjkhhj',res)
      Plotly.update(res, this.data, this.layout);
    })
  }

}
