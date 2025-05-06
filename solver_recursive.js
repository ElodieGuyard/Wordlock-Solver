import fs from 'fs';

//*********************** Lecture et traitement du fichier dictionnaire **************************/
//Lecture du fichier JSON
const file = fs.readFileSync('C:/Users/Elodi/Documents/JS/DictionarySolver/words_dictionary.json', 'utf-8');
//Parser les données récoltées
const obj = JSON.parse(file);
// Convertir les clés du dictionnaire en un Set pour une recherche rapide
const dictionarySet = new Set(Object.keys(obj));
//************************************************************************************************/

//******************* Définition des lettres du cadenas à lettres ****************************** */
let col1 = ["B", "W", "F", "P", "T", "S", "C", "D"];
let col2 = ["R", "L", "C", "O", "A", "H", "I", "E"];
let col3 = ["A", "E", "I", "O", "U", "R", "N", "T"];
let col4 = ["D", "C", "M", "N", "R", "A", "E", "I"];
let col5 = ["T", "D", "K", "E", "R", "S", "N", "A"];

let matrix = [col1, col2, col3, col4, col5];
//************************************************************************************************/
let count = 0;

// fonction recursive
function solver(matrix, currentColumn, currentWord) {

    //Nombre de lettres possibles pour chaques colonnes
    let numberOfLettersPerColumn = matrix[0].length;
    //le nombre de boucle qu'on va faire dépends du nombre de colonnes du cadenas
    let numberOfColumns = matrix.length;

    // condition d'arrêt
    if(currentColumn <= numberOfColumns-1) {
        let newWord ="";

        for (let i=0; i<numberOfLettersPerColumn; i++){
            newWord = currentWord + matrix[currentColumn][i];
            // Vérifier si le mot existe dans le dictionnaire
            if (dictionarySet.has(newWord.toLowerCase())&& newWord.length == numberOfColumns){
                count += 1;
                console.log("dictionary match", newWord, "number =", count);
            }
        // appel de solver pour passer à la colonne suivante avec le mot actuel construit
        solver(matrix, currentColumn+1, newWord);
        }
    } else {
        // termine l'execution de la fonction
        return;
    };
};
// accès à la fonction
solver(matrix,0,"");