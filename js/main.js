// Sélection des éléments HTML nécessaires
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateButton = document.getElementById('calculate');
const resultContainer = document.getElementById('result');

console.log(heightInput);

//Fonction pour calculer l'IMC
function calculateIMC() {
    // Récupération des valeur saisie par l'utilisateur ".value" et transformation de la valeur en nombre flotant
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    console.log(height);

    // Vérification si les valeurs sont valides (si ce sont des nombres et si ils sont positifs)
    if (isNaN(height) || isNaN(weight) || height <=0 || weight <=0) {
        alert('Veuillez saisir des valeurs valides pour la taille et le poids');
        return;
    }

    // Calcul de l'IMC (poids * taille^2)
    const imc = weight / Math.pow(height, 2);

    // Evaluation du résultat du calcul : estimation de la condition physique
        // J'initialise une variable pour le résultat de la comparaison
    let evaluation ='';
        // Je compare imc à l'échelle d'évaluation de l'IMC
    if (imc < 18.5) {
        evaluation = 'Insuffisance pondérale';
    } else if (imc >= 18.5 && imc < 24.9) {
        evaluation = 'Poids normal';
    } else if (imc >= 24.9 && imc < 29.9) {
        evaluation = 'Surpoids';
    } else {
        evaluation = 'Obésité';
    }

    // Affichage du résultat à l'endroit choisi sur la page
    resultContainer.innerHTML = `
        <p>Votre IMC est : <strong>${imc.toFixed(2)}</stong></p>
        <p>Evaluation : <strong>${evaluation}</stong></p>
        `
}

// Ecouter d'évènement pour le bouton calcul
calculateButton.addEventListener('click', calculateIMC);