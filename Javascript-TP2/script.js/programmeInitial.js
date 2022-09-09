import { GestionTache } from "./gestionnaire.js";

    //Importation des variables universelles
    const btnAjouter = document.getElementById("ok");
    const boiteClones = document.getElementById("liste-taches");
    const checkedButton = document.getElementById("checkbox");
    const tache = document.getElementById("inputTache").value;
    const btnSupprimer = document.getElementById("supprimer");
    const gabarit = document.getElementById("gabarit-taches");

    // console.log(btnAjouter);
    // console.log(boiteClones);
    // console.log(checkedButton);
    // console.log(tache);
    // console.log(btnSupprimer);
    // console.log(gabarit);
    

btnAjouter.addEventListener("click", AjouterTache);

function AjouterTache(){
    const texteEntre = tache.value;
    new GestionTache(tache, boiteClones, gabarit);
}