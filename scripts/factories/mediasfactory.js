import ImageMedia from "../models/ImageMedia.js"; // Importation de la classe ImageMedia
import VideoMedia from "../models/VideoMedia.js"; // Importation de la classe VideoMedia

// Classe pour créer des objets médias en fonction du type de données fourni
class MediasFactory {
  constructor(data) {
    // Vérifie si les données contiennent une image
    if (data.image) {
      return new ImageMedia(data); // Crée et retourne une instance d'ImageMedia
    }
    // Vérifie si les données contiennent une vidéo
    else if (data.video) {
      return new VideoMedia(data); // Crée et retourne une instance de VideoMedia
    }
    // Gère les cas où le type de média n'est pas reconnu
    else {
      throw "Unknown media format type"; // Lève une erreur si le type de média est inconnu
    }
  }
}

// Fonction pour récupérer un média par son ID dans un tableau de médias
export function getMediaById(mediaId, medias) {
  // Vérifie si le tableau de médias est défini et non vide
  if (medias) {
    // Utilise la méthode find pour rechercher le média par son ID
    return medias.find((media) => media.id === mediaId);
  } else {
    console.error("Le tableau de médias est vide ou non défini."); // Affiche une erreur si le tableau est vide ou non défini
    return null; // Retourne null si le tableau est vide
  }
}

export default MediasFactory; // Exporte la classe MediasFactory pour utilisation dans d'autres modules
