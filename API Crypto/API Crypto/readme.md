# README : Application Bitcoin Tracker

## Description

**Bitcoin Tracker** est une application qui fournit des mises à jour en temps réel sur les prix du Bitcoin et les ajustements de difficulté de minage. Elle utilise l'API Mempool pour afficher des informations sur le marché du Bitcoin.

## Fonctionnalités

- **Prix du Bitcoin en direct :** Affiche les derniers prix du Bitcoin dans différentes devises.
- **Informations sur la difficulté de minage :** Montre les ajustements actuels de difficulté, y compris le pourcentage de progression, la date estimée de recalibrage et les blocs restants.
- **Actualisation automatique :** Met à jour les données toutes les 60 secondes.
- **Actualisation manuelle :** Permet aux utilisateurs de rafraîchir manuellement les données via un bouton "Refresh Data".

## Technologies utilisées

- **HTML5**
- **CSS3**
- **JavaScript**
- **API Mempool**

## Instructions d'utilisation

1. **Ouvrez `index.html` dans un navigateur.**  
   - L'application commencera automatiquement à récupérer et afficher les données.
2. **Bouton "Refresh Data".**  
   - Cliquez sur le bouton pour rafraîchir manuellement les prix du Bitcoin et les données de difficulté.
3. **Mises à jour en temps réel.**  
   - L'application actualisera automatiquement les données toutes les 60 secondes.

## Installation

1. Clonez ou téléchargez le dépôt.
2. Assurez-vous d'avoir une connexion internet pour accéder à l'API Mempool.
3. Ouvrez `index.html` dans un navigateur moderne.

## Références API

- **Endpoints de l'API Mempool :**
  - Prix : `https://mempool.space/api/v1/prices`
  - Ajustement de difficulté : `https://mempool.space/api/v1/difficulty-adjustment`

## Auteur

Développé par CAFFENNE--GROSJEAN Hugo.
