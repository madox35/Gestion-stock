# Gestion de stockage Mediafaune

Description permettant d'installer l'API développée pour gérer le stockage du matériel.

## Pour commencer

Ce guide vous permetta d'obtenir une copie du projet opérationnel sur votre machine locale à des fins de développement et de test.

### Prerequis

- Installation de Node.js : https://nodejs.org/en/

- Installation de MongoDB : https://docs.mongodb.com/manual/installation/
Ne pas hésitez a tester de lancer le service avant de continuer aux étapes suivantes.

Pour tester, lancer dans un terminal la commande : mongod --dbpath dossier_de_votre_bdd

Pour windows n'oubliez pas d'ajouter la variable d'environnement mongod sur votre système.

### Installation

Voici étape par étape, l'installation du projet sur votre machine.

Récupérer le dossier 'Gestion-stockage' que vous placerez à l'endroit qui vous convient le plus.

```
 git clone https://{votre répertoire}/Gestion-stock.git
```

Puis déplacez vous dans le repertoire en question

```
cd ./Gestion-stock
```

Télécharger l'ensemble des dépendances

```
npm install
```

Enfin créer le dossier qui accueillera votre BDD et lancer le service mongod : 

```
mkdir ./bdd/
mongod --dbpath bdd
```

Puis démarrer le service node.js : 

```
npm start
```

## Lancer les tests

Aucun test disponible pour l'instant.

## Démarrage

Si votre bdd est déjà créée et démarrer pas la peine de réitérer l'étape
Lancez simplement la commande suivante : 

```
npm start
```

## Construction du projet

Ce projet a été construit avec un module npm : 
* [Générateur express](https://www.npmjs.com/package/express-generator)

## Versioning

Nous utilisons git pour gérer les versions de notre projet.

## Authors

* **Hugo Jové** - *Gestion-stock* - [PurpleBooth](https://github.com/PurpleBooth)

Voir aussi les autres contributeurs [contributors](https://github.com/xMADOXX/Gestion-stock/contributors) qui ont participé à la réalisation de ce projet.

## License

Ce projet est sous la licence MIT License - voir la [LICENSE.md](LICENSE.md) pour plus de détails.

## Connaissances

