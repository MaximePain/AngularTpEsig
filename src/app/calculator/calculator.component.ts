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
	firstNb = '';
	secondNb = '';
	lastOperande = '';
	canOverwrite = true;
	lastWasEqual = false;

	btnClick(char: string) {
		let nb = 0;
		if ((nb = parseInt(char)) || nb == 0) { //nombre
			if (this.canOverwrite){
				this.textResult = '';
			}
			this.textResult += char;
			
			this.canOverwrite = false;
		} else if(char != '.') { //operande

			if(this.lastWasEqual && char != "="){
				this.lastWasEqual = false;
				this.firstNb = '';
				this.secondNb = '';
			}

			if(char == 'x')
				char = '*';
			this.canOverwrite = true;

			if(this.firstNb == '')
				this.firstNb = this.textResult;
			else if(this.secondNb == '')
				this.secondNb = this.textResult;


			if(this.firstNb != "" && this.secondNb != ""){
				this.textResult = eval(parseFloat(this.firstNb) + this.lastOperande + parseFloat(this.secondNb));
				this.firstNb = this.textResult;
				if(char != "=")
					this.secondNb = '';
			}

			if(char != "="){
				this.textResult += ' ' + char;
				this.lastOperande = char;
			}
			else
				this.lastWasEqual = true;
		}
		else{ //virgule
			if(!this.textResult.includes('.'))
				this.textResult += ".";
		}
		if(this.textResult.length > 20){
			this.textResult = "Erreur";
			this.firstNb = '';
			this.secondNb = '';
			this.lastOperande = '';
			this.canOverwrite = true;
		}
	}
}
