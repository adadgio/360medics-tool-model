# 360medics-tool-model - 360 Medics 

360medics-tool-model est une application personnalisable pour les soignants via la plateforme 360 medics.
Cet outil permet aux utilisateurs de créer leur propre application à partir d'un template de base.

- ## Table des matières
    - [Prérequis et installation](#prérequis-et-installation)
    - [Lancer l'application](#lancer-lapplication)
    - [Utilisation de l'application :](#utilisation-de-lapplication-)
      - [1 - Fichier data.json :](#--fichier-datajson-)
      - [2 - Créer vos propres pages :](2---créer-vos-propres-pages)
      - [3 - Mise en ligne de votre application :](3---mise-en-ligne-de-votre-application)



### Prérequis et installation
Afin de pouvoir utiliser cette application , il est nécessaire d'installer préalablement les éléments suivants :
- Node version v12.16.3 ou supérieur : vous pouvez suivre un tutoriel d'aide à l'installation en cliquant [ici](https://openclassrooms.com/fr/courses/1056721-des-applications-ultra-rapides-avec-node-js/1056956-installer-node-js)
- Npm (version 6.14.4 ou supérieur) OU Yarn (version 1.22.4 ou supérieur), l'installation de npm est réalisé en même temps que celle de NodeJS.


Installation de l'application :
- 1 - Cloner le répertoire.
* 2 - Installer les dépendances.

```
$ cd 360medics-tool-model

$ npm install OU yarn install
```

### Lancer l'application

- 1 - Lancer le serveur

```
$ cd 360medics-tool-model

$ yarn serve OU npm start

```

- 2 - Lancer le navigateur Web de votre choix et aller sur http://localhost:8080

### Utilisation de l'application :

Cette application est personnalisable, cette partie de la documentation vise à expliquer la marche à suivre afin de pouvoir personnaliser le contenu.

#### - Fichier data.json :

Dans la racine du projet, ouvrir le fichier _src_ puis _assets_ ou directement par ligne de commande :
```
cd src/assets 
```
Ouvrez le fichier data.json.

Le fichier data.json est en quelque sorte votre base de données, c'est ici que vous trouverez les titres des catégories, les liens vers des sites externes à l'application, mais également ceux vers vos propres pages.

Afin d'illustrer, nous allons changer le nom d'une catégorie ainsi que son lien, prenons par exemple la partie suivante située à la ligne n°80 du fichier data.json :

```
{

"header": {
    "title": "Your Template"
    },
    "entries": {
...

...
    "entry4": {
            "id": "entry4",
            "title": "Imagerie médicale",
            "items": {
                "item1": {
                    "id": "item1",
                    "title": "Exemple : Liens vers un super site",
                    "link": "http://360medics.com",
                    "page": false
                },
               ...
                }
            }
        }
    }
}
```

Nous souhaitons changer le bouton "Imagerie médicale" , il suffit de modifier la ligne suivante :
```
"title": "Imagerie médicale",
```

par :

```
"title": "Mon nouveau titre"
```

Le titre sera ainsi modifié.


#### 2 - Créer vos propres pages.

Il est possible de créer vos propres pages.
Pour cela, à partir de la racine de l'application, aller dans __src__ , __assets__ puis __mes-pages__  
```
cd src/assets/mes-pages 
```

Créer un fichier __monNouveauFichier.vue__ , puis écrivez votre code HTML dans une balise __template__ : 
```
<template> votre code HTML </template> 
```

Une fois votre code terminé, rendez-vous dans le fichier __data.json__ .

Il faut maintenant ajouter ce nouveau fichier au fichier, par exemple :

Nous avons ajouté un élément dans la liste "Score obstétrique",  nous devons renseigner deux éléments afin que la page soit correctement incorporée à l'application :  

* Renseigner le titre ("title") de mon nouveau fichier, afin qu'il apparaisse dans la liste.

* Renseigner le nom de la page ("page") afin que l'application sache quel fichier charger.

Pour notre exemple, nous modifierons le fichier comme ceci : 

```
{
    "header": {
        "title": "Your Template"
    },
    "entries": {
        "entry1": {
            "id": "entry1",
            "title": "Score en obstétrique",
            "items": [
                {
                    "id": "item1",
                    "title": "Nouveau Fichier"
                    "page" : "monNouveauFichier.vue"
                    "link" : false
                }
                ...
            ]
        },
    ...
```

Votre nouvelle page devrait maintenant être affichable en cliquant sur "Score en obstétrique" puis "Nouveau Fichier".

Vous pouvez également ranger vos pages par dossier, comme c'est le cas pour le dossier __cro__ situé dans __mes-pages__.

Dans ce cas il est nécessaire d'indiquer dans "page" le dossier : 
```
"page" : "nouveauDossier/monNouveauFichier.vue"
```

Des templates de base sont à votre disposition avec 3 pages qui propose respectivement : 

* Une page d'affichage de texte simple.
* Une page d'affichage d'une image avec une description.
* Une page contenant une fonction simple pour réaliser un test : l'exemple propose un test d'IMC.


#### 3 - Mise en ligne de votre application.

Une fois votre application terminée et afin qu'elle soit intégré à 360 Medics, merci de suivre la procédure suivante : 
* En ligne de commande dans la console, taper l'instruction suivante :
```
npm run build
```
Un fichier nommé "Dist" est apparu dans le dossier de l'application.

* Créer une archive/compresser de ce dossier, et envoyé le nous par mail en spécifiant votre spécialité médical.

* Elle sera mise en ligne rapidement, et vous pourrez la retrouver dans l'onglet "Tools" de l'application.
