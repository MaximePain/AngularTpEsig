import { Injectable } from '@angular/core';
import { Message } from './models/Message';

@Injectable({
	providedIn: 'root'
})
export class MessagerieServiceService {

	constructor() { }

	messagesLocal!: Message[];
	lastId: any = 0;

	getMessagesList(){
		let json = localStorage.getItem('messagesLocal');
		if(json == null)
			json = '[]';
		this.messagesLocal = JSON.parse(json);

		for(let i = 0; i < this.messagesLocal.length; i++)
			if(this.lastId < this.messagesLocal[i].id){
				this.lastId = this.messagesLocal[i].id;
			}
			this.lastId++;

		return this.messagesLocal;
	}

	sendMessageObj(message: Message){
		message.dateEnvoi = new Date();
		message.id = this.lastId++;
		this.messagesLocal.push(message);
		localStorage.setItem('messagesLocal', JSON.stringify(this.messagesLocal));
	}

	sendMessage(contenu: string, objet: string, sender: string, receiver: string){
		let message = new Message(this.lastId++,contenu, objet, sender, receiver, new Date());
		this.messagesLocal.push(message);
		localStorage.setItem('messagesLocal', JSON.stringify(this.messagesLocal));
	}

	deleteMessage(message: Message){
		let index = -1;
		for(let i = 0; i < this.messagesLocal.length; i++){
			let id = this.messagesLocal[i].id;
			if(id == message.id){
				index = i;
				break;
			}
		}
		this.messagesLocal.splice(index, 1);
		localStorage.setItem('messagesLocal', JSON.stringify(this.messagesLocal));
	}
}
