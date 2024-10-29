// import { getPhotographers } from "../utils/data.js";

// document.addEventListener("DOMContentLoaded", async () => {
//   //on vient regarder dans l'url le param id
//   const paramUrl = new URLSearchParams(window.location.search);
//   console.log(paramUrl);
//   const idPhotograh = paramUrl.get("id");
//   console.log(idPhotograh);

//   const contactModal = document.getElementById("contact_button");
//   contactModal.addEventListener("click", displayModal);

//   const crossModal = document.getElementById("cross-close");
//   crossModal.addEventListener("click", closeModal);

//   // Ajouter l'écouteur d'événements pour la touche "Escape"
//   document.addEventListener("keydown", (event) => {
//     if (event.key === "Escape") {
//       closeModal();
//     }
//   });

//   //si un id est trouvé
//   if (idPhotograh) {
//     //on lance le fetch photographers
//     const photographers = await getPhotographers();
//     console.log(photographers); //ok
//     //on vient trouver dans photographers, l'id qui correspond à l'id de l'url
//     const photographer = photographers.photographers.find(
//       (photograph) => photograph.id == idPhotograh
//     );

//     const header = document.querySelector(".modal_header");
//     const h2 = document.createElement("h2");
//     h2.classList.add("header_title");
//     h2.innerHTML = `Contactez-Moi <br> ${photographer.name}`;
//     header.insertBefore(h2, header.querySelector(".cross"));
//   }

//   //écouteur d'event sur le formulaire
//   const form = document.querySelector("#contact_modal form");
//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     //récup des données saisies sur le formulaire
//     const prenom = document.getElementById("prenom").value;
//     const nom = document.getElementById("nom").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     //Affichage des valeurs dans la console
//     console.log(`Prénom: ${prenom}`);
//     console.log(`Nom: ${nom}`);
//     console.log(`Email: ${email}`);
//     console.log(`Message: ${message}`);
//     closeModal();
//   });
// });

// function closeModal() {
//   const main = document.getElementById("main");
//   main.setAttribute("aria-hidden", "false");
//   const modal = document.getElementById("contact_modal");
//   modal.setAttribute("aria-hidden", "true");
//   modal.style.display = "none";
//   const body = document.body;
//   body.classList.remove("no-scroll");
// }

// function displayModal() {
//   const main = document.getElementById("main");
//   main.setAttribute("aria-hidden", "true");
//   const modal = document.getElementById("contact_modal");
//   modal.setAttribute("aria-hidden", "false");
//   const body = document.body;
//   body.classList.add("no-scroll");
//   modal.style.display = "block";
//   const firstInput = modal.querySelector("input");
//   //on met le focus sur le premier input
//   firstInput.focus();
// }

// Si on veut ajouter des validations sur le formulaire

import { getPhotographers } from "../utils/data.js";

document.addEventListener("DOMContentLoaded", async () => {
  // on vient regarder dans l'url le param id
  const paramUrl = new URLSearchParams(window.location.search);
  const idPhotograh = paramUrl.get("id");

  const contactModal = document.getElementById("contact_button");
  contactModal.addEventListener("click", displayModal);

  const crossModal = document.getElementById("cross-close");
  crossModal.addEventListener("click", closeModal);

  // Ajouter l'écouteur d'événements pour la touche "Escape"
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  // si un id est trouvé
  if (idPhotograh) {
    // on lance le fetch photographers
    const photographers = await getPhotographers();
    const photographer = photographers.photographers.find(
      (photograph) => photograph.id == idPhotograh
    );

    const header = document.querySelector(".modal_header");
    const h2 = document.createElement("h2");
    h2.classList.add("header_title");
    h2.innerHTML = `Contactez-Moi <br> ${photographer.name}`;
    header.insertBefore(h2, header.querySelector(".cross"));
  }

  // Écouteur d'event sur le formulaire
  const form = document.querySelector("#contact_modal form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Récupération des données saisies dans le formulaire
    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Initialisation de la variable de validation
    let isValid = true;

    // Validation Prénom
    if (prenom.length < 2) {
      isValid = false;
      displayError("prenom", "Le prénom doit contenir au moins 2 caractères.");
    } else {
      clearError("prenom");
    }

    // Validation Nom
    if (nom.length < 2) {
      isValid = false;
      displayError("nom", "Le nom doit contenir au moins 2 caractères.");
    } else {
      clearError("nom");
    }

    // Validation Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      displayError("email", "Veuillez entrer un email valide.");
    } else {
      clearError("email");
    }

    // Validation Message (minimum 2 mots)
    const wordCount = message.split(" ").filter((word) => word).length;
    if (wordCount < 2) {
      isValid = false;
      displayError("message", "Le message doit contenir au moins deux mots.");
    } else {
      clearError("message");
    }

    // Soumission si toutes les validations sont réussies
    if (isValid) {
      console.log(`Prénom: ${prenom}`);
      console.log(`Nom: ${nom}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
      closeModal();
    }
  });
});

// Fonctions d'affichage et de suppression des erreurs
function displayError(inputId, message) {
  const inputElement = document.getElementById(inputId);
  let errorElement = inputElement.nextElementSibling;

  // Création de l'élément d'erreur s'il n'existe pas
  if (!errorElement || !errorElement.classList.contains("error-message")) {
    errorElement = document.createElement("span");
    errorElement.classList.add("error-message");
    inputElement.parentNode.insertBefore(
      errorElement,
      inputElement.nextSibling
    );
  }

  // Message d'erreur
  errorElement.textContent = message;
}

function clearError(inputId) {
  const inputElement = document.getElementById(inputId);
  const errorElement = inputElement.nextElementSibling;

  // Suppression du message d'erreur
  if (errorElement && errorElement.classList.contains("error-message")) {
    errorElement.remove();
  }
}

function closeModal() {
  const main = document.getElementById("main");
  main.setAttribute("aria-hidden", "false");
  const modal = document.getElementById("contact_modal");
  modal.setAttribute("aria-hidden", "true");
  modal.style.display = "none";
  document.body.classList.remove("no-scroll");
}

function displayModal() {
  const main = document.getElementById("main");
  main.setAttribute("aria-hidden", "true");
  const modal = document.getElementById("contact_modal");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  modal.style.display = "block";
  const firstInput = modal.querySelector("input");
  // Met le focus sur le premier input
  firstInput.focus();
}
