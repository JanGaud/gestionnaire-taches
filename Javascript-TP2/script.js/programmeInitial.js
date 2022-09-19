import { GestionTache } from "./gestionnaire.js";
import { InitialisationPopup } from "./popup.js";

    dragula([document.querySelector('#liste-taches')]);
    //Importation des variables universelles
    const btnAjouter = document.getElementById("ok");
    const boiteClones = document.getElementById("liste-taches");
    const check = document.querySelector(".checkbox");
    const tache = document.getElementById("inputTache");
    const btnSupprimer = document.getElementById("supprimer");
    const gabarit = document.getElementsByClassName("gabarit-taches");
    const msgErreur = "Veuillez ajouter une tâche!";

    // console.log(btnAjouter);
    // console.log(boiteClones);
    // console.log(checkedButton);
    // console.log(tache);
    // console.log(btnSupprimer);
    // console.log(gabarit);
    

btnAjouter.addEventListener("click", AjouterTache);

    function AjouterTache(){
        const texteEntre = tache.value;
        new GestionTache(texteEntre, boiteClones, gabarit);
        InitialisationPopup();
    }
