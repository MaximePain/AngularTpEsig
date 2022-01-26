import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MessagerieServiceService } from '../messagerie-service.service';
import { Message } from '../models/Message';

@Component({
	selector: 'app-messagerie-form',
	templateUrl: './messagerie-form.component.html',
	styleUrls: ['./messagerie-form.component.css']
})
export class MessagerieFormComponent implements OnInit {

	@Input() newMessage!: Boolean;
	@Input() message!: Message;
	@Output() notifyDeleteMsg = new EventEmitter();

	email = new FormControl('',[
		Validators.required,
		Validators.email
	]);

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
		this.messagerieService.deleteMessage(this.message);
		this.clearValues();
		this.notifyDeleteMsg.emit();
	}

	clearValues(){
		this.sender = '';
		this.receiver = '';
		this.objet = '';
		this.contenu = '';
	}

}
