import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  myChart: Chart;
  @ViewChild('chartContainer') chartcontainer: ElementRef;
  @ViewChild('chartcanvas') chartcanvas: ElementRef;
  ngAfterViewInit() {

    this.createChart();

  }
  createChart() {   
    this.myChart = new Chart(this.chartcanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['2019/02/01', '2019/02/08', '2019/02/15', '2019/02/22', '2019/02/29', '2019/03/05'],
        datasets: [{
          label: 'Pesos en KG',
          data: [32, 35, 38, 42, 46, 50],
          borderWidth: 1,
          backgroundColor: ['#E78839'],
          pointBackgroundColor: ['#6E4217','#6E4217','#6E4217','#6E4217','#6E4217','#6E4217']
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
