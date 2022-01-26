export class Message{

    id: Number
    contenu: string
    objet: string
    sender: string
    receiver: string
    dateEnvoi: Date

    constructor(id: Number, contenu: string, objet: string, sender: string, receiver: string, dateEnvoie: Date){
        this.id = id;
        this.contenu = contenu;
        this.objet = objet;
        this.sender = sender;
        this.receiver = receiver;
        this.dateEnvoi = dateEnvoie;
    }
}