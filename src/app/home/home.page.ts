import { Component, OnInit,ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myChart1: Chart;
  myChart2: Chart;

@ViewChild('chartContainer') chartcontainer: ElementRef;
@ViewChild('chartContainer1') chartcontainer1: ElementRef;
@ViewChild('chartcanvas') chartcanvas: ElementRef;
@ViewChild('chartcanvas1') chartcanvas1: ElementRef;


ngAfterViewInit() {

  this.createChart();

}
createChart() {   
  this.myChart2 = new Chart(this.chartcanvas1.nativeElement, {
    type: 'doughnut',
    data: {
      labels: ['Machos', 'Hembras', 'Coorderos'],
      datasets: [{
        label: 'Sexos',
        data: [32, 35, 38],
        backgroundColor:[
          '#6E4217','#C87BBA','#888889'
        ],
        borderWidth: 1
      }]
    },
    options: {
     
    }
  });

  this.myChart1 = new Chart(this.chartcanvas.nativeElement, {
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
}

