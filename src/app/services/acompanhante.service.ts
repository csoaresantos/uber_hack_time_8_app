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
        return actions.map(
          a => {
            const id = a.payload.doc.id;
            const nome = a.payload.doc.id;
            const endereco = a.payload.doc.id;
            const telefone = a.payload.doc.id;
            const email = a.payload.doc.id;
            const nota = a.payload.doc.id;
            const cpf = a.payload.doc.id;
            const foto = a.payload.doc.id;

            return {
              id,
              nome,
              endereco,
              telefone,
              email,
              nota,
              cpf,
              foto
            }
          }
        );
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
