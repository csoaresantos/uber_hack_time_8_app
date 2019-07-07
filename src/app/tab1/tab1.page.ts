import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AcompanhanteService, Acompanhante } from 'src/app/services/acompanhante.service';
=======
import { IdosoService, Idoso } from 'src/app/services/idoso.service';
>>>>>>> service-idoso
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  private idosos: Observable<Acompanhante[]>;

  constructor(private ideaService: AcompanhanteService) { }

  ngOnInit() {
    this.idosos = this.ideaService.getAcompanhantes();
  }
}
