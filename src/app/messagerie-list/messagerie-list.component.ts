import { Component, OnInit } from '@angular/core';
import { MessagerieServiceService } from '../messagerie-service.service';
import { Message } from '../models/Message';

@Component({
	selector: 'app-messagerie-list',
	templateUrl: './messagerie-list.component.html',
	styleUrls: ['./messagerie-list.component.css']
})
export class MessagerieListComponent implements OnInit {

	newMessage = true;
	message!: Message;

	constructor(private messagerieService: MessagerieServiceService) {
		
	}
	

	messages: Message[] = [];
	msgSelectedId: Number = -1;

	

	ngOnInit(): void {
		this.getMessagesList();
	}

	getMessagesList(){
		this.messages = this.messagerieService.getMessagesList();
	}

	clickDiv(message: Message){
		this.msgSelectedId = message.id;
		this.message = message;
		this.newMessage = false;
	}

	newMsg(){
		this.msgSelectedId = -1;
		this.newMessage = true;
	}

}
