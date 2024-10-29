// TEST AU DESSUS

// Fonction pour trier les médias par popularité (nombre de likes décroissant)
export function sortByPopularity(medias) {
  return medias.sort((a, b) => b.likes - a.likes);
}

// Fonction pour trier les médias par titre (ordre alphabétique)
export function sortByTitle(medias) {
  return medias.sort((a, b) => a.title.localeCompare(b.title));
}

// Fonction pour trier les médias par date (date décroissante)
export function sortByDate(medias) {
  return medias.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Fonction pour gérer le changement de tri en fonction de l'option sélectionnée
export function handleSortChange(
  event, // Événement déclenché par le changement d'option
  currentPhotographer, // Photographe actuellement affiché
  currentMedias, // Médias associés au photographe
  displayPhotographerMedia // Fonction pour afficher les médias triés
) {
  // On stocke la valeur sélectionnée dans l'option de tri
  const selectedOption = event.target.value;

  let sortedMedias; // Variable pour stocker les médias triés
  // Tri en fonction de l'option sélectionnée
  if (selectedOption === "popularity") {
    sortedMedias = sortByPopularity(currentMedias); // Tri par popularité
  } else if (selectedOption === "title") {
    sortedMedias = sortByTitle(currentMedias); // Tri par titre
  } else if (selectedOption === "date") {
    sortedMedias = sortByDate(currentMedias); // Tri par date
  }

  // Affiche les médias triés pour le photographe actuel
  displayPhotographerMedia(currentPhotographer, sortedMedias);
}
