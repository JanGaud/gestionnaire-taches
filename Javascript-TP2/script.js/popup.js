const popupConteneurPrincipal = document.querySelector(".popup-conteneur");
const popupBg = popupConteneurPrincipal.querySelector(".bg");
const popupBoutonFermer = popupConteneurPrincipal.querySelector(".bouton-fermer");

export function InitialisationPopup() {
    popupBoutonFermer.addEventListener("click", CacherPopup)
    popupBg.addEventListener("click", CacherPopup)
    AfficherPopup();
}

function AfficherPopup() {
    popupConteneurPrincipal.classList.remove("invisible");

    // À faire --- Ajouter un timeout
    window.setTimeout(CacherPopup, 3000);
}

function CacherPopup() {
    popupConteneurPrincipal.classList.add("invisible");
}