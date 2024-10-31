// Fonction pour afficher et gérer la lightbox
export function displayLightbox({ medias }) {
  const lightbox = document.querySelector(".lightbox");
  const lightboxMedia = document.querySelector(".lightbox_media");
  const lightboxTitle = document.querySelector(".lightbox_title");
  const btnClose = document.querySelector(".lightbox_close");
  const btnPrevious = document.querySelector(".lightbox_prev");
  const btnNext = document.querySelector(".lightbox_next");
  // Tableau contenant les éléments HTML des médias
  const mediaProvider = Array.from(
    document.querySelectorAll(".gallery-item .item")
  );
  // Variable pour suivre l'index de l'élément actuellement affiché dans la Lightbox
  let currentIndex = null;

  // Fonction pour ouvrir la Lightbox avec l'élément à l'index donné
  const openLightbox = (index) => {
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "true");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    lightbox.style.display = "flex";
    btnClose.focus();
    updateLightboxContent(index);
  };

  // Fonction pour fermer la Lightbox
  const closeLightbox = () => {
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "false");
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.style.display = "none";
    document.body.classList.remove("no-scroll");
  };

  const updateLightboxContent = (index) => {
    const selectedMedia = medias[index];
    if (selectedMedia) {
      if (selectedMedia.image) {
        lightboxMedia.innerHTML = `<img src="assets/media/${selectedMedia.image}" alt="${selectedMedia.title}" role="img">`;
      } else if (selectedMedia.video) {
        lightboxMedia.innerHTML = `<video controls><source src="assets/media/${selectedMedia.video}" type="video/mp4" role="video"></video>`;
        // Ajoute des contrôles à la vidéo et permet la lecture au clic
        const videoElement = lightboxMedia.querySelector("video");
        videoElement.addEventListener("click", () => {
          videoElement.play();
        });
        videoElement.setAttribute("controls", "");
      }
      lightboxTitle.textContent = selectedMedia.title;
      currentIndex = index;
    }
  };

  // Fonctions pour naviguer entre les médias
  const nextMedia = () => {
    currentIndex = (currentIndex + 1) % medias.length;
    updateLightboxContent(currentIndex);
  };

  // Fonction pour naviguer vers le média précédent
  const previousMedia = () => {
    currentIndex = (currentIndex - 1 + medias.length) % medias.length;
    updateLightboxContent(currentIndex);
  };

  mediaProvider.forEach((media) => {
    media.addEventListener("click", () => {
      const mediaId = media.getAttribute("data-media");
      currentIndex = medias.findIndex((m) => m.id == mediaId);
      openLightbox(currentIndex);
    });

    // Gestion de la navigation au clavier pour ouvrir la Lightbox
    media.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const mediaId = media.getAttribute("data-media");
        currentIndex = medias.findIndex((m) => m.id == mediaId);
        openLightbox(currentIndex);
      }
    });
  });
  // Gestion des événements pour la navigation et la fermeture de la Lightbox
  btnPrevious.addEventListener("click", previousMedia);
  btnNext.addEventListener("click", nextMedia);
  btnClose.addEventListener("click", closeLightbox);
  // Gestion des événements clavier pour la navigation et la fermeture de la Lightbox
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "Escape":
        closeLightbox();
        break;
      case "ArrowLeft":
        previousMedia();
        break;
      case "ArrowRight":
        nextMedia();
        break;
    }
  });
}
