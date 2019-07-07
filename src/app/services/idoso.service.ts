import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Idoso {
  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  foto: string;
  _familiar: any;
}

@Injectable({
  providedIn: 'root'
})
export class IdosoService {
  private idosos: Observable<Idoso[]>;
  private idosoCollection: AngularFirestoreCollection<Idoso>;

  constructor(private afs: AngularFirestore) {
    this.idosoCollection = this.afs.collection<Idoso>('idosos');
    this.idosos = this.idosoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(
          a => {
            const id = a.payload.doc.id;
            const data = a.payload.doc.data();
            return { id, ...data };
          }
        );
      })
    );

  }

  getIdosos(): Observable<Idoso[]> {
    return this.idosos;
  }

  getIdoso(id: string): Observable<Idoso> {
    return this.idosoCollection.doc<Idoso>(id).valueChanges().pipe(
      take(1),
      map(idoso => {
        idoso.id = id;
        return idoso;
      })
    );
  }

  addIdoso(idoso: Idoso): Promise<DocumentReference> {
    return this.idosoCollection.add(idoso);
  }

  updateIdoso(idoso: Idoso): Promise<void> {
    return this.idosoCollection.doc(idoso.id).update({ nome: idoso.nome,
                                                       endereco: idoso.endereco,
                                                       telefone: idoso.telefone,
                                                       foto: idoso.foto,
                                                       familiar: idoso._familiar });
  }

  deleteIdoso(id: string): Promise<void> {
    return this.idosoCollection.doc(id).delete();
  }
}
