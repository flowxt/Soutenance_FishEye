// Importation de la classe parente Media
import Media from "./Media.js";

// Définition de la classe VideoMedia qui étend la classe Media
class VideoMedia extends Media {
  // Le constructeur reçoit un objet 'data' en paramètre
  constructor(data) {
    // Appel du constructeur de la classe parente Media avec 'data'
    super(data);
    // Initialisation de la propriété _video avec la valeur de data.video
    this._video = data.video;
  }

  // Getter pour obtenir le lien vers la vidéo
  get mediaLink() {
    // Retourne le chemin du fichier vidéo en se basant sur la propriété _video
    return `./assets/media/${this._video}`;
  }

  // Getter pour créer et configurer l'élément HTML vidéo
  get mediaContent() {
    // Création de l'élément <video>
    const media = document.createElement("video");
    // Ajout d'un attribut 'alt' pour l'accessibilité avec le titre de la vidéo
    media.setAttribute("alt", `vidéo dont le titre est ${this._title}`);
    // Ajout d'un attribut 'data-media' pour stocker l'ID de la vidéo
    media.setAttribute("data-media", this._id);
    // Ajout d'un attribut 'tabindex' pour rendre la vidéo accessible via la tabulation
    media.setAttribute("tabindex", "0");
    // Ajout de l'attribut 'src' avec le lien de la vidéo obtenu depuis mediaLink
    media.setAttribute("src", this.mediaLink);
    // Définit la vidéo en mode 'muted' pour qu'elle soit muette par défaut
    media.setAttribute("muted", "");
    // Options commentées : pour que la vidéo démarre automatiquement et en boucle
    // media.setAttribute('autoplay', '');
    // media.setAttribute('loop', '');
    return media; // Renvoie l'élément vidéo configuré
  }
}

// Export de la classe VideoMedia pour être utilisée dans d'autres modules
export default VideoMedia;
