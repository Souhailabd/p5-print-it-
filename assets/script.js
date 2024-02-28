// Définition des diapositives avec les images et les taglines
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Sélection des éléments DOM pour les flèches gauche et droite, les points indicateurs, l'image et la tagline
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const imageSlide = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");

// Définition des indices pour la première et dernière diapositive
const lastSlide = slides.length - 1;
const firstSlide = 0;

// URL de base pour les images des diapositives
const baseUrl = "./assets/images/slideshow/";

// Initialisation des variables
let allDots;
let index = 0;

// Ajout des écouteurs d'événements pour les flèches gauche et droite
arrowLeft.addEventListener("click", function() {
    console.log("J'ai cliqué sur la flèche gauche");
});

arrowRight.addEventListener("click", function() {
    console.log("J'ai cliqué sur la flèche droite");
});

// Fonction principale
function main() {
    initDots(); // Initialise les points indicateurs
    prevSlide(); // Définit l'événement pour la flèche gauche
    nextSlide(); // Définit l'événement pour la flèche droite
}

main(); // Appelle la fonction principale pour démarrer le script

// Fonction pour initialiser les points indicateurs
function initDots() {
    for (let i = 0; i < slides.length; i++) {
        // Crée un élément div pour chaque point indicateur
        const dot = document.createElement("div");
        dot.className = "dot"; // Ajoute la classe "dot" à l'élément div
        dots.appendChild(dot); // Ajoute l'élément div comme enfant de l'élément avec la classe "dots"
    }
    allDots = document.querySelectorAll(".dot"); // Sélectionne tous les points indicateurs
    allDots[index].classList.add("dot_selected"); // Met le premier point indicateur en surbrillance
}

// Fonction pour passer à la diapositive précédente
function prevSlide() {
    arrowLeft.addEventListener("click", () => {
        // Modifie la diapositive au clic sur la flèche gauche
        allDots[index].classList.remove("dot_selected"); // Désélectionne le point indicateur actuel
        if (index === 0) {
            index = lastSlide; // Si c'est la première diapositive, passe à la dernière
        } else {
            index--; // Sinon, passe à la diapositive précédente
        }
        allDots[index].classList.add("dot_selected"); // Sélectionne le nouveau point indicateur
        updateContentSlide(); // Met à jour le contenu de la diapositive affichée
    });
}

// Fonction pour passer à la diapositive suivante
function nextSlide() {
    arrowRight.addEventListener("click", () => {
        // Modifie la diapositive au clic sur la flèche droite
        allDots[index].classList.remove("dot_selected"); // Désélectionne le point indicateur actuel
        if (index === lastSlide) {
            index = firstSlide; // Si c'est la dernière diapositive, passe à la première
        } else {
            index++; // Sinon, passe à la diapositive suivante
        }
        allDots[index].classList.add("dot_selected"); // Sélectionne le nouveau point indicateur
        updateContentSlide(); // Met à jour le contenu de la diapositive affichée
    });
}

// Fonction pour mettre à jour le contenu de la diapositive affichée
function updateContentSlide() {
    imageSlide.src = baseUrl + slides[index].image; // Met à jour l'image de la diapositive
    tagLine.innerHTML = slides[index].tagLine; // Met à jour la tagline de la diapositive
}
