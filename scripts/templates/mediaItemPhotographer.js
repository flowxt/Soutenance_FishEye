import MediasFactory from "../factories/mediasfactory.js";

// Fonction pour créer et afficher un item média (image ou vidéo) d'un photographe dans la galerie
export function mediaItemPhotographer(media, updateTotalLikes) {
  // Sélection de la section où l'item sera inséré
  const section = document.querySelector(".photograph-gallery");
  // Création d'un objet mediaItem via la MediasFactory pour gérer le contenu média
  const mediaItem = new MediasFactory(media);
  // Création d'une div contenant l'item média et ajout de la classe "gallery-item"
  const itemGallery = document.createElement("div");
  itemGallery.classList.add("gallery-item");

  // Création de la div pour le contenu (img ou vidéo) et attribution d'une classe et d'un attribut data
  const item = document.createElement("div");
  item.classList.add("item");
  item.setAttribute("data-media", media.id);

  // Insérer le contenu du média (img ou vidéo)
  item.appendChild(mediaItem.mediaContent);

  // Titre de l'item
  const itemTitle = document.createElement("h3");
  itemTitle.textContent = media.title;

  // Likes
  const itemLikes = document.createElement("div");
  itemLikes.classList.add("likes");
  const spanrate = document.createElement("div");
  spanrate.classList.add("item-rating");

  const likeIcon = document.createElement("img");
  likeIcon.classList.add("heart-icon");
  likeIcon.src = "assets/icons/heart-item.svg";
  likeIcon.alt = "icones pour les Likes";
  likeIcon.setAttribute("tabindex", "0"); //like au clavier

  const likesCount = document.createElement("span");
  likesCount.textContent = media.likes;
  likesCount.classList.add("likes-count");
  itemLikes.appendChild(itemTitle);

  // Tableau pour stocker les IDs des médias déjà likés (évite de liker un média plusieurs fois)
  let likedMediaIds = [];

  // Fonction pour ajouter un like
  const likeMedia = () => {
    if (!likedMediaIds.includes(media.id)) {
      media.likes++;
      likesCount.textContent = media.likes;
      likedMediaIds.push(media.id);
      updateTotalLikes();
    }
  };

  likeIcon.addEventListener("click", likeMedia);

  //like au clavier
  likeIcon.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      likeMedia();
    }
  });
  // Ajout du compteur de likes et de l'icône cœur à la section des likes
  spanrate.appendChild(likesCount);
  spanrate.appendChild(likeIcon);
  itemLikes.appendChild(spanrate);
  // Ajout du contenu du média et des likes à l'élément de la galerie
  itemGallery.appendChild(item);
  itemGallery.appendChild(itemLikes);
  // Ajout de l'élément complet à la galerie du photographe
  section.appendChild(itemGallery);
}
