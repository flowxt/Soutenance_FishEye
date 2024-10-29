//Fonction pour trier les médias par popularité (nombre de likes décroissant)
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

// TEST POUR AVOIR BOUTON PLUTOT QUE MENU SELECT
// // Gestion de l'événement pour le bouton de tri
// sortButton.addEventListener("click", (event) => {
//   sortOptions.classList.toggle("show");
//   // Change l'icône en fonction de l'état du menu
//   arrowIcon.classList.toggle(
//     "fa-chevron-up",
//     sortOptions.classList.contains("show")
//   );
//   arrowIcon.classList.toggle(
//     "fa-chevron-down",
//     !sortOptions.classList.contains("show")
//   );
//   event.stopPropagation(); // Empêche l'événement de remonter dans la hiérarchie
// });

// // Gestion des événements pour chaque option de tri
// document.querySelectorAll(".sort-option").forEach((option) => {
//   option.addEventListener("click", function () {
//     const newSortBy = this.getAttribute("data-sort"); // Récupère le type de tri
//     currentSortBy = newSortBy; // Met à jour l'état du tri actuel
//     const oldText = sortButton.textContent.trim();
//     sortButton.firstChild.nodeValue = this.textContent;
//     this.textContent = oldText;
//     sortOptions.classList.remove("show"); // Ferme le menu

//     // Affiche les médias triés
//     handleSortChange(
//       newSortBy,
//       photographerId,
//       currentMedias,
//       displayPhotographerMedia
//     );
//   });
// });

// // Ferme le menu lorsqu'on clique à l'extérieur
// document.addEventListener("click", () => {
//   sortOptions.classList.remove("show"); // Ferme le menu
//   arrowIcon.classList.remove("fa-chevron-up");
//   arrowIcon.classList.add("fa-chevron-down");
// });

// // Fonction pour trier les médias par popularité (nombre de likes décroissant)
// export function sortByPopularity(medias) {
//   return medias.sort((a, b) => b.likes - a.likes);
// }

// // Fonction pour trier les médias par titre (ordre alphabétique)
// export function sortByTitle(medias) {
//   return medias.sort((a, b) => a.title.localeCompare(b.title));
// }

// // Fonction pour trier les médias par date (date décroissante)
// export function sortByDate(medias) {
//   return medias.sort((a, b) => new Date(b.date) - new Date(a.date));
// }

// // Fonction pour gérer le changement de tri en fonction de l'option sélectionnée
// export function handleSortChange(
//   newSortBy,
//   currentPhotographer,
//   currentMedias,
//   displayPhotographerMedia
// ) {
//   let sortedMedias; // Variable pour stocker les médias triés

//   // Tri en fonction de l'option sélectionnée
//   if (newSortBy === "popularity") {
//     sortedMedias = sortByPopularity(currentMedias); // Tri par popularité
//   } else if (newSortBy === "title") {
//     sortedMedias = sortByTitle(currentMedias); // Tri par titre
//   } else if (newSortBy === "date") {
//     sortedMedias = sortByDate(currentMedias); // Tri par date
//   }

//   // Affiche les médias triés pour le photographe actuel
//   displayPhotographerMedia(currentPhotographer, sortedMedias);
// }

// TEST AU DESSUS
