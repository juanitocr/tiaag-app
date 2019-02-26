import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Todo {
  id?: string;
  peso: string;
  arete:string;
  rfid: string;
}
@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private todosCollection: AngularFirestoreCollection<Todo>;
 
  private todos: Observable<Todo[]>;
  constructor(private db: AngularFirestore) {

  this.todosCollection = db.collection<Todo>('Monitor');
  this.todos = this.todosCollection.snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })
   );
  }
  
  getTodos() {
    return this.todos;
  }
 
}
