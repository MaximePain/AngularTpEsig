import { Component, Input, OnInit } from '@angular/core';
import { Vaisseau } from '../models/Vaisseau';

@Component({
  selector: 'app-vaisseaux-data',
  templateUrl: './vaisseaux-data.component.html',
  styleUrls: ['./vaisseaux-data.component.css']
})
export class VaisseauxDataComponent implements OnInit {

  @Input() vaisseau!: Vaisseau

  constructor() { }

  ngOnInit(): void {
  }

}
