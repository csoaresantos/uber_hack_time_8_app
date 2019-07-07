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
      _elderly: {
        name: 'Maria Conceição',
        age: '78',
        icon: 'https://cdn3.vectorstock.com/i/thumb-large/59/82/cute-grandmother-head-avatar-character-vector-14965982.jpg'
      },
      date: new Date('2019-07-10T17:30:00.000Z'),
      details: 'Mandar foto do laudo médico',
      address: 'Hospital Mater Dei',
      _companion: null,
      status: 'on',
    },
    {
      name: 'Exame de Sangue',
      _elderly: {
        name: 'Maria Conceição',
        age: '78',
        icon: 'https://cdn3.vectorstock.com/i/thumb-large/59/82/cute-grandmother-head-avatar-character-vector-14965982.jpg'
      },
      date: new Date('2019-07-11T10:30:00.000Z'),
      details: 'Mandar foto do laudo médico',
      address: 'Laboratório Hermes Pardini',
      _companion: {
        name: 'João Samaritano',
        icon: 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Bearded_Man-17-512.png'
      },
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
