import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elderly-list',
  templateUrl: './elderly-list.component.html',
  styleUrls: ['./elderly-list.component.scss'],
})
export class ElderlyListComponent implements OnInit {

  elderlies = [
    {
      name: 'José Alencar',
      age: '65',
      icon: 'https://cdn0.iconfinder.com/data/icons/faces-general/100/male_old_flat-512.png'
    },
    {
      name: 'Maria Conceição',
      age: '78',
      icon: 'https://cdn3.vectorstock.com/i/thumb-large/59/82/cute-grandmother-head-avatar-character-vector-14965982.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {}

}
