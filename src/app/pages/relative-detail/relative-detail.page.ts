import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-relative-detail',
  templateUrl: './relative-detail.page.html',
  styleUrls: ['./relative-detail.page.scss'],
})
export class RelativeDetailPage implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.navCtrl.navigateRoot('/login');
  }

}
