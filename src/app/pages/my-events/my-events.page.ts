import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.page.html',
  styleUrls: ['./my-events.page.scss'],
})
export class MyEventsPage implements OnInit {

  events = [
    {
      name: 'Consulta Médica',
      _elderly: {},
      date: new Date('2019-07-10T09:30:00.000Z'),
      details: 'Mandar foto do laudo médico',
      address: 'Hospital Mater Dei',
      _companion: {},
      status: 'on',
    },
    {
      name: 'Consulta Médica',
      _elderly: {},
      date: new Date('2019-07-11T09:30:00.000Z'),
      details: 'Mandar foto do laudo médico',
      address: 'Hospital Aliança',
      _companion: {},
      status: 'on',
    }
  ];

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  showEventDetail() {
    this.navCtrl.navigateRoot('/event-detail/abc');
  }

}
