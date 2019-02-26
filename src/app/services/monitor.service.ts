import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Monitor } from './../interfaces/monitor';
import { Arrays } from './../interfaces/arrays';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private itemsCollection: AngularFirestoreCollection<Monitor>;
  private arraysCollection: AngularFirestoreCollection<Arrays>;
  public monitors : Monitor[] = [];
  public arrays : Arrays[] = [];
  constructor(private afs: AngularFirestore) {  
   }
   loadMonitor(){
   
    this.itemsCollection = this.afs.collection<Monitor>('monitores');  
    return this.itemsCollection.valueChanges()
    .subscribe(
      (mo:Monitor[]) =>{
        this.monitors = mo;
    });

   }
   loadArrays(){   
    this.arraysCollection = this.afs.collection<Arrays>('registro/1/45:a9:0c:47');  
    return this.arraysCollection.valueChanges()
    .subscribe(
      (arr:Arrays[]) =>{
        this.arrays = arr;
    });

   }
   
}