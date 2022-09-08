let i = 0;

function Initialisation(){
    rayerTache();

}

function supprimerTache(){
    let tacheSupprimer = document.getElementById("gabarit-taches");
    let checked = document.getElementsByTagName("checkbox");
    
    tacheSupprimer.remove();
    document.getElementById("checkbox").checked = false;
}

function rayerTache(){
    let checkBox = document.getElementById("checkbox");
    let selectButton = document.getElementById("checkbutton")
    let text = document.getElementById("outputTache");
    

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
}

function cloneBoiteTache() {
    const node = document.getElementById("gabarit-taches");
    const clone = node.cloneNode(true);
    const boiteClones = document.getElementById("liste-taches");
    let tache = document.getElementById("inputTache").value;
    let tacheBoite = document.getElementById("gabarit-taches");
    let selectButton = document.getElementById("checkbutton")

    selectButton.classList.add("checkbutton");

    document.getElementById('outputTache').innerText = tache;
    boiteClones.appendChild(clone);
    tacheBoite.classList.remove("invisible");
}




//checkbox.removeAttribute("checked");