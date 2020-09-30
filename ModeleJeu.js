/** PERSONNAGES */
let dragon;
let nuageRose;
let ennemi;
let plateformeGlace;
let bouleDeFeu;
let golem;
let joueur;
let teleporteur;
let plateformeQuentinMouche;

/** TEXTES **/
let champ;

/** SKINS **/

//Tableau de skins
let tabSkins = [];
//Entier correspondant au skin actuel
let actuelSkin = 0;

/** VITESSES **/
let vitesseEnnemis = 1;

/** DECORS **/
let fond;
let fondMagique;

/** GROUPES **/
let ennemis;
let plateformes;
let joueurs;
let teleporteurs;

/** BOOLEENS **/
let ennemiGauche = true;

/** Creation des personnages **/
function creePersonnages(){

    //Fond
    fond = createSprite(0, 0);
    fond.addAnimation('Fond', 'assets/img/fond/fond.png');

    fondMagique = createSprite(10000, 300);
    fondMagique.addAnimation('Fond', 'assets/img/fond/fond-magique.png');


    /** Création des Groupes **/

    //Plateformes de Glace
    plateformes = new Group();
    //Ennemis
    ennemis = new Group();
    //Teleporteurs
    teleporteurs = new Group();
    //Joueurs
    joueurs = new Group();

    /** Création des éléments **/

    //Plateformes

    creePlateformeGlace(350, 400);//0
    creePlateformeGlace(800, 500);//1
    creePlateformeGlace(1200, 600);//2
    creePlateformeGlace(1600, 400);//3
    creePlateformeGlace(2000, 200);//4
    creePlateformeGlace(2400, 300);//5
    creePlateformeGlace(3000, 400);//6
    creePlateformeGlace(3300, 400);//7
    creePlateformeGlace(3600, 500);//8
    creePlateformeGlace(3900, 500);//9
    creePlateformeGlace(4200, 600);//10
    creePlateformeGlace(4600, 400);//11
    creePlateformeGlace(5000, 400);//12

    creeNuageRose(10000, 400);//13
    creeNuageRose(10400, 400);//14
    creeNuageRose(10800, 400);//15
    creeNuageRose(11100, 400);//16
    creeNuageRose(11400, 400);//17
    creeNuageRose(11900, 400);//18
    creeNuageRose(12300, 400);//19

    creePlateformeQuentinMouche(0, 400);//20
    creePlateformeQuentinMouche(-300, 300);//20

    //Golems
    creeGolem(plateformes[2])
    creeGolem(plateformes[4])
    creeGolem(plateformes[6])
    creeGolem(plateformes[8])
    creeGolem(plateformes[10])

    //Ennemis
    creeEnnemi(plateformes[14]);
    creeEnnemi(plateformes[15]);
    creeEnnemi(plateformes[17]);
    creeEnnemi(plateformes[18]);

    //Téléporteurs
    creeTeleporteur( 10000, 400, 5000, 400);
    //Téléporteurs
    creeTeleporteur( 350, 400, 12300, 400);

    //Création du personnage jouable
    creeDragonJoueur(ecranX/2,200);


}

/** Action des personnages **/
function actualisePersonnages(){

    //Collisions dragon/plateformes
    dragon.collide(plateformes);
    //Collisions ennemis/plateformes
    ennemis.collide(plateformes);

    //Gravité du dragon
    dragon.position.y += dragon.vitesse;
    //Gravité des ennemis
    for(let i = 0; i<ennemis.length; i++)
        ennemis[i].position.y += dragon.vitesse;

    //Déplacement des ennemis
    deplaceEnnemis();
    //Déplacement de la boule de feu
    deplaceBouleDeFeu();
    //Dessine les sprites
    drawSprites();
    //Actualise le message
    dragon.msg = champ.value();
    //Affiche les noms des autres joueurs
    afficheTexteMulti();

}

function entierAleatoire(min, max)
{

    return Math.floor(Math.random() * (max - min + 1)) + min;

}