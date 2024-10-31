//récup de tous les photographes
export async function getPhotographers() {
  try {
    // Appel à l'API ou au fichier JSON pour obtenir les données des photographes
    const fetchPhotographers = await fetch("data/photographers.json");
    if (!fetchPhotographers.ok) {
      throw new Error("Erreur récup data");
    }
    // Conversion des données en JSON pour les traiter sous forme d'objet JavaScript
    const data = await fetchPhotographers.json();
    return {
      photographers: data.photographers,
    };
  } catch (error) {
    console.error("Erreur: ", error);
    // Renvoie un objet contenant la liste des photographes
    return {
      photographers: [],
    };
  }
}

//récup de tous les médias
export async function getMedias() {
  try {
    // Appel à l'API ou au fichier JSON pour obtenir les données des medias
    const fetchMedias = await fetch("data/photographers.json");
    if (!fetchMedias.ok) {
      throw new Error("Erreur récup data");
    }
    const dataMedias = await fetchMedias.json(); // Conversion en données JSON pour les traiter
    const medias = dataMedias.media;
    return { medias };
  } catch (error) {
    console.error("Erreur: ", error);
    return {
      medias: [],
    };
  }
}
