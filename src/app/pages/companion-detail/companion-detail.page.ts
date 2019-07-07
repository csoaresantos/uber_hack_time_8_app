import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-companion-detail',
  templateUrl: './companion-detail.page.html',
  styleUrls: ['./companion-detail.page.scss'],
})
export class CompanionDetailPage implements OnInit {

  companion = {
    name: 'João Samaritano',
    phone: '(31) 99999-9999',
    address: 'Rua dos Domingos, 135 - Belo Horizonte, MG',
    starts: 4,
  };

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.navCtrl.navigateRoot('/login');
  }

}
