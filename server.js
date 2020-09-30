/** VARIABLES **/

/** Variables liées au serveur **/

var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;

/** Variables liées aux joueurs **/

//Tableau des joueurs
var joueurs = [];

/** Socket.io **/
const io = require('socket.io')(server);

/** CREATION SERVEUR **/

// Routing
app.use(express.static(path.join(__dirname, '/')));

//Ecoute du port
server.listen(port, () => {
    console.log('Serveur hébergé sur le port %d', port);
});

/** SOCKETS **/
io.on('connection', newConnection);

/** Lors d'une connection **/
function newConnection(socket){

    //Lors de la déconnection
    socket.on('disconnect', () =>{

        //Parcours le tableau de joueurs
        for(let i=0; i<joueurs.length; i++){
            //Si l'élément actuel corresponds à la socket actuelle
            if(socket.id == joueurs[i].id){

                //Envoi de la déconnexion aux clients
                socket.broadcast.emit('Deconnexion', i);
                //Suppression du joueur du tableau
                joueurs.splice(i, 1);

            }

        }

    });

    //Message de connection
    
    //Informe de l'arrivée d'un joueur
    socket.broadcast.emit('Nouveau Joueur', socket.id);
    
    //Reception des messages
    socket.on('MESSAGE', function(msg){


    });

    //Emet un message à tout les clients
    socket.on('coordonnees', function(x, y, etat, sens, msg, skin){

        //Représente un joueur
        var joueur = new Object();
        
        //Remplissage d'un joueur
        joueur.id = socket.id;
        joueur.x = x;
        joueur.y = y;
        joueur.etat = etat;
        joueur.sens = sens;
        joueur.msg = msg;
        joueur.skin = skin;
        //Ajoute un nouveau joueur au tableau
        let existe = false;
        for(let i=0; i<joueurs.length; i++){

            //Si le joueur existe
            if(joueur.id == joueurs[i].id){

                //Actualisation des informations
                joueurs[i].x = x;
                joueurs[i].y = y;
                joueurs[i].etat = etat;
                joueurs[i].sens = sens;
                joueurs[i].msg = msg;
                joueurs[i].skin = skin;
                //Existe est VRAI
                existe = true;

            }

        }
        //Si ca n'existe pas
        if(!existe){

            //On l'ajoute au tableau des joueurs
            joueurs.push(joueur);

        }
        existe = false;

        //Envoie le tableau de joueurs
        socket.emit('Tableau Joueurs', joueurs);

        //Affichage du tableau de joueurs

        //Broadcast des informations
        socket.broadcast.emit('envoi Coordonnees', x, y, etat, sens, msg, skin);

    });
    
}
