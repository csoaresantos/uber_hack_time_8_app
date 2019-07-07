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
  familiar: string;
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
            const nome = a.payload.doc.id;
            const endereco = a.payload.doc.id;
            const telefone = a.payload.doc.id;
            const foto = a.payload.doc.id;
            const familiar = a.payload.doc.id;
            return {
              id,
              nome,
              endereco,
              telefone,
              foto,
              familiar
            };
          }
        );
      })
    );

  }

  addIdea(idoso: Idoso): Promise<DocumentReference> {
    return this.idosoCollection.add(idoso);
  }

  updateIdea(idoso: Idoso): Promise<void> {
    return this.idosoCollection.doc(idoso.id).update({ name: idoso.nome, notes: idoso.endereco });
  }

  deleteIdea(id: string): Promise<void> {
    return this.idosoCollection.doc(id).delete();
  }
}
