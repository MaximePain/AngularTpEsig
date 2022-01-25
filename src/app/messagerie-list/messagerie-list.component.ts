import { Component, OnInit } from '@angular/core';
import { MessagerieServiceService } from '../messagerie-service.service';
import { Message } from '../models/Message';

@Component({
	selector: 'app-messagerie-list',
	templateUrl: './messagerie-list.component.html',
	styleUrls: ['./messagerie-list.component.css']
})
export class MessagerieListComponent implements OnInit {

	constructor(private messagerieService: MessagerieServiceService) {
		
	}

	messages: Message[] = [];

	ngOnInit(): void {
		this.getMessagesList();
	}

	getMessagesList(){
		this.messages = this.messagerieService.getMessagesList();
	}

}
