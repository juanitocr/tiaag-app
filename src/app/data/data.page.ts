import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {IonItemSliding} from '@ionic/angular';
import {Borregas} from '../interfaces/borregas'
import { BorregasService } from '../services/borregas.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {
searchQuery: string ='';
items: Borregas[];

  constructor(public bs: BorregasService) {
      bs.loadBorregasColle();
       console.log("Array",bs.borregacoll);
   }


getItems(ev: any){

const val = ev.target.value;
if(val && val.trim() !=''){
  this.bs.borregacoll =this.bs.borregacoll.filter((item)=>{
    return (item);
  })
}
}


  ngOnInit() {
  }

}
