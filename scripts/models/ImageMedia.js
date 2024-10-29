// Importation de la classe parente "Media" pour hériter de ses propriétés et méthodes.
import Media from "./Media.js";

// Déclaration de la classe "ImageMedia" qui hérite de la classe "Media".
// Cette classe est spécifique aux médias de type image.
class ImageMedia extends Media {
  // Le constructeur de la classe, qui reçoit des données spécifiques pour initialiser une instance d'image.
  constructor(data) {
    // Appel au constructeur de la classe parente pour hériter des propriétés générales des médias.
    super(data);
    // Initialisation de la propriété _image, qui contient le nom du fichier image.
    this._image = data.image;
  }

  // Getter pour obtenir le lien vers l'image.
  // Cette méthode génère le chemin relatif vers le fichier image en fonction de son nom.
  get mediaLink() {
    return `./assets/media/${this._image}`;
  }

  // Getter pour créer et renvoyer le contenu média sous forme d'élément HTML <img>.
  // Cette méthode crée dynamiquement une balise <img> pour représenter visuellement le média dans la page.
  get mediaContent() {
    // Création d'un élément image (balise <img>).
    const media = document.createElement("img");
    // Définition de l'attribut alt pour l'accessibilité, décrivant le média avec son titre.
    media.setAttribute("alt", `photographie appelée ${this._title}`);
    // Ajout d'un attribut de données personnalisées pour stocker l'ID de ce média.
    // Cela permet de retrouver facilement l'image en utilisant cet ID dans d'autres parties du code.
    media.setAttribute("data-media", this._id);
    // Définition de l'attribut tabindex pour rendre l'image accessible via le clavier.
    // En utilisant "0", on permet aux utilisateurs de naviguer vers l'image avec la touche Tab.
    media.setAttribute("tabindex", "0");
    // Définition de l'attribut src avec le chemin de l'image récupéré depuis le getter mediaLink.
    media.setAttribute("src", this.mediaLink);
    // Renvoi de l'élément <img> ainsi créé, prêt à être ajouté dans le DOM.
    return media;
  }
}
// Export de la classe ImageMedia pour la rendre disponible dans d'autres modules.
// Cela permet d'importer cette classe et de l'utiliser dans d'autres fichiers.
export default ImageMedia;
