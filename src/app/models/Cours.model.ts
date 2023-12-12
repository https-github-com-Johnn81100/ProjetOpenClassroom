export class Cours {
    id:number;
    matiere:string;
    titre:string;
    date_publication: Date; // date création
    date_maj : Date; // date dernière update
    isFavorite : boolean = false; // en favoris pour l'utilisateur actif ?

    constructor(id:number,matiere:string,titre:string,date_publication:Date,date_maj:Date,isFavorite:boolean){

        this.id = id;
        this.matiere = matiere;
        this.titre = titre;
        this.date_publication = date_publication;
        this.date_maj = date_maj;
        this.isFavorite = isFavorite;
    }
}