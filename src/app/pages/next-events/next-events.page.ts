import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-events',
  templateUrl: './next-events.page.html',
  styleUrls: ['./next-events.page.scss'],
})
export class NextEventsPage implements OnInit {

  events = [
    {
      name: 'Consulta no Oculista',
      _elderly: {
        name: 'John Doe'
      },
      date: new Date('2019-07-10T09:30:00.000Z'),
      details: 'Mandar foto do laudo médico',
      address: 'Hospital Mater Dei',
      _companion: {},
      status: 'on',
    },
    {
      name: 'Consulta no Otorrino',
      _elderly: {
        name: 'Joanne Doe'
      },
      date: new Date('2019-07-11T09:30:00.000Z'),
      details: 'Mandar foto do laudo médico',
      address: 'Hospital Aliança',
      _companion: {},
      status: 'on',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
