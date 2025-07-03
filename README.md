# Projet 14 : Hrnet (conversion d'une appli jQuery en React)

14ème projet de la formation "Développeur d'application JavaScript React" d'OpenClassrooms.

🔗 [Voir l'application en ligne](https://ocr-p14-h-rnet.vercel.app/)

## Contexte du projet

L'entreprise WealthHealth utilise une application interne nommée HRnet pour gérer les dossiers de ses employés. Développée en jQuery, cette application est source de nombreux bugs, notamment au niveau des sélecteurs de date, des fenêtres modales, des menus déroulants et des tableaux.

Face à cette situation, la direction a validé la refonte complète de l'application en React.

## Objectifs réalisés

### ✅ Conversion complète en React

- Migration de jQuery vers React 19
- Navigation SPA avec React Router DOM
- Gestion d'état centralisée avec Redux Toolkit
- Système de thème clair/sombre
- Design responsive largement amélioré

### ✅ Remplacement des plugins jQuery

- **Fenêtre modale** : [`nr-modal-react`](https://www.npmjs.com/package/nr-modal-react) (package développé et publié)
- **Sélecteur de dates** : `React Day Picker`
- **Menu déroulant** : `React Select`
- **Tableau de données** : `TanStack Table`

### ✅ Tests de performance

Audits Lighthouse réalisés sur les deux versions. Résumé de ces audits ici : [`doc/migration-performance-report_fr.md`](doc/migration-performance-report_fr.md).

## Technologies utilisées

### Frontend

- **React 19**
- **Redux Toolkit** - Gestion d'état
- **Redux Persist** - Persistance automatique
- **React Router DOM** - Navigation SPA
- **React Hook Form** + **Yup** - Gestion du formulaire

### UI/UX

- **Tailwind CSS 4** - Framework CSS utilitaire
- **Lucide React** - Icônes modernes

### Outils

- **Vite** - Build tool et dev server
- **ESLint** + **Prettier** - Qualité du code
- **Faker.js** - Génération de données

## Installation et utilisation

### Récupération du projet

```bash
# Cloner le repository depuis GitHub
git clone https://github.com/nrundstadler/OCR-P14-HRnet.git

# Naviguer dans le dossier du projet
cd OCR-P14-HRnet
```

### Commandes disponibles

```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview

# Vérification du code
npm run lint
```
