import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-formulaire',
	templateUrl: './formulaire.component.html',
	styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

	constructor() { }

	nom = "";
	prenom = "";
	majeur = "";
	age = "";
	civilite = "Mr";

	ngOnInit(): void {
	}

	updateNom(nom: string){
		this.nom = nom;
	}

	updatePrenom(prenom: string){
		this.prenom = prenom;
	}

	updateAge(age: string){
		this.age = age;
		let ageInt = parseInt(age);
		if(ageInt >= 18)
			this.majeur = "majeur";
		else
			this.majeur = "mineur";
	}

	updateRadio(civilite: string){
		this.civilite = civilite;
	}

}
