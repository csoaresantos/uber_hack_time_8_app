import { Component, OnInit } from '@angular/core';
import { AcompanhanteService, Acompanhante } from 'src/app/services/acompanhante.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  private acompanhantes: Observable<Acompanhante[]>;

  constructor(private acompanhanteService: AcompanhanteService) {}

  ngOnInit() {
    this.acompanhantes = this.acompanhanteService.getAcompanhantes();
  }
}
