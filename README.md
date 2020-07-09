# 360medics-tool-model - 360 Medics - EN CONSTRUCTION

Dans le cadre du projet de fin de formation de la Coding Academy, nous avons réalisé un site permettant de planifier des activités avec ses amis.

## Prérequis et installation

Afin de pouvoir utiliser cette application , il est nécessaire d'installer préalablement les éléments suivants :

- Node version v12.16.3 ou supérieur.

- Npm (version 6.14.4 ou supérieur) OU Yarn (version 1.22.4 ou supérieur)

Installation de l'application :

- 1 - Cloner le repertoire.

* 2 - Installer les dépendances coté client

```
$ cd 360medics-tool-model

$ npm install OU yarn install
```

### Lancer l'application

- 1 - Lancer le server

```
$ cd 360medics-tool-model

$ yarn serve OU npm start

```

- 2 - Lancer le navigateur Web de votre choix et aller sur http://localhost:8080

### Utilisation de l'application :

Cette application est personalisable, cette partie de la documentation vise à expliquer la marche à suivre afin de pouvoir personaliser le contenu.

#### 1 - Fichier data.json :

Dans la racine du projet, ouvrir le fichier _src_ puis _assets_ ou directement par ligne de commande :

```
cd src/assets

```

Ouvrez le fichier data.json,

Le fichier data.json est en quelque sorte votre base de donnée, c'est ici que vous trouverez les titres des catégories, les liens vers des sites externes à l'application mais également ceux vers vos propres pages.

Afin d'illustrer, nous allons changer le nom d'une catégorie ainsi que son lien, prenon par exemple la partie suivantes situé à la ligne n°80 du fichier data.json :

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

Nous souhaitons changer le bouton "Imagerie médical" , il suffit de modifié la ligne suivante :

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
3 templates vous sont proposés, vous pouvez les modifier ou créer une nouvelle page.


Créer un fichier __monNouveauFichier.vue__ , puis écriver votre code html dans une balise __template__ : 
```
<template> votre code HTML </template>
```

Une fois votre code terminé, rendez-vous dans le fichier __data.json__ .

Il faut maintenant ajouté ce nouveau fichier au fichier, par exemple :
Nous avons ajouté un élément dans la liste "Score Obstétrique",  nous devons renseigner deux éléments afin que la page soit correctement incorporer à l'application :  

* Renseigner le titre ("title") de mon nouveau fichier, afin qu'il apparaisse dans la liste.
* Renseinger le nom de la page ("page") afin que l'application sachent quelle fichier charger.

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

Dans ce cas il est nécessaire d'indiqué dans "page" le dossier : 
```
"page" : "nouveauDossier/monNouveauFichier.vue"
```
