/** Variables **/

//Socket
let socket;
//Tableau de joueurs
let tabJoueurs = [];

/** Connecte au serveur **/
function connectionServeur(){

    //Envoie une socket au serveur associé
    socket = io();
    print("SALUT");

}

/** Envoie une chaine de caractere au serveur **/
function messageServeur(msg){

    //Emet un message
    socket.emit('MESSAGE', msg);

}

/** Ecoute les messages serveurs **/
function recoitServeur(){

    socket.on('Envoi Serveur', function(msg, msg2){

        console.log(msg);
        console.log(msg2);

    });

}

/** Envoie les informations aux autres joueurs **/
function envoiCoordonnees(x, y, etat, sens, msg, skin){

        //Emet un message
        socket.emit('coordonnees', dragon.posMulti, y, etat, sens, msg, skin);

}

/** Recoit les informations des autres joueurs **/
function autresJoueurs(){

    //Réception du tableau de joueurs
    socket.on('Tableau Joueurs', function(tab){

        //Parcours du tableau serveur
        for(let i=0; i<tab.length; i++){
    
            //Permet de vérifier si le dragon existe ou non
            let existe = false;
            //Parcours du tableau de joueurs
            for(let j=0; j < joueurs.length; j++){

                //Si le joueur existe deja
                if(joueurs[j].id == tab[i].id){

                    /** Actualisation des informations du dragon courant **/
                    //Position x moins la distance réelle du dragon + le positionnement fixe du dragon joueur
                    joueurs[j].position.x = tab[i].x - dragon.posMulti + ecranX/2;
                    joueurs[j].position.y = tab[i].y;
                    joueurs[j].changeAnimation(tab[i].etat);
                    joueurs[j].mirrorX(tab[i].sens);
                    joueurs[j].msg = tab[i].msg;
                    joueurs[j].skin = tab[i].skin;
                    //Il existe
                    existe = true;

                }

            }
            //Si il n'existe pas dans le tableau de joueurs ET que ce n'est pas le joueur actuel
            if(!existe && tab[i].id!=socket.id){

                //Création d'un dragon joueur
                creeDragonMulti(tab[i].id, tab[i].x,tab[i].y,tab[i].etat,tab[i].sens,tab[i].skin);

            }

        }

        //Parcours du tableau joueurs
        for(let i = 0; i<joueurs.length; i++){

            //Permet de vérifier si le dragon existe ou non
            let existe = false;
            //Parcours du tableau serveur
            for(let j = 0; j<tab.length; j++){

                //Si le dragon existe dans les deux tableaux
                if(tab[j].id == joueurs[i].id){

                    //Il existe
                    existe = true;

                }

            }
            
            //Si le dragon n'existe pas
            if(!existe){

                //Supprime le dragon
                joueurs[i].remove();

            }

        }

    });

    //Déconnexion d'un joueur
    socket.on('Deconnexion', function(i){

        

    });

}

/** Affiche le nom des joueurs au dessus d'eux **/
function afficheTexteMulti(){

    //Parcours de la liste des joueurs
    for(let i=0; i<joueurs.length; i++){

        //Affiche le texte
        afficheTexteJoueur(joueurs[i].msg, joueurs[i]);

    }

}

/** Crée une zone de saisie de son nom selon sa position **/
function creeZoneSaisieNom(x, y){

    //Crée le champ
    champ = createInput();
    //Ajoute l'évenement
    champ.changed(onEntrerSaisie);
    //Place le champ
    champ.position(x, y);

}

/** Gestion de la chaine entrée **/
function onEntrerSaisie(){

    //Affiche le texte
    afficheTexteMulti(champ.value());

}