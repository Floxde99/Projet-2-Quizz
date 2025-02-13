const prompt = require("prompt-sync")()
const quiz = [
    {
        titre: "Quand Thomas commence un design, il se dit toujours :",
        propositions: [
            "1- Un fond dégradé arc-en-ciel, avec des bordures en pixels et des ombres multicolores !",
            "2- On va faire ça propre, simple, et classe, comme un site de banque",
            "3- Je vais faire un design soigné, en pensant à l'utilisateur",
            "4- Je vais utiliser des couleurs neutres et des espaces blancs pour que ça respire"
            
        ],
        reponse: [1," Un fond dégradé arc-en-ciel, avec des bordures en pixels et des ombres multicolores !"],
        phraseReponse: "Thomas, le fond arc-en-ciel c’est super… sauf si tu veux que tes visiteurs aient une crise d’épilepsie ! 😜"
    },
    {
        titre: "Thomas, quand il pense à l’UX, il se dit :",
        propositions: [
            "1- Un bouton ici, un bouton là, tout sera fluide",
            "2- Je vais transformer ce site en une machine à café !",
            "3- Je vais mettre un pop-up sur chaque page pour dire ‘Bienvenue’ à chaque clic, comme ça personne ne se sent perdu !",
            "4- On va mettre un bouton ‘exit’ sur chaque page pour sauver les utilisateurs"
            
        ],
        reponse: [3," Je vais mettre un pop-up sur chaque page pour dire ‘Bienvenue’ à chaque clic, comme ça personne ne se sent perdu !"],
        phraseReponse: "Bien sûr, qui n’aime pas un pop-up toutes les 3 secondes pour lui dire “Bienvenue” ? Un vrai rêve pour l'UX ! 😆"
    },
    {
        titre: "Quand Thomas veut vraiment impressionner avec son design, il se dit :",
        propositions: [
            "1- Je vais faire ça avec des typographies hyper stylées, des combinaisons de couleurs audacieuses et des effets de texte éclatants",
            "2- Je vais prendre un design tout en noir et blanc pour que ça ait l’air hyper pro, et un peu triste",
            "3- Je vais simplement remplir la page de contenu et espérer que ça fasse un impact",
            "4- Un fond texturé de pizza, avec des boutons qui font ‘plop’ quand tu cliques dessus !"
        ],
        reponse: [4," Un fond texturé de pizza, avec des boutons qui font ‘plop’ quand tu cliques dessus !"],
        phraseReponse: "Parce qu’évidemment, rien ne dit ‘design professionnel’ comme une bonne vieille pizza en fond et des boutons qui font \"plop\" ! 🍕😂"
    },
    {
        titre: "Quand il fait un design, Thomas aime :",
        propositions: [
            "1- Tester et valider les choix visuels pour optimiser l'expérience utilisateur",
            "2- Ajouter un gif animé de chat qui danse sur chaque page",
            "3- Utiliser une mise en page élégante qui met en valeur le contenu",
            "4- Créer une interface épurée avec des éléments bien espacés"
           
        ],
        reponse: [2," Ajouter un gif animé de chat qui danse sur chaque page"],
        phraseReponse: "Thomas, tu vois, on te le dit : tout est mieux avec un chat qui danse !"
    },
    {
        titre: "En ce qui concerne le choix des couleurs, Thomas pense toujours à :",
        propositions: [
            "1- Il faut que ça soit cohérent avec l’image de la marque",
            "2- Pourquoi pas un fond vert fluo avec du texte rose, ça attire l’œil, non ?",
            "3- Je vais choisir des tons neutres pour un site professionnel et élégant",
            "4- Un peu de bleu, un peu de gris, et on a un design sobre et moderne"
        ],
        reponse: [2," Pourquoi pas un fond vert fluo avec du texte rose, ça attire l’œil, non ?"],
        phraseReponse: "Thomas, le vert fluo et le rose, vraiment ? C’est de l'art… mais peut-être pas du design 😆"
    }
];

let result=0
console.log("Bienvenue dans le super quizz spécial Thomas");
console.log("Si tu le connais bien tu vas être le meilleur à ce jeux");


for (let i = 0; i < 5; i++) {
    console.log(game(quiz[i].titre,quiz[i].propositions,quiz[i].reponse,quiz[i].phraseReponse));
}
 console.log("Partie terminée tu as " + result + " points");
 console.log("Donc maintenant tu as compris va voir Brendan il est meileur!!");
 console.log("© Moi");
 
 

function game( titre, propositions,reponse,phraseReponse) {
    console.log(titre);
    for (let i = 0; i < propositions.length; i++) {
        console.log(propositions[i]);
    }
    let choice = Number(prompt(" Ta réponse est la réponse n° "))
    while (choice != 1 && choice != 2 && choice != 3 && choice != 4) {
        choice = Number(prompt("Il n'y a que 4 proposition espèce de con "))
    }
    if (choice == reponse[0]) {
        console.log("la Bonne réponse est: ", reponse[1]);
        console.log(phraseReponse);
        console.log("Bravo!! Tu as trouvé");
        result++
    } else {
        console.log("la Bonne réponse est: ", reponse[1]);
        console.log(phraseReponse);
        console.log("Dommage tu as perdu..");
    }
    return result
}