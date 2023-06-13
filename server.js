
const express = require('express');
const nodemailer = require('nodemailer');
const stripe = require('stripe')('sk_test_51N7c9qExy3d78d8RkqoweHj5XciRUSjSRtw8s05v1posIRXtMsRzqdKXVzGshQSheExQWVpeSVEQooG2ETtnhExO00bVtEyLnV');
const fs = require('fs');
const { isAscii } = require('buffer');
const app = express();
app.use(express.json());


let liensDl;
try {
  const data = fs.readFileSync('./liensDl.json');
  liensDl = JSON.parse(data);
} catch (err) {
  console.error('Erreur lors de la lecture du fichier liensDl.json:', err);

}


app.get('/stock', (req, res) => {
  fs.readFile('./stock.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier JSON :', err);
      return res.status(500).json({ error: 'Erreur lors de la lecture du fichier JSON' });
    }
  
    try {
      const stockData = JSON.parse(data);
      console.log('Contenu du fichier JSON :', stockData);
      res.json(stockData);
    } catch (error) {
      console.error('Erreur lors du parsing du JSON :', error);
      return res.status(500).json({ error: 'Erreur lors du parsing du JSON' });
    }
  });
});




app.post('/paiement', async (req, res) => {
  try {
    const { token, panier, infos } = req.body;
    const charge = await stripe.charges.create({
      source: token,
      currency:"EUR", 
      amount: panier.reduce(
        (acc, article) => acc + article.nbr * article.prix,
        0)*100});
    res.sendStatus(200);
    var user = {
      nom: infos.card.name,
      email: infos.email,
      adresse: infos.card.address_line1,
      zip: infos.card.address_zip,
      ville: infos.card.address_city,
    }

    let produitsDigital = '';
    let produitsPhysique = '';
    for (const produit of panier) {
      if (produit.type === "digital") {
        let son= liensDl.find(item => item.titre === produit.titre);
        produitsDigital += `<tr><td>${produit.titre} </td><td>${produit.prix}€</td><td style=" overflow: hidden; margin-left:20%"><a href="${son.lien}"><img src="https://img.icons8.com/ios/50/000000/download--v1.png"></a></td></td></tr>`;
      }
      else{
        let stock = require('./stock.json');
        const produitStock = stock.find(item => item.name === produit.titre);

        if (produitStock) {
          produitStock.quantity -= produit.nbr;
          fs.writeFileSync('./stock.json', JSON.stringify(stock, null, 2));
        }

        produitsPhysique += `<tr><td>${produit.titre} <h3>(x${produit.nbr})</h3></td><td>${produit.prix * produit.nbr}€</td></tr>`;


// ici , modifier le stock.json, là ou produit.titre === stock.name  , quantity -= quantity*produit.nbr

      }
    }

    let digital = produitsDigital == '';
    let physique = produitsPhysique == '';
    let digittalPhysique = physique && digital

    if(!digital) {
      var headerTableau = "<tr><th>Produit</th><th>Prix</th><th>Téléchargement</th></tr>";
    }
    else{
      var headerTableau = "<tr><th>Produit</th><th>Prix</th></tr>";
    }
    let bodyTableau = produitsDigital + produitsPhysique;
    let tableau = headerTableau+bodyTableau;


    var footer = "Merci de votre commande!";
    footer += !digital ? " Vous pouvez télécharger les sons en WAV en cliquant sur les icônes à côté des sons." : "";
    footer += !physique ? " Nous faisons de notre mieux pour vous envoyer votre colis au plus vite." : "";


    var fullHTML = `
    <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmation de commande</title>
        <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333333;
          margin-top: 0;
          margin-bottom: 20px;
        }
        p {
          color: #666666;
          margin-bottom: 10px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        th, td {
          text-align: left;
          padding: 10px;
          border-bottom: 1px solid #eeeeee;
        }
        tfoot {
          font-weight: bold;
        }
        .footer {
          font-size: 12px;
          color: #888888;
          margin-top: 20px;
        }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Confirmation de commande</h1>
          <p>Bonjour ${user.nom}</p>
          <p>Nous sommes ravis de vous informer que votre commande a été confirmée avec succès.</p>
          <table>
            <thead>
              ${headerTableau}
            </thead>
            <tbody>
              ${bodyTableau}
            </tbody>
            <tfoot>
              <tr>
                <td><strong>Total</strong></td>
                <td>${panier.reduce((acc, article) => acc + article.nbr * article.prix,0)}€ </td>
              </tr>
            </tfoot>
          </table>
          <p>${footer}</p>
          <p>Cordialement,</p>
          <p>L'équipe B2B</p>
          <p class="footer">Veuillez ne pas répondre à cet e-mail. Pour toute assistance, veuillez nous contacter à bicraveurs2bass@gmail.com.</p>
        </div>
      </body>
    </html>`;

    const transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port:465 ,
      secure: true,
      auth: {
        user: 'boutique@bicraveurs2bass.fr',
        pass: 'Kx5aqnhr500'
      }
    });

    const mailOptions = {
      from: 'boutique@bicraveurs2bass.fr',
      to: user.email,
      subject: 'Votre Commande n° ' + Date.now(),
      html: fullHTML
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Erreur lors de l\'envoi de l\'e-mail:', error);
      } else {
        console.log('E-mail envoyé:', info.response);
      }
    });


    var headerTableau = "<tr><th>Produit</th><th>Prix</th></tr>";
    let mailb2B = `<html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmation de commande</title>
      <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }
      h1 {
        color: #333333;
        margin-top: 0;
        margin-bottom: 20px;
      }
      p {
        color: #666666;
        margin-bottom: 10px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }
      th, td {
        text-align: left;
        padding: 10px;
        border-bottom: 1px solid #eeeeee;
      }
      tfoot {
        font-weight: bold;
      }
      .footer {
        font-size: 12px;
        color: #888888;
        margin-top: 20px;
      }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Nouvelle commande!</h1>
        <h2>Attention à bien vérifier la quantité</h2>
        <table>
          <thead>
            ${headerTableau}
          </thead>
          <tbody>
            ${produitsPhysique} 
          </tbody>
          <tfoot>
            <tr>
              <td><strong>Total</strong></td>
              <td>${panier.reduce((acc, article) => acc + article.nbr * article.prix,0)}€ </td>
            </tr>
          </tfoot>
        </table>
        <h2>Envoyer à</h2>
        <div>
            <h3>${user.nom}</h3>
            <p>${user.adresse}</p>  
            <p>${user.zip}</p>
            <p>${user.ville}</p>
        </div>
        <h3>Email problème commande:</h3>
            <p>
               ${user.email}
            </p>

      </div>
    </body>
  </html>`





    const mailOptionsrecu = {
      from: 'boutique@bicraveurs2bass.fr',
      to: "bicraveurs2bass@gmail.com,charliebeaufils@gmail.com",
      subject: '(B2B) Nouvelle commande!!!' ,
      html: mailb2B,
    
    }



    transporter.sendMail(mailOptionsrecu, (error, info) => {
      if (error) {
        console.log('Erreur lors de l\'envoi de l\'e-mail:', error);
      } else {
        console.log('E-mail envoyé:', info.response);
      }
    });





    // ICI ENVOI EMAIL , physique, digital -> lien de dl  si physique -> modifier stock

  } catch (error) {
    console.error('Erreur de paiement', error);
    res.status(500).json({ error: 'Erreur de paiement' });
  }
});

app.listen(3001, () => {
  console.log('Serveur en écoute sur le port 3001');
});