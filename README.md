# Calculateur d'IMC (Indice de Masse Corporel)

## Description

Ce projet est un calculateur d'IMC simple qui permet aux utilisateurs de saisir leur taille et leur poids pour obtenir leur IMC et une évaluation de leur condition physique.

## Utilisation

1. Ouvrez le fichier `index.html` dans votre navigateur web.
2. Remplissez les champs de taille et de poids.
3. Cliquez sur le bouton de calcul.
4. Les résultats de l'IMC seront affichés sur la page.

## Structure du Projet

imc-calculator/
|-- index.html
|-- css/
| |-- styles.css
|-- js/
| |-- main.js
|-- README.md


- `index.html` : Page principale de l'application.
- `css/styles.css` : Styles CSS pour la mise en page.
- `js/main.js` : Logique JavaScript pour le calcul de l'IMC.

    Explications Commentées

    Sélection des éléments HTML : Les éléments de la page (input, bouton, conteneur de résultats) sont sélectionnés pour manipulation dans le script.

    Fonction calculateIMC :
        Récupère les valeurs de la taille et du poids saisies par l'utilisateur.
        Vérifie si les valeurs sont valides (non-NaN, positives).
        Calcule l'IMC en utilisant la formule : IMC = poids / (taille^2).
        Évalue la condition physique en fonction de l'IMC calculé.
        Affiche les résultats sur la page.

    Écouteur d'événement : Un écouteur d'événement est ajouté au bouton de calcul pour déclencher la fonction calculateIMC lorsqu'il est cliqué.

## Contribution

Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :

1. Fork du projet.
2. Création d'une nouvelle branche (`git checkout -b feature/improvement`).
3. Commit de vos modifications (`git commit -m 'Ajout d'une fonctionnalité'`).
4. Push vers la branche (`git push origin feature/improvement`).
5. Ouvrir une Pull Request.

N'hésitez pas à signaler des problèmes ou à suggérer des améliorations !
