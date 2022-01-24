import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-calculator',
	templateUrl: './calculator.component.html',
	styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	textResult = '';
	lastNbStr = '';
	lastOperande = '';
	canOverwrite = true;

	btnClick(char: string) {
		let nb = 0;
		if ((nb = parseInt(char)) || nb == 0) {
			//nombre
			if (this.canOverwrite){
				this.lastNbStr = this.textResult;
				this.textResult = '';
			}
			this.textResult += char;
			
			this.canOverwrite = false;
		} else {
			this.canOverwrite = true;

			if(this.lastNbStr != ""){
				this.textResult = eval(parseInt(this.lastNbStr) + this.lastOperande + parseInt(this.textResult));
			}

			if(char != "="){
				this.lastOperande = char;
			}
		}
		if(this.textResult.length > 20){
			this.textResult = "Erreur";
			this.lastNbStr = '';
			this.lastOperande = '';
			this.canOverwrite = true;
		}
	}
}
