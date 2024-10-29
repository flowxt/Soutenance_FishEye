// TEST AU DESSUS

//fonctions de tri des médias (popularité, et titre)
export function sortByPopularity(medias) {
  return medias.sort((a, b) => b.likes - a.likes);
}

export function sortByTitle(medias) {
  return medias.sort((a, b) => a.title.localeCompare(b.title));
}

export function sortByDate(medias) {
  return medias.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function handleSortChange(
  event,
  currentPhotographer,
  currentMedias,
  displayPhotographerMedia
) {
  // on stocke la valeur sélectionnée
  const selectedOption = event.target.value;

  let sortedMedias;
  if (selectedOption === "popularity") {
    sortedMedias = sortByPopularity(currentMedias);
  } else if (selectedOption === "title") {
    sortedMedias = sortByTitle(currentMedias);
  } else if (selectedOption === "date") {
    sortedMedias = sortByDate(currentMedias);
  }

  displayPhotographerMedia(currentPhotographer, sortedMedias);
}
