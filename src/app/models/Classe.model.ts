export class Classe {

    id:number;
    nom:string;
    date_rentree:Date;
    date_fin:Date;
    nom_discord:string;
    liste_id_eleves:Array<number>;

    constructor(id:number,nom:string,date_rentree:Date,date_fin:Date,nom_discord:string,liste_id_eleves:Array<number>){
        this.id = id;
        this.nom = nom;
        this.date_rentree = date_rentree;
        this.date_fin = date_fin;
        this.nom_discord = nom_discord;
        this.liste_id_eleves = liste_id_eleves;
    }
}