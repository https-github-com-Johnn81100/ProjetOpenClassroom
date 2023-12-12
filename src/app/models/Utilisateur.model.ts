export class Utilisateur {

    id:number;
    nom:string;
    prenom:string;
    mail:string;
    description:string;
    identifiant_discord:string;
    id_classe: number;
    role:1 | 2; // 1:stagiaire 2:formateur
    liste_id_cours_fav:Array<number> = []; // liste des id des cours mis en favoris par l'utilisateur
    liste_id_article_fav:Array<number> = []; // liste des id des articles mis en favoris par l'utilisateur
    isAdmin:boolean=false;

    constructor(id:number,nom:string,prenom:string,mail:string,description:string,identifiant_discord:string,role: 1 | 2, liste_id_cours_fav:Array<number>,liste_id_article_fav:Array<number>, id_classe:number, idAdmin:boolean){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
        this.description = description;
        this.identifiant_discord = identifiant_discord;
        this.role = role;
        this.liste_id_cours_fav = liste_id_cours_fav;
        this.liste_id_article_fav = liste_id_article_fav;
        this.id_classe = id_classe;
        this.isAdmin = this.isAdmin;
    }
}