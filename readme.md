# Projet Visualdon

## Introduction

Pour la réalisation de ce projet, nous serons deux: Prisca et Malorie.

## Données

Pour nos données, nous nous sommes basées sur les sites suivants pour les tournées

1. https://fr.wikipedia.org/wiki/The_Fame_Ball_Tour#Dates_de_la_tourn%C3%A9e
2. https://fr.wikipedia.org/wiki/The_Monster_Ball_Tour#Dates_et_lieux_des_concerts
3. https://fr.wikipedia.org/wiki/The_Born_This_Way_Ball#Dates_de_la_tourn%C3%A9e
4. https://fr.wikipedia.org/wiki/ArtRave:_The_Artpop_Ball#Dates_de_la_tourn%C3%A9e
5. https://fr.wikipedia.org/wiki/Joanne_World_Tour#Dates_de_la_tourn%C3%A9e

et pour les albums et les ventes 
1. https://fr.wikipedia.org/wiki/Discographie_de_Lady_Gaga#Albums
2. https://fr.wikipedia.org/wiki/The_Fame#Liste_des_pistes
3. https://fr.wikipedia.org/wiki/The_Fame_Monster#Liste_des_pistes
4. https://fr.wikipedia.org/wiki/Born_This_Way#Listes_des_pistes
5. https://fr.wikipedia.org/wiki/Artpop#Liste_des_pistes
6. https://fr.wikipedia.org/wiki/Cheek_to_Cheek_(album_de_Tony_Bennett_et_Lady_Gaga)#Liste_des_pistes
7. https://fr.wikipedia.org/wiki/Joanne_(album)#Liste_des_pistes

## Transformation des données et choix des données

En nous basant sur les liens ci-dessus, nous avons repris les données concernants les tournées (date, ville, pays, salle) ainsi que les cds (album, sortie, titre, featuring et ventes). Pour récupérer la latitude et la longitude, nous nous sommes basées sur ce [site](https://www.gps-longitude-latitude.net). Afin de gérer au mieux les données des tournées, nous avons créé un fichier **.csv** pour chacune d'elle que nous avons converties en **GeoJSON**. Les données des albums ont été directement converties en **JSON**.

## Visualisation des données et explication des choix

Pour les données concernant les tournées, nous souhaitons les visualiser sur une carte du monde. Pour cela, nous avons rajouté la latitude et la longitude pour chacun des lieux. Nous pensons qu'il est plus pertinent de montrer les données d'une tournée sur une map du monde, ainsi nous pouvons avoir une idée de la quantité de tournées faites à travers le monde. Nous avons décidé de créer un onglet pour chacune des tournées pour rendre la lecture des données plus visible en plus d'une possibilité de zommer sur la map.

Pour représenter les différents albums de Lady Gaga, ainsi que les musiques et les featuring qui les composent, nous avons finalement décidé de partir sur un graphique en arbre. Nous pensions de base partir sur un graphique "sunbrust", mais nous nous sommes rendues compte que cela n'était pas pertinent et non lisible. Avec le graphique en arbre, il est possible de déplier et de replier pour une meilleure lecture des données.

Pour les données de la ventes de ses albums, nous avons décidé de partir sur un graphique "donut". Nous pensons que ce graphique est pertinent pour afficher ce type de données. Lorsque la souris est sur une partie du donut, il est possible de voir le nom de l'album ainsi que le nombre de ventes pour chaque album.

## Le public cible

Pour le public cible, nous nous sommes orientées vers des personnes qui s'intéressent et apprécient l'artiste et qu'ils puissent avoir une idée des tournées qui ont été faites jusqu'à maintenant et avoir une idée globale des albums qu'elle a fait, de ses titres ainsi que de ses ventes.
