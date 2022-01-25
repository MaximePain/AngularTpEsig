import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-formulaire',
	templateUrl: './formulaire.component.html',
	styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {

	constructor() { }

	nom = "";
	prenom = "";
	majeur = "";
	age!: Number;
	civilite = "Mr";

}
