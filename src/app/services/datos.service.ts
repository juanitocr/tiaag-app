import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private angularFireDatabase: AngularFireDatabase) {
  }

    getInfoSheepMonitor(id){
    return this.angularFireDatabase.object('/Monitor');
   }

   
}
