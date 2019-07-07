import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Acompanhante {
  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  email: string;
  nota: string;
  cpf: string;
  foto: string;
}

@Injectable({
  providedIn: 'root'
})
export class AcompanhanteService {
  private acompanhantes: Observable<Acompanhante[]>;
  private acompanhanteCollection: AngularFirestoreCollection<Acompanhante>;

  constructor(private afs: AngularFirestore) {
    this.acompanhanteCollection = this.afs.collection<Acompanhante>('acompanhantes');
    this.acompanhantes = this.acompanhanteCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          console.log("data", data);

          return { id, ...data };
        });
      })
    );
  }

  getAcompanhantes(): Observable<Acompanhante[]> {
    return this.acompanhantes;
  }

  getAcompanhante(id: string): Observable<Acompanhante> {
    return this.acompanhanteCollection.doc<Acompanhante>(id).valueChanges().pipe(
      take(1),
      map(idea => {
        idea.id = id;
        return idea
      })
    );
  }

  addIdea(acompanhante: Acompanhante): Promise<DocumentReference> {
    return this.acompanhanteCollection.add(acompanhante);
  }

  updateIdea(acompanhante: Acompanhante): Promise<void> {
    return this.acompanhanteCollection.doc(acompanhante.id).update(
      {
        id: acompanhante.endereco,
        nome: acompanhante.endereco,
        endereco: acompanhante.endereco,
        telefone: acompanhante.endereco,
        email: acompanhante.endereco,
        nota: acompanhante.endereco,
        cpf: acompanhante.endereco,
        foto: acompanhante.endereco
      });
  }

  deleteIdea(id: string): Promise<void> {
    return this.acompanhanteCollection.doc(id).delete();
  }
}
