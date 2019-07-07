import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-event',
  templateUrl: './send-event.page.html',
  styleUrls: ['./send-event.page.scss'],
})
export class SendEventPage implements OnInit {

  event = {
    name: 'Consulta no Oculista',
    _elderly: {
      name: 'Maria Conceição'
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
