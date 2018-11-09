var noms = ['Michel Varuk', 'Jim Carrey', 'Emma Watson','Renaud', 'Albert Einstein', 'Vivaldi','Eminem', 'Paul Rudd', 'Jacques', 'Bernadatte',
            'Jhonny Depp', 'The Rock', 'Julien Lepers', 'Hugh Jackmann', 'Gotaga' , 'Philippe Etchebest','Jacquies', 'Michel', 'Bill Gates', 'HP Lovecraft',
            'Léa', 'Nina'];

var objets = ['Ordinateur', 'Téléphone', 'Téléphone Portable','Montre','Ordinateur','Dé à Coudre', 'Décapsuleur', 'Ballon de foot', 'Clavier','Tasse',
              'Piece jaune','Lunette de soleil','fourchette','sabre','cuilliere', 'manette','clavier','avion','miche de pain','vélo','marteau'];

var temperature = ['10°','30°','37,2°','100°','-5°','-50°','5°','12°','25°','37°','25°','69°','18°','-30°','-40°','70°','28°','24°','22°'];

var lieux =['Floyon','Wignehies','Barcelona','Paris','Tokyo','Reykjavik','Bondy','Rio de Janeiro','Big Ben','le Mont Fuji','le Mc Do','le KFC','Montcuq','les Chutes du Niagara',
             'HidePark','le Burger King',"le Palais de l'élysée",'la Mairie de Paris','Mons','Trélon','Le touquet','Fourmies'];

var verbes = ['Code','Copie','Coordonne','Avoir','aime','est','Passionne','Soulève','évolue','nage','monte','développe','joue','vote','arnarque',
              'mange',"S'envoye",'Enfourne','Accompli','Communique'];


// Prompt

 var prenom= prompt('Quel est votre prénom ?');


 // Boutton générer


var boutton = document.createElement('button');
document.body.appendChild(boutton);
boutton.id='boutton0';
boutton.innerHTML="Commencer l'histoire";


 // Générateur aléatoire


 document.getElementById('boutton0').addEventListener("click",
            function () {

     var storyspan= document.getElementById('History1');

            for ( var i = 0 ; i < 3 ; i++)  {

                var alea = Math.floor(Math.random()*10);

                var Gennoms = noms[Math.floor(Math.random()*noms.length)];
                var Genobjets= objets[Math.floor(Math.random()*objets.length)];
                var Genntemp= temperature[Math.floor(Math.random()*temperature.length)];
                var Genlieux= lieux[Math.floor(Math.random()*lieux.length)];
                var Genverbes= verbes[Math.floor(Math.random()*verbes.length)];
             
            if ( alea >= 5) {

                storyspan.innerHTML +=  '<br>' + '<br>' + Gennoms + ' ' + Genverbes + ' ' + 'un(e)' + ' ' + Genobjets + ' ' + 'dans' + ' ' + Genlieux + ' ' + 'où il fait' + ' ' + Genntemp + '<br>' + '<br>';


            }
            if (alea < 5 ) {

                storyspan.innerHTML +=  '<br>' + '<br>' + prenom  + ' ' + Genverbes + ' ' + 'un(e)' + ' ' + Genobjets + ' ' + 'dans ' + ' ' + Genlieux + ' ' + 'où il fait' + ' ' + Genntemp + '<br>' + '<br>';

            }}});



// Entree champ utilisateur


var envoyer = document.getElementsByClassName('envoyer');

for ( var i = 0; i < envoyer.length; i++) {

    envoyer[i].addEventListener('click', function(e)
    {
        var nvverbes1 = document.getElementById('nvverbes').value;
        var nvobjets1 = document.getElementById('nvobjets').value;
        var nvlieux1 = document.getElementById('nvlieux').value;

        verbes.push(nvverbes1);
        objets.push(nvobjets1);
        lieux.push(nvlieux1);

        console.log(objets);
    });
}











