// Ajoute un écouteur d'événements au formulaire lors de la soumission
document.getElementById("quiz-form").addEventListener("submit", function (e) {
  // Empêche le comportement par défaut du formulaire (rechargement de la page)
  e.preventDefault();
  // Met en surbrillance les réponses sélectionnées et affiche l'alerte de résultat
  highlightAnswers();
  showResultAlert();
});

// Fonction pour mettre en surbrillance les réponses correctes et incorrectes
function highlightAnswers() {
  // Sélectionne tous les éléments de question dans le formulaire
  document.querySelectorAll(".question-item").forEach((question) => {
    // Pour chaque question, sélectionne toutes les réponses possibles
    question.querySelectorAll(".answer").forEach((answer) => {
      // Vérifie si la réponse est correcte en fonction de sa valeur
      const isCorrect = answer.value === "true";
      // Trouve l'élément parent le plus proche avec la classe "answer-item"
      const listItem = answer.closest(".answer-item");

      // Ajoute ou supprime les classes "correct" et "incorrect" en fonction de l'état de la réponse
      listItem.classList.toggle("correct", answer.checked && isCorrect);
      listItem.classList.toggle("incorrect", answer.checked && !isCorrect);

      // Si la réponse n'est pas cochée, supprime les classes "correct" et "incorrect"
      if (!answer.checked) {
        listItem.classList.remove("correct", "incorrect");
      }
    });
  });
}

// Fonction pour afficher l'alerte de résultat
function showResultAlert() {
  // Sélectionne l'élément de l'alerte
  const alertBox = document.getElementById("alert");
  // Compte le nombre de réponses correctes parmi toutes les réponses
  const correctAnswerCount = Array.from(
    document.querySelectorAll(".answer-item")
  ).filter((item) => item.classList.contains("correct")).length;

  // Affiche ou masque l'alerte en fonction du nombre de réponses correctes
  alertBox.style.display = correctAnswerCount === 3 ? "block" : "none";
}
