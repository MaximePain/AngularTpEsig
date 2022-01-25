import { Injectable } from '@angular/core';
import { Message } from './models/Message';

@Injectable({
	providedIn: 'root'
})
export class MessagerieServiceService {

	constructor() { }

	localMessages: Message[] = [];

	getMessagesList(){
		return this.localMessages;
	}

	sendMessageObj(message: Message){
		message.dateEnvoi = new Date();
		this.localMessages.push(message);
	}

	sendMessage(contenu: string, objet: string, sender: string, receiver: string){
		let message = new Message(contenu, objet, sender, receiver, new Date());
		this.localMessages.push(message);
	}
}
