# EUH

Cette application de suivi alimentaire utilise les données d'Open Food Facts pour fournir des informations sur les produits alimentaires et aider les utilisateurs à atteindre leurs objectifs de santé.

## prerequis

### node.js
Pour pouvoir utiliser notre application, vous devez avoir la version 18.9.0 de Node.js installée sur votre ordinateur. Node.js est utilisé pour exécuter notre code JavaScript côté serveur et est nécessaire pour que notre application fonctionne correctement. Si vous ne disposez pas déjà de cette version de Node.js, vous pouvez la télécharger et l'installer à partir du site Web officiel de Node.js (https://nodejs.org/). Une fois que vous avez installé Node.js, vous devriez être en mesure de lancer notre application en suivant les instructions fournies dans le reste de ce README.

## TECHOLOGIE
Notre application utilise un certain nombre de technologies différentes pour fonctionner. Nous avons choisi d'utiliser React pour le front-end, ce qui nous permet de créer des interfaces utilisateur réactives et dynamiques. Pour le back-end, nous avons utilisé Django, un framework de développement Web basé sur Python qui offre une puissance et une flexibilité pour la gestion de données et la logique métier. En outre, nous avons choisi d'utiliser MongoDB comme base de données pour stocker les données de l'application. Enfin, nous avons intégré l'API d'Open Food Facts dans notre application pour fournir des informations sur les produits alimentaires aux utilisateurs.

### LANCER LE FRONTEND

Voici les étapes pour lancer l'application frontend créee en ```React``` :

Ouvrez un terminal et naviguez jusqu'au répertoire de notre application React ```./front```.
installé les dépendances de votre application en exécutant la commande ```npm install``` ou```yarn install```.
Exécutez la commande npm start ou yarn start pour lancer l'application.

Une fois que vous avez exécuté ces commandes, votre application React devrait être lancée et accessible à l'adresse http://localhost:3000 dans votre navigateur. Si vous avez configuré votre application pour utiliser un port différent, vous devrez accéder à l'application à l'adresse appropriée.


### LANCER LE BACKEND

Ouvrez un terminal et naviguez jusqu'au répertoire de notre application Django ```./back```.
installé les dépendances de l'application en exécutant la commande ```pip install -r requirements.txt``` . Cette commande installera toutes les bibliothèques Python nécessaires pour votre application.
Exécutez la commande ```python manage.py migrate``` pour appliquer toutes les migrations de base de données nécessaires à votre application.
Exécutez la commande ```python manage.py runserver``` pour lancer le serveur de développement de Django.

