var noms = ['Michel Varuk', 'Jim Carrey', 'Emma Watson','Renaud', 'Albert Einstein', 'Vivaldi','Eminem', 'Paul Rudd', 'Jacques', 'Bernadatte',
            'Jhonny Depp', 'The Rock', 'Julien Lepers', 'Hugh Jackmann', 'Gotaga' , 'Philippe Etchebest','Jacquies', 'Michel', 'Bill Gates', 'HP Lovecraft',
            'Léa', 'Nina'];

var objets = ['Ordinateur', 'Téléphone', 'Téléphone Portable','Montre','Ordinateur','Dé à Coudre', 'Décapsuleur', 'Ballon de foot', 'Clavier','Tasse',
              'Piece jaune','Lunette de soleil','fourchette','sabre','cuilliere', 'manette','clavier','avion','miche de pain','vélo','marteau'];

var temperature = ['10°','30°','37,2°','100°','-5°','-50°','5°','12°','25°','37°','25°','69°','18°','-30°','-40°','70°','28°','24°','22°'];

var lieux =['Floyon','Wignehies','Barcelona','Paris','Tokyo','Reykjavik','Bondy','Rio de Janeiro','Big Ben','Mont Fuji','Mc Do','KFC','Montcuq','Chute du Niagara',
             'HidePark','Burger King',"Palais de l'élysée",'Mairie de Paris','Mons','Trélon','Le touquet','Fourmies'];

var verbes = ['Coder','Copier','Coordonner','Avoir','aimer','être','Passionner','Soulever','évoluer','nager','monter','développer','jouer','voter','arnarquer',
              'manger',"S'envoyer",'Enfourner','Accomplir','Communiquer'];


/**  Prompt

 var prénom= prompt('Quel est votre prénom ?');  **/


 // Boutton générer


var boutton = document.createElement('button');
document.body.appendChild(boutton);
boutton.id='boutton0';
boutton.innerHTML="Commencer l'histoire";

 // Générateur aléatoire


 document.getElementById('boutton0').addEventListener("click",
            function () {

                var storyspan= document.getElementById('History');


                var Gennoms= noms[Math.floor(Math.random()*noms.length)];
                var Genobjets= objets[Math.floor(Math.random()*objets.length)];
                var Genntemp= temperature[Math.floor(Math.random()*temperature.length)];
                var Genlieux= lieux[Math.floor(Math.random()*lieux.length)];
                var Genverbes= verbes[Math.floor(Math.random()*verbes.length)];


                    storyspan.innerHTML = Gennoms + ' ' + 'a un(e) ' + Genobjets + ' ' + 'qui fait' + ' ' + Genverbes + ' ' + 'dans la/le/les' + ' ' + Genlieux + ' ' + 'où il fait' + ' ' + Genntemp;


           }
    );



