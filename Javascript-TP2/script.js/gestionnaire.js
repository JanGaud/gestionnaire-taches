export class GestionTache{
    
    //Creer le clone du gabarit qui illustera les taches
    constructor(tacheTexte, destinationClone, gabarit){
        this.tache = tacheTexte;
        this.destination = destinationClone;
        this.clone = gabarit
        this.Initialisation();
    }

    Initialisation(){

        const that = this;
        //cloner gabarit
        this.gabarit = document.getElementById("gabarit-taches");
        //cloner
        this.listeTaches = this.gabarit.cloneNode(true);



        //recupere les elements du clone
        this.cloneTexte = this.listeTaches.querySelector(".outputTache");
        this.cloneTexte.innerText = this.cloneTexte;
        this.checkbox = this.listeTaches.querySelector("input[type=checkbox]");
        this.checkbox = this.listeTaches.querySelector("#checkbox")


    }

    Supprimer() {
        this.gabarit.remove();
    }
}