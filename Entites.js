/** Déplace un objet selon un x et un y **/
function deplace(objet, x, y){

    objet.position.x += x;
    objet.position.y += y;

}

/** Déplace un groupe d'objets de x et y **/
function deplaceGroupe(groupe, x, y){

    for(let i=0; i<groupe.length; i++){

        deplace(groupe[i], x, y);

    }

}

/** FONCTIONS DE CREATION **/

/** Crée un personnage jouable selon un x et un y **/
function creeDragonJoueur(x, y){

    //Sprite du dragon
    dragon = createSprite(x, y);

    //Point d'apparition
    dragon.apparitionX = x;
    dragon.apparitionY = y;
    //Vitesse du dragon
    dragon.vitesse = 5;
    //Etat du dragon : animation à jouer
    dragon.etat = 'Normal';
    //Sens du dragon : -1 pour gauche, 1 pour droite
    dragon.sens = 1;
    //Position X multijoueur
    dragon.posMulti = x;
    //Skin du dragon
    dragon.skin = '';

    /** CREATION ANIMATIONS **/

    //Action de ne rien faire
    dragon.addAnimation('Normal', 'assets/img/dragon-joueur/dragon-normal.png');
    //Action de manger de il'image
    dragon.addAnimation('Mange', 'assets/img/dragon-joueur/dragon.png', 'assets/img/dragon-joueur/dragon.png', 'assets/img/dragon-joueur/dragon.png', 'assets/img/dragon-joueur/dragon.png', 'assets/img/dragon-joueur/dragon.png', 'assets/img/dragon-joueur/dragon.png', 'assets/img/dragon-joueur/dragon.png', 'assets/img/dragon-joueur/dragon.png', 'assets/img/dragon-joueur/dragon.png', 'assets/img/dragon-joueur/dragon.png', 'assets/img/dragon-joueur/dragon.png', 'assets/img/dragon-joueur/dragon.png', 'assets/img/dragon-joueur/dragon.png', 'assets/img/dragon-joueur/dragon-2.png');
    //Action de sauter
    dragon.addAnimation('Saute', 'assets/img/dragon-joueur/dragon-saut.png', 'assets/img/dragon-joueur/dragon-saut-2.png', 'assets/img/dragon-joueur/dragon-saut-3.png', 'assets/img/dragon-joueur/dragon-saut-4.png');
    //Action de marcher
    dragon.addAnimation('Marche', 'assets/img/dragon-joueur/dragon-marche.png', 'assets/img/dragon-joueur/dragon-marche-2.png', 'assets/img/dragon-joueur/dragon-marche-3.png', 'assets/img/dragon-joueur/dragon-marche-4.png');
    //Action de marcher
    dragon.addAnimation('OuvreBouche', 'assets/img/dragon-joueur/dragon-2.png');
    //Ajout Skin de base
    tabSkins.push('');

    /** SKINS **/
    
    /** Fantome **/

    //Normal
    dragon.addAnimation('NormalFantome', 'assets/img/skins/fantome/fantome.png');
    //Marche
    dragon.addAnimation('MarcheFantome', 'assets/img/skins/fantome/fantome-marche1.png', 'assets/img/skins/fantome/fantome-marche2.png');
    //Ouvre la bouche
    dragon.addAnimation('OuvreBoucheFantome', 'assets/img/skins/fantome/fantome-marche1.png');
    //Ajout Skin Fantome
    tabSkins.push('Fantome');

    /** Taupe **/

    //Normal
    dragon.addAnimation('NormalTaupe', 'assets/img/skins/taupe/taupe-normal.png');
    //Marche
    dragon.addAnimation('MarcheTaupe', 'assets/img/skins/taupe/taupe-marche1.png', 'assets/img/skins/taupe/taupe-marche2.png');
    //Ouverture de la bouche
    dragon.addAnimation('OuvreBoucheTaupe', 'assets/img/skins/taupe/taupe-marche1.png');
    //Ajout Skin Taupe
    tabSkins.push('Taupe');

    /** Poulet **/

    //Normal
    dragon.addAnimation('NormalPoulet', 'assets/img/skins/poulet/poulet.png');
    //Marche
    dragon.addAnimation('MarchePoulet', 'assets/img/skins/poulet/poulet-marche2.png', 'assets/img/skins/poulet/poulet-marche1.png');
    //Ouverture de la bouche
    dragon.addAnimation('OuvreBouchePoulet', 'assets/img/skins/poulet/poulet-tir.png');
    //Ajout Skin Poulet
    tabSkins.push('Poulet');

    
    /** Loic **/

    //Normal
    dragon.addAnimation('NormalLoic', 'assets/img/skins/loic/loic.png');
    //Marche
    dragon.addAnimation('MarcheLoic', 'assets/img/skins/loic/loic-marche1.png', 'assets/img/skins/loic/loic-marche1.png', 'assets/img/skins/loic/loic-marche2.png', 'assets/img/skins/loic/loic-marche2.png', 'assets/img/skins/loic/loic-marche3.png', 'assets/img/skins/loic/loic-marche3.png', 'assets/img/skins/loic/loic-marche4.png', 'assets/img/skins/loic/loic-marche4.png', 'assets/img/skins/loic/loic-marche5.png', 'assets/img/skins/loic/loic-marche5.png');
    //Ouverture de la bouche
    dragon.addAnimation('OuvreBoucheLoic', 'assets/img/skins/loic/loic-tir.png');
    //Ajout Skin Poulet
    tabSkins.push('Loic');

}

/** Crée un personnage observable selon un x et un y **/
function creeDragonMulti(id, x, y, etat, sens, skin){

        
    //Sprite du dragon
    joueur = createSprite(x, y);

    /** CREATION ANIMATIONS **/

    //Action de ne rien faire
    joueur.addAnimation('Normal', 'assets/img/dragon-multi/dragon-normal.png');
    //Action de manger de il'image
    joueur.addAnimation('Mange', 'assets/img/dragon-multi/dragon.png', 'assets/img/dragon-multi/dragon.png', 'assets/img/dragon-multi/dragon.png', 'assets/img/dragon-multi/dragon.png', 'assets/img/dragon-multi/dragon.png', 'assets/img/dragon-multi/dragon.png', 'assets/img/dragon-multi/dragon.png', 'assets/img/dragon-multi/dragon.png', 'assets/img/dragon-multi/dragon.png', 'assets/img/dragon-multi/dragon.png', 'assets/img/dragon-multi/dragon.png', 'assets/img/dragon-multi/dragon.png', 'assets/img/dragon-multi/dragon.png', 'assets/img/dragon-multi/dragon-2.png');
    //Action de sauter
    joueur.addAnimation('Saute', 'assets/img/dragon-multi/dragon-saut.png', 'assets/img/dragon-multi/dragon-saut-2.png', 'assets/img/dragon-multi/dragon-saut-3.png', 'assets/img/dragon-multi/dragon-saut-4.png');
    //Action de marcher
    joueur.addAnimation('Marche', 'assets/img/dragon-multi/dragon-marche.png', 'assets/img/dragon-multi/dragon-marche-2.png', 'assets/img/dragon-multi/dragon-marche-3.png', 'assets/img/dragon-multi/dragon-marche-4.png');
    //Action de marcher
    joueur.addAnimation('OuvreBouche', 'assets/img/dragon-multi/dragon-2.png');
    /** SKINS **/
    
    /** Fantome **/

    //Normal
    joueur.addAnimation('NormalFantome', 'assets/img/skins/fantome/fantome.png');
    //Marche
    joueur.addAnimation('MarcheFantome', 'assets/img/skins/fantome/fantome-marche1.png', 'assets/img/skins/fantome/fantome-marche2.png');
    //Ouvre la bouche
    joueur.addAnimation('OuvreBoucheFantome', 'assets/img/skins/fantome/fantome-marche1.png');

    /** Taupe **/

    //Normal
    joueur.addAnimation('NormalTaupe', 'assets/img/skins/taupe/taupe-normal.png');
    //Marche
    joueur.addAnimation('MarcheTaupe', 'assets/img/skins/taupe/taupe-marche1.png', 'assets/img/skins/taupe/taupe-marche2.png');
    //Ouverture de la bouche
    joueur.addAnimation('OuvreBoucheTaupe', 'assets/img/skins/taupe/taupe-marche1.png');

    /** Poulet **/

    //Normal
    joueur.addAnimation('NormalPoulet', 'assets/img/skins/poulet/poulet.png');
    //Marche
    joueur.addAnimation('MarchePoulet', 'assets/img/skins/poulet/poulet-marche2.png', 'assets/img/skins/poulet/poulet-marche1.png');
    //Ouverture de la bouche
    joueur.addAnimation('OuvreBouchePoulet', 'assets/img/skins/poulet/poulet-tir.png');

    /** Loic **/

    //Normal
    joueur.addAnimation('NormalLoic', 'assets/img/skins/loic/loic.png');
    //Marche
    joueur.addAnimation('MarcheLoic', 'assets/img/skins/loic/loic-marche1.png', 'assets/img/skins/loic/loic-marche1.png', 'assets/img/skins/loic/loic-marche2.png', 'assets/img/skins/loic/loic-marche2.png', 'assets/img/skins/loic/loic-marche3.png', 'assets/img/skins/loic/loic-marche3.png', 'assets/img/skins/loic/loic-marche4.png', 'assets/img/skins/loic/loic-marche4.png', 'assets/img/skins/loic/loic-marche5.png', 'assets/img/skins/loic/loic-marche5.png');
    //Ouverture de la bouche
    joueur.addAnimation('OuvreBoucheLoic', 'assets/img/skins/loic/loic-tir.png');

    /** ATTRIBUTS DRAGON **/

    //Nom du dragon
    joueur.id = id;
    //Message du dragon
    joueur.msg = "";
    //Vitesse du dragon
    joueur.vitesse = 5;
    //Etat du dragon : animation à jouer
    joueur.etat = etat;
    //Sens du dragon : -1 pour gauche, 1 pour droite
    joueur.sens = sens;
    //Skin du dragon
    joueur.skin = skin;

    //Ajout au groupe de joueurs
    joueurs.add(joueur);

}

/** Crée une plateforme selon un x et un y **/
function creePlateformeGlace(x, y){

    plateformeGlace = createSprite(x, y);
    plateformeGlace.addAnimation('Rien', 'assets/img/plateforme-glace/plateforme-glace.png');
    plateformeGlace.setCollider('rectangle', 0, -60, 250, 0);
    plateformes.add(plateformeGlace);

}

/** Crée un Quentin Mouche selon un x et un y **/
function creePlateformeQuentinMouche(x, y){

    plateformeQuentinMouche = createSprite(x, y);
    plateformeQuentinMouche.addAnimation('Rien', 'assets/img/plateforme-quentin-mouche/quentin-mouche2.png', 'assets/img/plateforme-quentin-mouche/quentin-mouche1.png');
    plateformeQuentinMouche.setCollider('rectangle', 0, -20, 250, 0);
    plateformes.add(plateformeQuentinMouche);

}

/** Crée un nuage rose selon un x et un y **/
function creeNuageRose(x, y){

    nuageRose = createSprite(x, y);            /** REVOIR LA FONCTION CreeDragonMulti **/

    nuageRose.addAnimation('Bave', 'assets/img/nuage-rose/nuage-rose-1.png', 'assets/img/nuage-rose/nuage-rose-2.png', 'assets/img/nuage-rose/nuage-rose-3.png', 'assets/img/nuage-rose/nuage-rose-2.png', 'assets/img/nuage-rose/nuage-rose-1.png');
    nuageRose.setCollider('rectangle', 0, -50, 250, 0);
    plateformes.add(nuageRose);

}

/** Crée un ennemi selon une plateforme **/
function creeEnnemi(plateforme){

    ennemi = createSprite(plateforme.position.x, plateforme.position.y - 127);
    ennemi.addAnimation('Marche', 'assets/img/ennemi/ennemi.png', 'assets/img/ennemi/ennemi.png', 'assets/img/ennemi/ennemi-2.png', 'assets/img/ennemi/ennemi-2.png', 'assets/img/ennemi/ennemi-3.png', 'assets/img/ennemi/ennemi-3.png',  'assets/img/ennemi/ennemi-4.png', 'assets/img/ennemi/ennemi-4.png', 'assets/img/ennemi/ennemi-5.png', 'assets/img/ennemi/ennemi-5.png');
    //Assignation de la plateforme à l'ennemi
    ennemi.plateforme = plateforme;
    ennemis.add(ennemi);

} 


/** Crée un golem selon une plateforme **/
function creeGolem(plateforme){

    golem = createSprite(plateforme.position.x, plateforme.position.y - 127);
    golem.addAnimation('Marche', 'assets/img/golem/golem-1.png', 'assets/img/golem/golem-2.png', 'assets/img/golem/golem-3.png', 'assets/img/golem/golem-4.png', 'assets/img/golem/golem-5.png');
    //Assignation de la plateforme à l'ennemi
    golem.plateforme = plateforme;
    ennemis.add(golem);

}

/** Crée une boule de feu **/
function creeBouleDeFeu(){

    //Si il n'existe pas de boule de feu
    if(bouleDeFeu == null){
        //Ouvre la bouche du dragon
        dragon.changeAnimation('OuvreBouche' + dragon.skin);
        //Création de la boule de feu
        bouleDeFeu = createSprite(dragon.position.x+ dragon.sens * -50 , dragon.position.y-30);
        bouleDeFeu.addAnimation('Deplacement', 'assets/img/boule-de-feu/boule-de-feu.png', 'assets/img/boule-de-feu/boule-de-feu1.png', 'assets/img/boule-de-feu/boule-de-feu2.png', 'assets/img/boule-de-feu/boule-de-feu3.png');
        //Sens de la boule de feu
        bouleDeFeu.sens = dragon.sens;
        bouleDeFeu.mirrorX(-bouleDeFeu.sens)
        //Animation dragon normale
        setTimeout(function(){dragon.changeAnimation('Normal' + dragon.skin);}, 250);
    
    }
}

/** Crée deux téléporteurs depuis deux jeux de coordonnées **/
function creeTeleporteur(departX, departY, arriveeX, arriveeY){

    //Adaptation aux plateformes
    departY = departY - 175;
    arriveeY = arriveeY - 175;
    //Adaptation aux plateformes
    departX = departX + 6;
    arriveeX = arriveeX + 6;
    //Initialisation des coordonnées des deux téléporteurs
    let t1 = createSprite(departX, departY);
    let t2 = createSprite(arriveeX, arriveeY);
    t1.addAnimation('PortailOuvert', 'assets/img/portail-ouvert/portail-ferme.png');
    t2.addAnimation('PortailOuvert', 'assets/img/portail-ouvert/portail-ouvert.png');

    //Association entre les deux téléporteurs
    t1.teleporteX = departX;
    t1.teleporteY = departY;
    t2.teleporteX = departX;
    t2.teleporteY = departY;

    //Définition du rang du téléporteur / Corresponds au placement
    t1.rang = 1;    
    t2.rang = 2;

    //Ajout des téléporteurs dans le groupe associé
    teleporteurs.add(t2);
    teleporteurs.add(t1);

}

/** FONCTIONS DE DEPLACEMENT **/

/** Déplace les ennemis sur leur plateforme **/
function deplaceEnnemis(){

    //Parcours de la liste des ennemis
    for(let i=0; i<ennemis.length; i++){

        //Si ennemi a atteint la limite gauche
        if(ennemis[i].plateforme.position.x - 100 == ennemis[i].position.x){

            ennemiGauche = false;
    
        }
        //Si ennemi a atteint la limite droite
        if(ennemis[i].plateforme.position.x+100 == ennemis[i].position.x){
    
            ennemiGauche = true;
    
        }
        //Vers la gauche
        if(ennemiGauche){
            ennemis[i].mirrorX(-1);
            ennemis[i].position.x -= vitesseEnnemis;
        }
        //Vers la droite
        else{
            ennemis[i].mirrorX(1);
            ennemis[i].position.x += vitesseEnnemis;
        }

    }

}

/** Déplace la boule de feu **/
function deplaceBouleDeFeu(){

    //Si la boule de feu existe
    if(bouleDeFeu!=null){
        //Déplacement de la boule de feu
        bouleDeFeu.position.x += -bouleDeFeu.sens * 6;

        bouleDeFeu.overlap(ennemis, tuer);

        //Si la boule de feu a atteint sa distance max
        if(bouleDeFeu.position.x >= dragon.position.x + 400 || bouleDeFeu.position.x <= dragon.position.x - 400){
            //Destruction de la boule de feu
            bouleDeFeu.remove();
            bouleDeFeu = null;
        }

    }
    

}


/** Supprime une entité **/
function tuer(tueur, tue){

    //Destruction de la boule de feu
    bouleDeFeu.remove();

    //Supprime l'entité
    tue.remove();

}

/** Affiche le texte du client **/
function afficheTexteJoueur(texte, objet){

    //Taille du texte
    textSize(25);
    //Centrage du texte
    textAlign(CENTER, CENTER);
    //Police
    textFont("Impact");
    //Création du texte

    //Si c'est un skin trop grand
    if(objet.skin == 'Loic')
        text(texte, objet.position.x, objet.position.y - 200);
    //Taille standard
    else
        text(texte, objet.position.x, objet.position.y - 100);

}

/** Téléporte le joueur **/
function teleporter(teleporte, teleporteur){

    //Déplacement de tous
    deplaceTous((teleporte.posMulti - teleporteur.teleporteX));
    //Changement de la position multijoueur
    dragon.posMulti = teleporteur.teleporteX;
    dragon.position.y = teleporteur.teleporteY;

}