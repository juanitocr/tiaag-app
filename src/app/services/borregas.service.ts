import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Borregas } from '../interfaces/borregas';
import { Crias } from '../interfaces/crias';

@Injectable({
  providedIn: 'root'
})
export class BorregasService {
  private itemsCollections: AngularFirestoreDocument<Borregas>;
  private arrayCollections: AngularFirestoreCollection<Borregas>;
  public borrega: Borregas;
  public cria: Crias[] = [];
  public borregacoll: Borregas[] = [];
  constructor(private afs: AngularFirestore) { }
  loadBorregas() {
    this.itemsCollections = this.afs.doc<Borregas>('borregas/1');
    return this.itemsCollections.valueChanges()
      .subscribe(
        (bo: Borregas) => {
          this.borrega = bo;
          this.cria = bo.crias;
        });
  }



  loadBorregasColle() {
    this.arrayCollections = this.afs.collection<Borregas>('borregas', ref => ref.where('ganadero','==','1'));
    return this.arrayCollections.valueChanges()
      .subscribe(
        (bor: Borregas[]) => {
          this.borregacoll = bor;
          console.log("array sub",bor);
        });
  }

}
