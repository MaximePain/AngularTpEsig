export class Message{

    contenu: string
    objet: string
    sender: string
    receiver: string
    dateEnvoi: Date

    constructor(contenu: string, objet: string, sender: string, receiver: string, dateEnvoie: Date){
        this.contenu = contenu;
        this.objet = objet;
        this.sender = sender;
        this.receiver = receiver;
        this.dateEnvoi = dateEnvoie;
    }
}