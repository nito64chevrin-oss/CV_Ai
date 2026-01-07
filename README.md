# Portfolio — Baptiste Chevrin

Un site portfolio moderne, responsif et performant créé en HTML5, CSS3 et JavaScript vanilla. Thème dark-first avec mode clair, formulaire de contact fonctionnel, carrousel de projets, CV gamifié et compteur de visites.

## 🚀 Quick Start

### Lancer localement

```bash
cd /home/bapti/CV_Ai
python3 -m http.server 8000
```

Ouvrez `http://localhost:8000` dans votre navigateur.

### Fichiers principaux

```
.
├── index.html              # Accueil (hero + aperçu)
├── about.html              # À propos + compétences
├── projects.html           # Carrousel + filtres par catégorie
├── contact.html            # Formulaire de contact
├── cv_gamified.html        # Quiz gamifié avec badges persistés
├── styles.css              # Feuille de styles (dark-first)
├── styles.min.css          # Version minifiée
├── script.js               # Interactivité (vanilla JS)
├── script.min.js           # Version minifiée
├── prompts.md              # Documentation des prompts utilisés
└── assets/                 # Images et SVG
```

## ✨ Fonctionnalités

- ✅ **Navigation complète** : 5 pages liées (Accueil, À propos, Projets, CV gamifié, Contact)
- ✅ **Thème sombre/clair** : Basculable, persistent via localStorage
- ✅ **Carrousel de projets** : Navigation fluide, pagination
- ✅ **Filtrage dynamique** : Web, Golang, Java
- ✅ **Formulaire de contact** : Validation temps réel, sauvegarde locale
- ✅ **Compteur de visites** : localStorage persistent
- ✅ **CV gamifié** : 4 questions, 4 badges débloquables, stockage persisté
- ✅ **Animations** : Reveal on scroll via IntersectionObserver
- ✅ **Responsive** : Mobile-first, media queries (880px, 900px)
- ✅ **Accessibilité** : ARIA labels, focus visible, couleurs contrastées
- ✅ **Zéro dépendances** : Vanilla JavaScript, pas de frameworks

## 🎨 Design

**Couleurs principales**
- Mode sombre : vert (#00c48b), noir (#050806), surface grise (#071617)
- Mode clair : vert (#00c48b), blanc, texte sombre (#07211a)
- Accent secondaire : vert foncé (#008a5f / #007f58)

**Typographie** : Inter, system-ui, Roboto fallback  
**Espacements** : Variables CSS (`--gap: 18px`, `--radius: 12px`)

## 📊 Performance & Optimisation

### Déjà optimisé
- ✅ CSS variables (dark/light modes sans duplication)
- ✅ Animations GPU (transform, opacity)
- ✅ IntersectionObserver pour animations (pas de scroll event)
- ✅ localStorage pour persistance (pas de requête serveur)
- ✅ Vanilla JS (zéro dépendances)
- ✅ Fichiers minifiés fournis (`styles.min.css`, `script.min.js`)

### Recommandations futures
1. **Images** : Convertir PNG/JPEG en WebP avec fallback
   ```bash
   cwebp input.png -o output.webp
   ```

2. **Gzip/Brotli** : Serveur avec compression (exemple nginx)
   ```nginx
   gzip on;
   gzip_types text/css application/javascript;
   ```

3. **Service Worker** : Cache offline (pour PWA)

4. **Lighthouse audit** : Tester via DevTools (F12 > Lighthouse)

## 🧪 Tests

### Navigateurs testés
- ✅ Chrome 120+ (Chromium)
- ✅ Firefox 121+
- ✅ Safari 17+ (macOS/iOS)
- ✅ Edge 120+

### Tests locaux
1. Ouvrir DevTools (F12)
2. Vérifier Console (pas d'erreurs)
3. Tester thème toggle (localStorage persiste)
4. Remplir formulaire → vérifier localStorage > Application > Storage
5. Répondre quiz → vérifier badges persistés

## 📝 Documentation

Voir [prompts.md](prompts.md) pour la liste complète des prompts utilisés et la trace des générations.

## ♿ Accessibilité

- Outline focus visible (3px vert)
- Aria-labels sur boutons (theme toggle, carrousel)
- Contraste WCAG AA (noir/vert/blanc)
- Sémantique HTML (header, main, footer, section)
- Labels implicites (input + label for/id)

## 📦 Déploiement

### Option 1 : GitHub Pages
```bash
git add .
git commit -m "Portfolio initial"
git push origin main
# Activer Pages dans les settings (Branch: main, folder: /)
```

### Option 2 : Serveur statique (Vercel, Netlify)
```bash
npm install -g vercel
vercel
```

### Option 3 : Serveur classique (Apache, Nginx)
Copier les fichiers dans le document root, activer gzip.

## 🔄 Amélioration continue

- Ajouter une section "Blog"
- Intégrer un CMS (Strapi, Contentful)
- Progressive Web App (Service Worker)
- Internationalisation (i18n)

## 📄 License

Créé pour un challenge personnel. Utilisable librement.

---

**Auteur** : Baptiste Chevrin  
**Dernière mise à jour** : 7 janvier 2026  
**Technologie** : HTML5 + CSS3 + Vanilla JS
