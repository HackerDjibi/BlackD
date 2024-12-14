const { ovlcmd } = require("../framework/ovlcmd");
//const maker = require('mumaker');
/*
function addTextproCommand(nom_cmd, text_pro_url, desc) {
    ovlcmd(
        {
            nom_cmd: nom_cmd,
            classe: "Logo",
            react: "✨",
            desc: desc
        },
        async (ms_org, ovl, cmd_options) => {
            const { arg, ms } = cmd_options;
            const query = arg.join(' ');
            if (!query) { 
                return await ovl.sendMessage(ms_org, { text: "Vous devez fournir un texte" }, { quoted: ms } );
            }
            try {
                let logo_url = await maker(text_pro_url, query);
              console.log(logo_url.image);
              console.log(logo_url);
               await ovl.sendMessage(ms_org, { image: { url: logo_url.image }, caption: "\`\`\`Powered By OVL-MD\`\`\`" }, { quoted: ms });
            } catch (error) {
                console.error(`Erreur avec la commande ${nom_cmd}:`, error.message || error);
            }
        }
    );
}

addTextproCommand("deepsea", "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", "Créez un effet de texte 3D sur le thème de la mer profonde.");
addTextproCommand("horror", "https://textpro.me/horror-blood-text-effect-online-883.html", "Créez un effet de texte avec du sang pour un style d'horreur.");
addTextproCommand("whitebear", "https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", "Créez un logo de mascotte de ours noir et blanc.");
addTextproCommand("joker", "https://textpro.me/create-logo-joker-online-934.html", "Créez un logo avec le texte du Joker.");
addTextproCommand("metallic", "https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", "Créez un effet de texte métallique.");
addTextproCommand("steel", "https://textpro.me/steel-text-effect-online-921.html", "Créez un effet de texte en acier.");
addTextproCommand("harrypotter", "https://textpro.me/create-harry-potter-text-effect-online-1025.html", "Créez un effet de texte inspiré de Harry Potter.");
addTextproCommand("underwater", "https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", "Créez un effet de texte 3D sous-marin.");
addTextproCommand("luxury", "https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", "Créez un effet de texte avec de l'or 3D luxe.");
addTextproCommand("glue", "https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", "Créez un effet de texte avec de la colle en 3D.");
addTextproCommand("fabric", "https://textpro.me/fabric-text-effect-online-964.html", "Créez un effet de texte avec un tissu.");
addTextproCommand("toxic", "https://textpro.me/toxic-text-effect-online-901.html", "Créez un effet de texte toxique.");
addTextproCommand("ancient", "https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", "Créez un effet de texte doré ancien.");
addTextproCommand("cloud", "https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", "Créez un effet de texte dans les nuages.");
addTextproCommand("transformer", "https://textpro.me/create-a-transformer-text-effect-online-1035.html", "Créez un effet de texte inspiré des Transformers.");
addTextproCommand("thunder", "https://textpro.me/online-thunder-text-effect-generator-1031.html", "Créez un effet de texte avec un éclair.");
addTextproCommand("scifi", "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", "Créez un effet de texte de science-fiction.");
addTextproCommand("sand", "https://textpro.me/write-in-sand-summer-beach-free-online-991.html", "Créez un effet de texte écrit dans le sable.");
addTextproCommand("rainbow", "https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", "Créez un effet de texte arc-en-ciel.");
addTextproCommand("pencil", "https://textpro.me/create-pencil-drawing-text-effect-online-999.html", "Créez un effet de texte dessiné au crayon.");
addTextproCommand("neon", "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", "Créez un effet de texte avec des lumières néon.");
addTextproCommand("magma", "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", "Créez un effet de texte avec du magma brûlant.");
addTextproCommand("leaves", "https://textpro.me/natural-leaves-text-effect-931.html", "Créez un effet de texte avec des feuilles naturelles.");
addTextproCommand("glitch", "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", "Créez un effet de texte glitch impressionnant.");
addTextproCommand("discovery", "https://textpro.me/create-space-text-effects-online-free-1042.html", "Créez un effet de texte inspiré de l'espace.");
addTextproCommand("christmas", "https://textpro.me/christmas-tree-text-effect-online-free-1057.html", "Créez un effet de texte inspiré de Noël.");
addTextproCommand("candy", "https://textpro.me/create-christmas-candy-cane-text-effect-1056.html", "Créez un effet de texte avec des cannes de Noël.");
addTextproCommand("1917", "https://textpro.me/1917-style-text-effect-online-980.html", "Créez un effet de texte inspiré du style de 1917.");
addTextproCommand("blackpink", "https://textpro.me/create-blackpink-logo-style-online-1001.html", "Créez un logo inspiré du style Blackpink.");
addTextproCommand("cat", "https://textpro.me/write-text-on-foggy-window-online-free-1015.html#google_vignette", "Créez un effet de texte sur une fenêtre brumeuse.");
addTextproCommand("pottery", "https://textpro.me/create-3d-pottery-text-effect-online-1088.html", "Créez un effet de texte en poterie 3D.");
addTextproCommand("slice", "https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", "Créez un effet de texte tranché avec lumière et éclat.");
*/

const cloudscraper = require('cloudscraper');
        const cheerio = require('cheerio');
        const fs = require('fs');
        const path = require('path');

 ovlcmd(
    {
        nom_cmd: "generate_logo",
        classe: "Design",
        react: "🎨",
        desc: "Générer un logo personnalisé à partir d'un texte."
    },
    async (ms_org, ovl, cmd_options) => {

        const baseUrl = 'https://textpro.me';
        const cookies = [
            "_ga=GA1.1.1271155986.1732471989",
            "_ga_7FPT6S72YE=GS1.1.1734198780.6.0.1734198780.0.0.0",
            "PHPSESSID=gs1ohb859h6duu34tm68qbasr0"
        ].join('; ');

        try {
            // Étape 1 : Accéder à la page principale
            const response = await cloudscraper.get(`${baseUrl}/any-design-page`, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
                    'Cookie': cookies
                }
            });

            // Charger le contenu HTML avec Cheerio
            const $ = cheerio.load(response);

            // Extraire le token (ou autres données nécessaires)
            const token = $('input[name="token"]').attr('value');
            if (!token) {
                await ovl.sendMessage(ms_org, { text: "❌ Erreur : Impossible de récupérer le token pour générer le logo." });
                return;
            }

            // Étape 2 : Effectuer une requête POST pour générer l'image
            const postResponse = await cloudscraper.post(`${baseUrl}/api/text-design-endpoint`, {
                formData: {
                    text: cmd_options.text || "Texte par défaut",
                    token: token
                },
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
                    'Cookie': cookies
                }
            });

            const result = JSON.parse(postResponse);
            if (!result || !result.imageUrl) {
                await ovl.sendMessage(ms_org, { text: "❌ Erreur : URL de l'image introuvable dans la réponse." });
                return;
            }

            // Envoyer l'image au groupe ou à l'utilisateur
            await ovl.sendMessage(ms_org, {
                image: { url: result.imageUrl },
                caption: `🌟 Logo généré avec succès !`
            });
        } catch (err) {
            console.error("Erreur lors de l'exécution :", err.message);
            await ovl.sendMessage(ms_org, { text: `❌ Une erreur est survenue : ${err.message}` });
        }
    }
);
