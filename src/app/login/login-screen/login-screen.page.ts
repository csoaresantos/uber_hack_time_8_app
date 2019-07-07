import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccountService } from './../account.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  chooseParents() {
    AccountService.accountType = 'parents';
    this.navCtrl.navigateForward('/tabs');
  }

  chooseCompanion() {
    AccountService.accountType = 'companion';
    this.navCtrl.navigateForward('/tabs/next-events');
  }

}
