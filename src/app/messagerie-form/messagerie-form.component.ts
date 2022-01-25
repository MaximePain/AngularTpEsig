import { Component, Input, OnInit } from '@angular/core';
import { MessagerieServiceService } from '../messagerie-service.service';
import { Message } from '../models/Message';

@Component({
	selector: 'app-messagerie-form',
	templateUrl: './messagerie-form.component.html',
	styleUrls: ['./messagerie-form.component.css']
})
export class MessagerieFormComponent implements OnInit {

	newMessage: Boolean = true;
	@Input() message!: Message;

	sender!: string;
	receiver!: string;
	objet!: string;
	contenu!: string;

	constructor(private messagerieService: MessagerieServiceService) { }

	ngOnInit(): void {
	}

	envoyerMessage(){
		this.messagerieService.sendMessage(this.contenu, this.objet, this.sender, this.receiver);
		this.clearValues();
	}

	abandonnerMessage(){
		this.clearValues();
	}

	supprimerMessage(){
		
	}

	clearValues(){
		this.sender = '';
		this.receiver = '';
		this.objet = '';
		this.contenu = '';
	}

}
