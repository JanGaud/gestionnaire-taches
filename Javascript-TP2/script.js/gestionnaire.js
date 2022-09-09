export class GestionTache{
    
    //Creer le clone du gabarit qui illustera les taches
    constructor(tache, destinationClone, gabarit){
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
        // this.cloneTexte = this.listeTaches.querySelector(".outputText");
        // this.cloneTexte.innerText = this.tache;
        this.checkbox = this.listeTaches.querySelector("input[type=checkbox]");
        this.checkbox = this.listeTaches.querySelector("#checkbox");
        this.btnSupprimer = this.listeTaches.querySelector("#supprimer");


        this.gabarit.classList.remove("invisible");

        console.log(this.gabarit);
        //event listener tache fait!

        this.checkbox.addEventListener("click", function (){
            if(checkBox.checked == true){
                text.classList.add("fait");
                selectButton.classList.remove("checkbutton");
                selectButton.classList.add("checkbuttonClicked");
             } 
             else{
                 text.classList.remove("fait");
                 selectButton.classList.remove("checkbuttonClicked");
                 selectButton.classList.add("checkbutton");
             }
        });

        //event listener supprimer la tache
        this.btnSupprimer.addEventListener("click", function (){
            that.gabarit.remove();
        });

        this.destination.append(this.listeTaches);




        //fonctions de taches
    }

}