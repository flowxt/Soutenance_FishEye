// Déclaration de la classe "Media", conçue pour représenter un média générique (image ou vidéo).
// Cette classe sert de base pour stocker les informations communes à tous les types de médias.
class Media {
  // Constructeur de la classe, qui prend un objet `data` contenant les informations du média.
  constructor(data) {
    // Initialisation des propriétés privées de l'instance.
    // Chaque propriété représente une information importante sur le média.
    this._id = data.id; // Identifiant unique du média.
    this._photographerId = data.photographerId; // Identifiant du photographe propriétaire du média.
    this._title = data.title; // Titre ou nom du média.
    this._likes = data.likes; // Nombre initial de likes que le média a reçu.
    this._date = data.date; // Date de création ou de publication du média.
    this._price = data.price; // Prix associé au média (par exemple pour une utilisation ou une licence).
  }
  // Getter pour obtenir l'ID du média.
  // Les getters permettent d'accéder aux propriétés sans exposer les variables privées directement.
  get id() {
    return this._id;
  }
  // Getter pour obtenir l'ID du photographe associé au média.
  get photographerId() {
    return this._photographerId;
  }
  // Getter pour obtenir le titre du média.
  get title() {
    return this._title;
  }
  // Getter pour obtenir le nombre de likes du média.
  get likes() {
    return this._likes;
  }
  // Getter pour obtenir la date de création ou de publication du média.
  get date() {
    return this._date;
  }
  // Getter pour obtenir le prix du média.
  get price() {
    return this._price;
  }
}
// Export de la classe "Media" pour qu'elle puisse être importée et utilisée dans d'autres fichiers.
// Cela permet d'étendre cette classe pour créer des types de médias spécifiques comme des images ou des vidéos.

export default Media;
