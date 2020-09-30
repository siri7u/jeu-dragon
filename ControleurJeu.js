/** CONTROLEUR DU JEU **/

/** Saisies Joueur **/
function creeControleur(){

    let estSaut = false;

    //Fleche gauche appuyée
    if(keyIsDown(LEFT_ARROW)){

        //1 en entrée car droite
        deplaceLatteralement(1);

    }
    //Fleche gauche relachée
    if(keyWentUp(LEFT_ARROW)){
    
        dragon.etat = 'Normal' + dragon.skin;
        dragon.changeAnimation('Normal' + dragon.skin);

    }
    //Fleche droite appuyée
    if(keyIsDown(RIGHT_ARROW)){

        //-1 en entrée car gauche
        deplaceLatteralement(-1);

    }
    //Fleche droite relachée
    if(keyWentUp(RIGHT_ARROW)){

        dragon.etat = 'Normal' + dragon.skin;
        dragon.changeAnimation('Normal' + dragon.skin);

    }

    //Fleche haute appuyée
    if(keyWentDown(UP_ARROW)){

        //Si il n'est pas en train de sauter et qu'il est en contact avec une plateforme
        if((estSaut == false) && (dragon.touching.bottom)){

            //Saut sur une demi seconde
            for(let i=0; i<500; i+=10)
            setTimeout(function(){dragon.position.y -= 7}, i);


        }
        estSaut = true;
    }

    //Fleche bas appuyée
    if(keyWentDown(DOWN_ARROW)){

        //Si le dragon est devant un téléporteur, on le téléporte
        dragon.overlap(teleporteurs, teleporter);

    }

    //Barre d'espace appuyée
    if(keyIsDown(32)){

        //Création d'une boule de feu
        creeBouleDeFeu();

    }

    //Touche S : changer de skin
    if(keyWentDown(83)){

        //Changement de skin
        changeSkin();

    }

}

/** FONCTIONS DE DEPLACEMENTS **/

/** Fonction déplacements lattéraux : -1 pour gauche, 1 pour droite **/
function deplaceLatteralement(sens){

    //Affectation de la variable
    dragon.sens = sens;
    //dragon.position.x += dragon.vitesse;
    dragon.mirrorX(sens);
    //Collision personnalisée déplacement droite
    dragon.setCollider('rectangle', -10, 0, 80, 170);

    //Changement d'animation
    dragon.changeAnimation('Marche' + dragon.skin);
    //Affection du changement d'animation
    dragon.etat = 'Marche' + dragon.skin;

    if(sens==-1){
        dragon.position.x = ecranX/2;
        dragon.posMulti += dragon.vitesse;
    }
    else{
        dragon.position.x = ecranX/2;
        dragon.posMulti -= dragon.vitesse;
    }
    
    deplaceTous(sens * dragon.vitesse, 0);
    //Déplacement des joueurs
    deplaceGroupe(joueurs, 0, 0);
    

}

/** Déplace toutes les entités devant être déplacées de nbDeplace **/
function deplaceTous(nbDeplace){

    //Deplacements elements

    //Déplacement des plateformes
    deplaceGroupe(plateformes, nbDeplace, 0);
    //Déplacement des ennemis
    deplaceGroupe(ennemis, nbDeplace, 0);
    //Déplacement des téléporteurs
    deplaceGroupe(teleporteurs, nbDeplace, 0);

    //Déplacement du fond montagne
    deplace(fond, nbDeplace/20, 0);
    //Déplacement du fond magique
    deplace(fondMagique, nbDeplace, 0);

}

/** Permet de switcher entre les skins **/
function changeSkin(){

    //Détermine l'indice du prochain élément
    if(actuelSkin + 1 >= tabSkins.length)
        actuelSkin = 0;
    else
        actuelSkin++;

    //Changement de skin
    dragon.skin = tabSkins[actuelSkin];

    dragon.changeAnimation('Normal' + dragon.skin);

}