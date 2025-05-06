import fs from 'fs';

let col1 = ["B", "W", "F", "P", "T", "S", "C", "D"]
let col2 = ["R", "L", "C", "O", "A", "H", "I", "E"]
let col3 = ["A", "E", "I", "O", "U", "R", "N", "T"]
let col4 = ["D", "C", "M", "N", "R", "A", "E", "I"]
let col5 = ["T", "D", "K", "E", "R", "S", "N", "A"]

// Lire le fichier JSON
const file = fs.readFileSync('C:/Users/Elodi/Documents/JS/DictionarySolver/words_dictionary.json', 'utf-8');

const obj = JSON.parse(file);

// Convertir les clés du dictionnaire en un Set pour une recherche rapide
const dictionarySet = new Set(Object.keys(obj));

let tempWord = "";

for (let i=0; i< col1.length; i++){

    for (let j=0; j<col2.length; j++){

        for (let k=0; k<col3.length; k++){

            for (let l=0; l<col4.length; l++){

                for (let m=0; m<col5.length; m++){

                    tempWord = "";
                    tempWord = col1[i] + col2[j] + col3[k] + col4[l] + col5[m];

                        // Vérifier si le mot existe dans le dictionnaire
                    if (dictionarySet.has(tempWord.toLowerCase())){
                        console.log(tempWord);
                    }
                }        
            }   
        } 
    }  
}
