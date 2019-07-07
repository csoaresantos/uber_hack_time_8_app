import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elderly-detail',
  templateUrl: './elderly-detail.page.html',
  styleUrls: ['./elderly-detail.page.scss'],
})
export class ElderlyDetailPage implements OnInit {

  elderly = {
    name: 'John Doe',
    age: '69',
    address: 'Rua José Martins, 385 - Belo Horizonte, MG',
    phone: '(31) 99999-9999',
  };

  constructor() { }

  ngOnInit() {
  }

}
