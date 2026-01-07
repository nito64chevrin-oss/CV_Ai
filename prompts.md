# Prompts utilisés pour générer le projet

Chaque fichier a été généré à partir d'un prompt clair. Voici les prompts exacts utilisés (français) :

## 1) Générer `index.html`
"Génère une page HTML personnelle complète en français avec les sections suivantes : 'À propos', 'Compétences', 'Projets', 'Contact'. Inclure un carrousel de projets pouvant contenir des cartes avec attribut `data-category` pour filtrage, un ensemble de boutons de filtre (Tous, Web, IA, Mobile), un formulaire de contact simple avec `name`, `email` et `message`, un compteur de visites basé sur `localStorage`, un bouton pour basculer mode sombre/clair, et des classes `reveal` pour animations d'entrée. L'HTML doit lier `styles.css` et `script.js` et rester accessible (aria-labels)." 

## 2) Générer `styles.css`
"Crée une feuille de styles moderne et minimale : variables CSS pour thème clair/sombre, règles responsives, style pour le carrousel (track + cartes), styles pour filtres, boutons, formulaires, et animations d'entrée (`reveal` → `animate-in`). Priorise performance et simplicité, avec règles d'accessibilité (focus visible)."

## 3) Générer `script.js`
"Écris un script JavaScript autonome (vanilla) qui : gère le thème sombre/clair (stocké dans localStorage), incrémente/affiche un compteur de visites (localStorage), contrôle un carrousel simple (prev/next), applique le filtrage des projets par `data-category`, valide le formulaire en temps réel, sauvegarde les messages du formulaire dans `localStorage`, et déclenche des animations d'entrée via IntersectionObserver. Le script doit être compatible mobile et desktop." 

## 4) Générer `cv_game.html`
"Crée une page `cv_game.html` gamifiée : un mini-jeu-questionnaire interactif présentant des éléments du CV (compétences, expériences) qui débloque des badges, avec animations simples et compatibilité mobile. Inclusion d'un court script inline est acceptable." 

## 5) Générer `README.md`
"Rédige un README en français expliquant : comment ouvrir le projet localement, comment servir via `python -m http.server`, recommandations d'optimisation (compression d'images, minifier CSS/JS), navigateurs à tester, et instruction pour personnaliser le design. Mentionne aussi la liste des prompts utilisés (répéter ou lier prompts.md)."

## 6) Fractionner le site en plusieurs pages
"Scinde le contenu existant en plusieurs pages statiques : `index.html` (accueil/hero), `about.html`, `projects.html`, `contact.html`. Chaque page doit partager `styles.css` et `script.js`, inclure le même header/navigation et être accessible. Ajoute des placeholders d'assets (SVG) et assure une apparence cohérente et moderne."

## 7) Améliorer le design global
"Améliore le CSS pour un thème moderne (préférence dark-first avec option light), ajoute un hero, glass surfaces, meilleurs boutons, transitions et responsive. Optimise les tailles de cartes et les espacements pour une lecture confortable." 

## 8) Personnalisation pour Baptiste Chevrin
"Remplace le nom générique par 'Baptiste Chevrin' dans toutes les pages, applique une palette verte/noire (dark-first) avec option light, et réduis la quantité de JavaScript au strict minimum pour la bascule de thème, compteur de visites et sauvegarde locale du formulaire."

## 9) Remplacer catégories par 'Golang'
"Remplace les catégories 'IA' et 'Mobile' par une seule catégorie 'Golang' dans `projects.html`. Met à jour les boutons de filtre (conserver 'Tous' et 'Web', ajouter 'Golang') et change les cartes de projet concernées pour utiliser `data-category='golang'` avec des titres et descriptions appropriés (ex : 'Service API Go', 'Outil CLI Go')."

## 10) Ajouter catégorie 'Java'
"Ajouter une nouvelle catégorie 'Java' au filtre dans `projects.html`. Ajouter un bouton de filtre `Java` et au moins une carte de projet avec `data-category='java'` (ex : 'Service Java'). Assurer que le script de filtrage supporte la nouvelle catégorie sans modification supplémentaire." 

## 11) Améliorer `cv_game.html` pour plus d'interactivité
"Améliore la page `cv_game.html` : design plus moderne (fond sombre, carte centrale), barre de progression, navigation (précédent/suivant/sauter), animations pour les badges (pop), stockage des badges dans `localStorage`, et contrôles pour recommencer. Le script doit afficher les questions une par une, débloquer un badge sur bonne réponse, et afficher le résultat final avec les badges débloqués."

## 12) Recréer `cv_game.html` dans le style du site
"Recrée `cv_game.html` pour qu'elle partage l'en-tête, le pied de page et les styles de `styles.css`. La page doit contenir 4 questions simples (chaque question : texte + 3 options), afficher une seule question à la fois, utiliser des boutons visibles (`.btn`) pour les options, et afficher les badges débloqués en bas. Le design doit rester simple et cohérent avec les autres pages du site." 

## 13) Connecter CV gamifié à toutes les pages
"Ajoute un lien de navigation 'CV gamifié' dans la barre de navigation de toutes les pages HTML (`index.html`, `about.html`, `projects.html`, `contact.html`), pointant vers `cv_gamified.html`. Assure que chaque page hérite du même header avec le lien de navigation."

## 14) Corriger les boutons du quiz (clics et navigation)
"Corrige le quiz dans `cv_gamified.html` pour que les boutons de réponse fonctionnent correctement : les clics doivent enregistrer la sélection, le bouton 'Suivant' doit s'activer, et la navigation Précédent/Suivant doit fonctionner. Chaque sélection doit persister si l'utilisateur navigue vers une autre question."

## 15) Afficher les badges en temps réel
"Améliore `cv_gamified.html` pour afficher les badges débloqués en temps réel pendant le quiz (dans une barre 'Badges' visible), sauvegarder les badges persistés dans `localStorage`, et déclencher une petite animation (scale/shadow) quand un badge est débloqué. La section de résultat final doit fusionner les badges obtenus dans cette session avec ceux déjà persistés."

## 16) Rendre le formulaire visible en mode clair
"Corrige `contact.html` pour que le formulaire et ses champs restent visibles et lisibles en mode clair (fond sombre distinct du mode sombre). Applique une couleur vert foncé distincte en mode light afin de créer une bonne séparation visuelle tout en maintenant une bonne accessibilité."

## 17) Ajouter phrase d'accroche développeur
"Ajoute une phrase élégante sous le titre principal ('Bonjour, je suis Baptiste Chevrin') dans `index.html`, décrivant que je suis un développeur en devenir cherchant à progresser via des projets ambitieux, sans utiliser le terme 'débutant' brut — rendre la formulation plus poétique et positive."

## 18) Minifier CSS et JS + créer README complet
"Crée des versions minifiées (`styles.min.css` et `script.min.js`) des fichiers CSS et JavaScript pour optimiser les performances. Remet à jour le `README.md` avec : instructions de lancement local, liste complète des fonctionnalités, recommandations d'optimisation (WebP, Brotli, PWA), guide de test sur navigateurs, checklist d'accessibilité, et options de déploiement."

---

Les prompts ci-dessus couvrent l'ensemble des étapes de développement du portfolio. Chaque prompt a été appliqué en utilisant le système de génération par instructions textuelles, du scaffolding initial jusqu'aux optimisations finales.
