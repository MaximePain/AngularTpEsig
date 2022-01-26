import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Vaisseau } from '../models/Vaisseau';
import { VaisseauResult } from '../models/VaisseauResult';
import { VaisseauxService } from '../vaisseaux.service';

@Component({
  selector: 'app-vaisseaux-list',
  templateUrl: './vaisseaux-list.component.html',
  styleUrls: ['./vaisseaux-list.component.css']
})
export class VaisseauxListComponent implements OnInit {

  vaisseauxResult!: Observable<VaisseauResult>;
  vaisseaux!: Observable<Vaisseau[]>;

  vaisseau!: Vaisseau;

  constructor(private vaisseauxService: VaisseauxService) {

  }

  ngOnInit(): void {
    this.getVaisseaux();
  }

  getVaisseaux(){
    this.vaisseaux = this.vaisseauxService.getVaisseaux().pipe(
     map(x=>
            x.results
        ));
  }

  clickDiv(vaisseau: Vaisseau){
    this.vaisseau = vaisseau;
  }

}
