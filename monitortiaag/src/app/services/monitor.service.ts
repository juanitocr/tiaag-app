import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Monitor } from './../interfaces/monitor';
import { Registro } from './../interfaces/registro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private monitorCollection: AngularFirestoreDocument<Monitor>;
  private arraysCollection: AngularFirestoreCollection<Registro>;
  private listRegistros: AngularFirestoreCollection<Registro>;
  public fechas: number[] = [];
  public pesos: number[] = [];
  public monitor: Monitor;
  public arrays: Registro[] = [];
  public list5: Registro[] = [];
  constructor(private afs: AngularFirestore) {
  }

  async loadArrays() {
    this.monitorCollection = await this.afs.doc<Monitor>('monitores/1');
    await this.monitorCollection.valueChanges().subscribe(
      (m: Monitor) => {
        this.monitor = m;
        this.arraysCollection = this.afs.collection<Registro>('registro', ref => ref.where('rfid', '==', m.rfid).limit(1));
        this.arraysCollection.valueChanges()
          .subscribe(
            (arr: Registro[]) => {
              this.fechas = [];
              this.pesos = [];
              for (const iterator of arr) {
                this.fechas.push(iterator.fecha);
                this.pesos.push(iterator.peso);
              }
              this.arrays = arr;
                //Consulta a los datos de la tabla
              this.listRegistros = this.afs.collection<Registro>('registro', ref => ref.where('ganadero', '==', '1').limit(5));
              this.arraysCollection.valueChanges()
                .subscribe(
                  (arr: Registro[]) => {                      
                    this.list5 = arr;
              });
            }
          );
      });
    }
    
  }