<p align="center"> 
    <img alt="OVL" src="https://files.catbox.moe/k1gddi.jpg">
</p>   

# Déploiement de OVL-MD

### Étape 1 : Créer un fork du projet
- Cliquez ici [OVL-MD-FORK](https://github.com/Ainz-O-G/OVL-Md/fork).

### Étape 2 : Obtenir une SESSION-ID
- Cliquez ici [SESSION-ID](https://quickest-elise-ainz-oest-org-53269c8e.koyeb.app/).
- **Remarque** : Conservez cette SESSION-ID en sécurité, car elle est nécessaire pour connecter le bot à votre compte WhatsApp.

### Étape 3 : Créer une base de données
- Cliquez ici pour créer: [DATA-BASE](https://supabase.com)
- Si vous en avez déjà une c'est plus la peine d'en créer
- Lien de la Base de données public:
```sh
postgresql://postgres.qnjvgxwyncnsbpfxwrbq:ovlmdmdpasse@aws-0-eu-central-1.pooler.supabase.com:6543/postgres
```

### Étape 4 : Déployer OVL-MD

### Deployer sur Render
- **Creer une compte:** [compte-render](https://dashboard.render.com/register).
- **Deployer:** [Deployer sur Render](https://dashboard.render.com/web/new)

### Deployer sur Koyeb
- **Creer un compte:** [compte-koyeb](https://app.koyeb.com/auth/signup) 
- **Deployer:** [Deployer sur Koyeb](https://app.koyeb.com/deploy?name=ovl-md&repository=Ainz-O-G%2FOVL-Md&branch=main&builder=dockerfile&instance_type=free&env%5BDATABASE%5D=postgresql%3A%2F%2Fpostgres.qnjvgxwyncnsbpfxwrbq%3Aovlmdmdpasse%40aws-0-eu-central-1.pooler.supabase.com%3A6543%2Fpostgres&env%5BLEVEL_UP%5D=non&env%5BMENU%5D=https%3A%2F%2Fi.ibb.co%2Fynx9QcZ%2Fimage.jpg&env%5BMODE%5D=public&env%5BNOM_OWNER%5D=Ainz&env%5BNUMERO_OWNER%5D=226xxxxxxxx&env%5BPREFIXE%5D=%F0%9F%97%BF&env%5BSESSION_ID%5D=Ovl-MD_qLA7XFLP_SESSION-ID&env%5BSTICKER_AUTHOR_NAME%5D=OVL-MD&env%5BSTICKER_PACK_NAME%5D=Wa-sticker)
 
### Deployer sur panel
- **Créer un compte:** [compte-panel](https://bot-hosting.net) 
- **Deployer:**
- Étape 1: creer un serveur
- Étape 2: créé une fichier ```index.js``` sur le serveur
- Étape 3: Démarrer le bot
- Fichier a coller dans l'index:
```sh

const { writeFileSync, existsSync, mkdirSync } = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const env_file = ``; //Entrée votre fichier .env ici

if (!env_file.trim()) {
  console.error("Aucune donnée de configuration trouvée dans 'env_file'. Veuillez remplir vos informations dans le code.");
  process.exit(1);
}

const envPath = path.join(__dirname, 'ovl', '.env');

function runCommand(command, args, options = {}) {
  const result = spawnSync(command, args, { stdio: 'inherit', ...options });
  if (result.error) {
    throw new Error(`Échec de l'exécution de "${command} ${args.join(' ')}" : ${result.error.message}`);
  }
  if (result.status !== 0) {
    throw new Error(`Commande "${command} ${args.join(' ')}" retournée avec le code ${result.status}`);
  }
}

if (!existsSync('ovl')) {
  console.log("Clonage du bot en cours...");
  runCommand('git', ['clone', 'https://github.com/Ainz-O-G/OVL-Md', 'ovl']);
  console.log("Clonage terminé, installation des dépendances...");
  runCommand('npm', ['install'], { cwd: 'ovl' });
  console.log("Dépendances installées avec succès !");
}

if (!existsSync(envPath)) {
  try {
    const envDir = path.dirname(envPath);
    if (!existsSync(envDir)) {
      mkdirSync(envDir, { recursive: true });
      console.log(`Répertoire créé: ${envDir}`);
    }
    writeFileSync(envPath, env_file.trim());
    console.log("Fichier .env créé avec succès !");
  } catch (error) {
    console.error(`Erreur lors de la création du fichier .env : ${error.message}`);
    process.exit(1);
  }
}

console.log("Démarrage du bot...");
runCommand('npm', ['run', 'Ovl'], { cwd: 'ovl' });
console.log('Le bot est en cours d\'exécution...');

```
 **Exemple de fichier .env:**
 ```sh
PREFIXE=""
NOM_OWNER="Ainz"
NUMERO_OWNER="226xxxxxxxx"
MODE="public"
MENU="https://i.ibb.co/ynx9QcZ/image.jpg"
SESSION_ID="ovl"
DATABASE="postgresql://postgres.qnjvgxwyncnsbpfxwrbq:ovlmdmdpasse@aws-0-eu-central-1.pooler.supabase.com:6543/postgres"
LEVEL_UP="non"
STICKER_PACK_NAME="Wa-sticker"
STICKER_AUTHOR_NAME="OVL-MD"
ANTIDELETE="off/pm/status/gc/all"
SERVICE_ID=""
RENDER_API_KEY=""
```
---

### 📄 License

Ce projet est sous la licence MIT. Consultez le fichier LICENSE pour plus de détails.
