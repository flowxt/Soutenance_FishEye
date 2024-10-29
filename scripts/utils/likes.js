import { getTotalLikes } from "../templates/photographer.js";

// Fonction pour initialiser le contenu de la div des likes
export function initializeTotalLikes(photographer, medias) {
  // Récupération du total de likes des médias d'un photographe
  let sumLikes = getTotalLikes(medias);
  const rating = document.querySelector(".photographer-rating"); // Sélection de la div pour afficher les likes

  // Création d'une div pour afficher le total des likes
  const totalLikes = document.createElement("div");
  totalLikes.classList.add("rating"); // Ajout de la classe 'rating' pour le style

  // Création d'un paragraphe pour afficher le total des likes
  const ratingLikes = document.createElement("p");
  ratingLikes.id = "total-likes"; // ID pour accéder facilement à cet élément
  console.log(sumLikes); // Affichage du total des likes dans la console
  ratingLikes.textContent = sumLikes; // Mise à jour du texte avec le total des likes

  // Création d'une icône pour les likes
  const likeIcon = document.createElement("img");
  likeIcon.classList.add("heart-icon"); // Ajout de la classe 'heart-icon' pour le style
  likeIcon.src = "assets/icons/heart-total.svg"; // Chemin vers l'icône des likes
  likeIcon.alt = "icônes pour les Likes"; // Texte alternatif pour l'accessibilité

  // Création d'un paragraphe pour afficher le prix du photographe
  const price = document.createElement("p");
  price.textContent = `${photographer.price} € / jour`; // Affichage du prix avec la devise

  // Ajout des éléments créés à la div totale des likes
  totalLikes.appendChild(ratingLikes);
  totalLikes.appendChild(likeIcon);

  // Réinitialiser le contenu de la div des likes
  rating.innerHTML = ""; // Vide le contenu précédent
  rating.appendChild(totalLikes); // Ajoute la nouvelle div des likes
  rating.appendChild(price); // Ajoute le prix du photographe
}

// Fonction pour mettre à jour uniquement le total des likes
export function updateTotalLikes(medias) {
  let sumLikes = getTotalLikes(medias); // Récupération du total des likes
  const ratingLikes = document.getElementById("total-likes"); // Sélection de l'élément pour le total des likes
  console.log(sumLikes); // Affichage du nouveau total des likes dans la console
  ratingLikes.textContent = sumLikes; // Mise à jour du texte avec le nouveau total des likes
}
