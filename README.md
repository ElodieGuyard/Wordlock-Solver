🧠 Projet : Wordlock Solver

# 🔐 Wordlock Solver

Ce projet est un solveur de mots basé sur un mécanisme de "cadenas à lettres" utilisé dans un jeu vidéo.  
L'objectif est de générer toutes les combinaisons possibles à partir d'une série de colonnes de lettres, et de trouver lesquelles forment des mots valides du dictionnaire anglais.

## 📂 Contenu du dépôt

- `solver_bruteforce.js` — version initiale, non récursive, avec des boucles imbriquées.
- `solver_recursive.js` — version optimisée avec une fonction récursive.
- `words_dictionary.json` — fichier JSON contenant une liste de mots anglais (format : `{ "apple": 1, "banana": 1, ... }`).

## 🚀 Installation

1. Cloner le projet :
   ```bash
   git clone https://github.com/ton-pseudo/wordlock-solver.git
   cd wordlock-solver

    Installer Node.js si ce n’est pas déjà fait :
    👉 https://nodejs.org/

    Ajouter un fichier words_dictionary.json contenant un dictionnaire de mots anglais.
    Exemple de source :

        github.com/dwyl/english-words

    Exécuter un des solveurs :

    node solver_recursive.js

🛠 Fonctionnement

Chaque colonne représente une position dans le mot à former. Le programme génère toutes les combinaisons possibles en prenant une lettre par colonne, dans l'ordre, et vérifie si le mot existe dans le dictionnaire.
Exemple

let col1 = ["B", "W", "F", "P", "T", "S", "C", "D"];
let col2 = ["R", "L", "C", "O", "A", "H", "I", "E"];
...

Donnera des mots comme :
brack, tried, scorn, etc.
(s'ils existent dans le dictionnaire)
🔁 Versions

    solver_bruteforce.js : version avec boucles for imbriquées, simple mais peu flexible.

    solver_recursive.js : version récursive plus modulaire, réutilisable avec n’importe quelle grille de colonnes.

📈 Optimisations futures

    💡 Phonotactics filtering : limiter la recherche aux combinaisons phonologiquement possibles en anglais.

    🔍 Ajout d’un préfiltrage par préfixes (tries ou trie pruning).

    ⏱ Ajout de timers pour mesurer la performance.

🔗 Ressources

    Dictionnaire utilisé : dwyl/english-words

    Phonotactique anglaise (à explorer) :

        Wikipedia: English phonotactics

        Google Scholar - English phonotactic constraints

🧑‍💻 Auteur

Ce projet a été développé par Elodie Guyard comme outil d'entraînement à la programmation, et pour résoudre un casse-tête d'un jeu vidéo ! (spoiler, ça n'a pas aidé pour le jeu, mais coder ce projet était fun)