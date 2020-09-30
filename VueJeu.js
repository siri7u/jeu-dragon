function preload(){

    //Affichage des personnages
    creePersonnages();
    //Cree les zones de saisie
    creeZoneSaisieNom(0, 0);

}

function setup(){

    /** Lien serveur **/
    connectionServeur();
    messageServeur("CONNECTE");
    recoitServeur();

}

function draw(){

    //Affichage des décors
    creeDecor();
    //Actualisation de l'état des personnages
    actualisePersonnages();
    //Initialisation des controles
    creeControleur();
    //Verifie si mort ou non
    gameOver();
    //Envoie les coordonnees du dragon
    envoiCoordonnees(dragon.posMulti, dragon.position.y, dragon.etat, dragon.sens, dragon.msg, dragon.skin);
    //Génère les autres joueurs
    autresJoueurs();
    //Affiche le texte du joueur
    afficheTexteJoueur(dragon.msg, dragon);

}

/** EVENEMENTS **/

/** Determine si le joueur est mort **/
function gameOver(){

    /** Mort du a une collision ou une chute hors ecran **/
    if(dragon.overlap(ennemis) || dragon.position.y > ecranY + 200){

        deplaceTous(dragon.posMulti - dragon.apparitionX);
        //On le teleporte au début
        dragon.posMulti = dragon.apparitionX;
        dragon.position.y = dragon.apparitionY;

    }

}