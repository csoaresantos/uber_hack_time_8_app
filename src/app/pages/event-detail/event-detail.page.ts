import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {

  event = {
    name: 'Consulta no Oculista',
    _elderly: {
      name: 'John Doe'
    },
    date: new Date('2019-07-10T09:30:00.000Z'),
    details: 'Mandar foto do laudo médico',
    address: 'Hospital Mater Dei',
    _companion: {},
    status: 'on',
  };

  constructor() { }

  ngOnInit() {
  }

}
