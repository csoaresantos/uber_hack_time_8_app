import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Familiar {
  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  email: string;
  foto: string;
  cpf: string;
}

@Injectable({
  providedIn: 'root'
})
export class FamiliarService {
  private familiares: Observable<Familiar[]>;
  private familiarCollection: AngularFirestoreCollection<Familiar>;

  constructor(private afs: AngularFirestore) {
    this.familiarCollection = this.afs.collection<Familiar>('familiar');
    this.familiares = this.familiarCollection.snapshotChanges().pipe(
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

  getFamiliares(): Observable<Familiar[]> {
    return this.familiares;
  }

  getFamiliar(id: string): Observable<Familiar> {
    return this.familiarCollection.doc<Familiar>(id).valueChanges().pipe(
      take(1),
      map(familiar => {
        familiar.id = id;
        return familiar;
      })
    );
  }

  addFamiliar(familiar: Familiar): Promise<DocumentReference> {
    return this.familiarCollection.add(familiar);
  }


  updateFamiliar(familiar: Familiar): Promise<void> {
  return this.familiarCollection.doc(familiar.id).update({ name: familiar.nome,
                                                            telefone: familiar.telefone,
                                                            email: familiar.email,
                                                            foto: familiar.foto,
                                                            cpf: familiar.cpf});
  }

  deleteFamiliar(id: string): Promise<void> {
    return this.familiarCollection.doc(id).delete();
  }
}
