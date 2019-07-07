import { Component } from '@angular/core';
import { AccountService } from './../login/account.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  userType = AccountService.accountType;

  constructor() {}

}
