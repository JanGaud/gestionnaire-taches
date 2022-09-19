export class GestionTache{
    
    //Creer le clone du gabarit qui illustera les taches
    constructor(texteEntre, wraperTaches, gabarit){
        this.tache = texteEntre;
        this.destination = wraperTaches;
        this.gabarit = gabarit;
        this.Initialisation();
    }

    Initialisation(){
        //creer une nouvelle tache
        let gabaritTache = this.gabarit[0].cloneNode(true);
        gabaritTache.classList.remove("invisible");
        gabaritTache.querySelector(".outputTache").innerHTML = this.tache;
        

        //supprimer un tache
        gabaritTache.querySelector("#supprimer").addEventListener("click", function(){
            gabaritTache.remove();
        });
        
        //marquer un tache comme fait et ajout d'effet sur le bouton
        gabaritTache.querySelector(".checkbox").addEventListener("change", function(event){

            if(event.target.checked){
                gabaritTache.querySelector(".outputTache").classList.add("fait");
                gabaritTache.querySelector(".checkbutton").classList.add("checkbuttonClicked");

            }
            else{
                gabaritTache.querySelector(".outputTache").classList.remove("fait");
                gabaritTache.querySelector(".checkbutton").classList.remove("checkbuttonClicked");
            }
        });

        //inserer la tache
        this.destination.append(gabaritTache);

    };

};
