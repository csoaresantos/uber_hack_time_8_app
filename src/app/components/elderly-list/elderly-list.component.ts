import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elderly-list',
  templateUrl: './elderly-list.component.html',
  styleUrls: ['./elderly-list.component.scss'],
})
export class ElderlyListComponent implements OnInit {

  elderlies = [
    {
      name: 'John Doe',
      age: '65',
    },
    {
      name: 'Joanne Doe',
      age: '78',
    }
  ];

  constructor() { }

  ngOnInit() {}

}
