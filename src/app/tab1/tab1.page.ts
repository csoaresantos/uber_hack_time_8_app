import { Component, OnInit } from '@angular/core';
import { IdosoService, Idoso } from 'src/app/services/idoso.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  private idosos: Observable<Idoso[]>;

  constructor(private ideaService: IdosoService) { }

  ngOnInit() {
    this.idosos = this.ideaService.getIdosos();
  }
}
