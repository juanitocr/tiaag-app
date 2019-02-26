import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import {Chart} from 'chart.js'
import {MonitorService} from './../services/monitor.service';
import { Monitor } from './../interfaces/monitor';
import { Arrays } from '../interfaces/arrays';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
  myChart: Chart;
  @ViewChild('chartContainer') chartcontainer: ElementRef;
  @ViewChild('chartcanvas') chartcanvas: ElementRef;
  monitors: Observable<Monitor[]>;
  arrays: Observable<Arrays[]>;
  ngAfterViewInit() {
    this.createChart();

  }
  createChart() {   
    this.myChart = new Chart(this.chartcanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ["12-ene","12-ene","12-ene","12-ene","12-ene","12-ene"],
        datasets: [{
          label: 'Pesos en KG',
          data: [30,32,32,34,36,38],
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

  constructor(public navCtrl: NavController,public ms: MonitorService, public alertCtrl: AlertController) {
    this.ms.loadMonitor();
    this.ms.loadArrays();
    console.log(this.monitors);    
   }

  async doPrompt() {
    const prompt = await this.alertCtrl.create({
      header: "Comentar",
      inputs: [
        {
          name: 'title',
          placeholder: 'Observación'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    await prompt.present();
  }

  ngOnInit() {
        //console.log(this.todos);
  }
}
