# 360medics-tool-model - 360 Medics

Dans le cadre du projet de fin de formation de la Coding Academy, nous avons réalisé un site permettant de planifier des activités avec ses amis.

## Prérequis et installation

Afin de pouvoir utiliser cette application , il est nécessaire d'installer préalablement les éléments suivants :

- Node version v12.16.3 ou supérieur.
- Npm (version 6.14.4 ou supérieur) OU Yarn (version 1.22.4 ou supérieur)

Installation de l'application :

- 1 - Cloner le repertoire.

- 2 - Installer les dépendances coté client
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

1 - Fichier data.json : 

    Dans la racine du projet, ouvrir le fichier _src_ puis _assets_ ou directement par ligne de commande : 
    
    ```
    cd src/assets

    ```
    Ouvrez le fichier data.json :

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
                    "title": "Entry 1"
                },
                {
                    "id": "item2",
                    "title": "Entry 2"
                },
                {
                    "id": "item3",
                    "title": "Entry 3"
                },
                {
                    "id": "item4",
                    "title": "Entry 4"
                }
            ]
        },
        "entry2": {
            "id": "entry2",
            "title": "Many cool test",
            "items":{
                "item1": {
                    "id": "test1",
                    "title": "Awesome Test",
                    "link": "https://360medics.com/assets/apps/com.AGOF.medics/0.0.1/#/scores/bishop?id=bishop?api_key=5f516e2539b937aa85730037b5a4d70c",
                    "page": false
                },
                "item2":
                {
                    "id": "test2",
                    "title": "Super Awesome Test",
                    "link": "https://360medics.com/assets/apps/com.AGOF.medics/0.0.1/#/scores/herman?id=herman?api_key=5f516e2539b937aa85730037b5a4d70c"
                },
                "item3":
                {
                    "id": "test3",
                    "title": "ULTRA Awesome Test"
                },
                "item4":
                {
                    "id": "test4",
                    "title": "OMEGA Awesome Test"
                }
            }
        },
        "entry3": {
            "id": "entry3",
            "title": "Compte Rendu d'Opération",
            "items": {
                "item1": {
                    "id": "item1",
                    "title": "Mon compte rendu opératoire n° 1",
                    "link": false,
                    "page": "cro/exemple-cro.vue"
                },
                "item2": {
                    "id": "item2",
                    "title": "Compte rendu opératoire externe",
                    "link": "http://campus.cerimes.fr/chirurgie-generale/enseignement/compterendu/site/html/cours.pdf",
                    "page": false
                },
                "item3": {
                    "id": "item3",
                    "title": "Mon compte rendu opératoire n°2",
                    "link": false,
                    "page": "cro/exemple-cro2.vue"
                }
            }
        },
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
                "item2": {
                    "id": "item2",
                    "title": "Exemple: Ma première page",
                    "link": false,
                    "page": "page-1-1.vue"
                },
                "item3": {
                    "id": "item3",
                    "title": "Exemple: Ma seconde page",
                    "link": false,
                    "page": "page-1-2.vue"
                },
                "item4": {
                    "id": "item4",
                    "title": "Exemple: Ma troisième page",
                    "link": false,
                    "page": "page-1-3.vue"
                }
            }
        }
    }
}