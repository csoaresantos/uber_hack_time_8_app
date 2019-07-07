import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-relative-detail',
  templateUrl: './relative-detail.page.html',
  styleUrls: ['./relative-detail.page.scss'],
})
export class RelativeDetailPage implements OnInit {

  relative = {
    name: 'Luiza Antunes',
    phone: '(31) 99999-9999',
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
