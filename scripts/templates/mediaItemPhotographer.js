import MediasFactory from "../factories/mediasfactory.js";

export function mediaItemPhotographer(media, updateTotalLikes) {
  const section = document.querySelector(".photograph-gallery");
  const mediaItem = new MediasFactory(media);
  const itemGallery = document.createElement("div");
  itemGallery.classList.add("gallery-item");

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

  let likedMediaIds = [];

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

  spanrate.appendChild(likesCount);
  spanrate.appendChild(likeIcon);
  itemLikes.appendChild(spanrate);
  itemGallery.appendChild(item);
  itemGallery.appendChild(itemLikes);

  section.appendChild(itemGallery);
}
