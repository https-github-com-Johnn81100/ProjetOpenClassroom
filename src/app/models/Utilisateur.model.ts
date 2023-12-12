export class Utilisateur {

    id:number;
    nom:string;
    prenom:string;
    mail:string;
    description:string;
    identifiant_discord:string;
    role:1 | 2; // 1:stagiaire 2:formateur
    isAdmin:boolean=false;

    constructor(id:number,nom:string,prenom:string,mail:string,description:string,identifiant_discord:string,role: 1 | 2, idAdmin:boolean){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
        this.description = description;
        this.identifiant_discord = identifiant_discord;
        this.role = role;
        this.isAdmin = this.isAdmin
    }
}