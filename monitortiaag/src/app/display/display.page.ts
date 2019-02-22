import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Chart} from 'chart.js'
import {MonitorService} from './../services/monitor.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
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
        labels: ["iuye","dkjdh","skjhs"],
        datasets: [{
          label: 'Pesos en KG',
          data: this.ms.pesos,
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

  constructor(public navCtrl: NavController,public ms: MonitorService) {
    this.ms.loadArrays();        
    console.log("Arrays",ms.monitor);
    console.log("Arrays",ms.arrays);
    console.log("Arrays",ms.list5);
   }  
   ngOnInit() {  
  }
}