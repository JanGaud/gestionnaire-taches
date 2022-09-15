export class GestionTache{
    
    //Creer le clone du gabarit qui illustera les taches
    constructor(texteEntre, destinationClone, gabarit){
        this.tache = texteEntre;
        this.destination = destinationClone;
        this.clone = gabarit
        this.Initialisation();
    }

    Initialisation(){

        const that = this;
        //cloner gabarit
        this.gabarit = document.querySelector(".gabarit-taches");
        //cloner
        this.listeTaches = this.gabarit.cloneNode(true);



        //recupere les elements du clone
        this.cloneTexte = this.listeTaches.querySelector("#outputTache");
        this.cloneTexte.innerText = this.tache;
        this.checkbox = this.listeTaches.querySelector("input[type=checkbox]");
        this.btnSupprimer = this.listeTaches.querySelector("#supprimer");
        this.selectButton = this.listeTaches.querySelector(".checkbutton");


        this.gabarit.classList.remove("invisible");
        this.gabarit.classList.remove("gabarit-taches");
        this.gabarit.classList.add("tache");

         //event listener tache fait!
É

        
        // function ButtonEffect(){
        //     if(this.checkBox.value == true){;
        //         this.selectButton.classList.add("checkbuttonClicked");
        //         this.selectButton.classList.remove("checkbutton")
        //     }
        //     else{
        //         this.selectButton.classList.remove("checkbuttonClicked");
        //         this.selectButton.classList.add("checkbutton");
        //     }
        // };

        //event listener supprimer la tache
        this.btnSupprimer.addEventListener("click", function name(){
            that.gabarit.remove();
        });

        this.destination.append(this.listeTaches);




        //fonctions de taches
    }

}