import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {IonItemSliding} from '@ionic/angular';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {
searchQuery: string ='';
items: string[];

  constructor() {
    this.initializeItems();
   }
initializeItems(){
  this.items = [
'Coorderos',
'Hembras',
'Machos'
  ];
}

getItems(ev: any){
this.initializeItems();
const val = ev.target.value;
if(val && val.trim() !=''){
  this.items =this.items.filter((item)=>{
    return (item.toLowerCase().indexOf(val.toLowerCase()) >- 1);
  })
}
}


  ngOnInit() {
  }

}
