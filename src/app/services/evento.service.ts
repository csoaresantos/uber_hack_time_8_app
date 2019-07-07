import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Evento {
  id: string;
  nome: string;
  _idoso: string;
  data: string;
  detalhes: string;
  endereco: string;
  telefone: string;
  _acompanhante: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private eventos: Observable<Evento[]>;
  private eventoCollection: AngularFirestoreCollection<Evento>;

  constructor(private afs: AngularFirestore) {
    this.eventoCollection = this.afs.collection<Evento>('evento');
    this.eventos = this.eventoCollection.snapshotChanges().pipe(
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

  addEvento(evento: Evento): Promise<DocumentReference> {
    return this.eventoCollection.add(evento);
  }

  updateEvento(evento: Evento): Promise<void> {
    return this.eventoCollection.doc(evento.id).update({ nome: evento.nome,
                                                          _idoso: evento._idoso,
                                                          data: evento.data,
                                                          detalhes: evento.detalhes,
                                                          endereco: evento.endereco,
                                                          telefone: evento.telefone,
                                                          _acompanhante: evento._acompanhante,
                                                          status: evento.status});
  }

  deleteEvento(id: string): Promise<void> {
    return this.eventoCollection.doc(id).delete();
  }
}
