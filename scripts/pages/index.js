// Importation de la fonction getPhotographers depuis le module utils/data.js
import { getPhotographers } from "../utils/data.js";
// Importation du modèle de photographe depuis le module templates/photographer.js
import { photographerTemplate } from "../templates/photographer.js";

// Fonction asynchrone pour afficher les données des photographes
async function displayData(photographers) {
  // Sélectionne la section où les photographes seront affichés
  const photographersSection = document.querySelector(".photographer_section");

  // Pour chaque photographe dans le tableau passé en argument
  photographers.forEach((photographer) => {
    // Crée un modèle de photographe en utilisant le modèle importé
    const photographerModel = photographerTemplate(photographer);
    // Récupère l'élément DOM correspondant au photographe
    const userCardDOM = photographerModel.getUserCardDOM();
    // Ajoute l'élément DOM à la section des photographes
    photographersSection.appendChild(userCardDOM);
  });
}

// Fonction asynchrone pour initialiser l'affichage des données
async function init() {
  // Récupère les données des photographes en attendant la promesse de getPhotographers
  const { photographers } = await getPhotographers();
  // Affiche les données des photographes en appelant displayData
  displayData(photographers);
}

// Appelle la fonction init pour démarrer le processus
init();
