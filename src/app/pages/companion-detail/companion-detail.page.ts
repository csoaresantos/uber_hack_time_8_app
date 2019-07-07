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
    icon: 'https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png'
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
