import Zoom from 'react-reveal';
import React, { useEffect, useState } from 'react';

import { Fade } from 'react-reveal';
import './AfficherPhysique.css';
import img_cd from './images/img_cd.png';
import img_responsive from './images/header-mobile.png';

function AfficherPhysique({panier, updatePanier}) {

  function ajouterPanier(titre, prix, type, nbr) {
    let nouveauPanier ="";
    const existeDeja = panier.find((article) => article.titre === titre);
    if (existeDeja)  {
      if (type == "digital" && nbr > 0) {
        alert("vous ne pouvez pas ajouter plusieurs sons digitaux");
      }
      else {
        nouveauPanier = panier.map((article) => {
          if (article.titre === titre) {
            return {
              ...article,
              nbr: 1 ,
              prix: article.prix
            };
          }
          return article;
        });
        updatePanier(nouveauPanier);
      }
    } else {  
      const nouveauPanier = [...panier, { titre, prix , type, nbr:1}];
      updatePanier(nouveauPanier);
    }
  }



  const [stockCD1, setStockCD1] = useState(0);
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch('/stock');
        if (response.ok) {
          const stockJson = await response.json();
          setStockCD1(stockJson.find(item => item.name === "B2B CD001 - Aim 4 the stars").quantity);
          console.log(stockCD1);


        } else {
          console.error('Erreur lors de la récupération des données du stock.');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données du stock :', error);
      }
    };

    fetchStockData();

  }, []);




  return (
    <div className="phys_body">
        <div className="div_titre">
          <Zoom top>

              <img className='img_responsive' alt="fond psychédélique en noir et blanc" src={img_responsive}/>
              <h1 className="titre_boutique --1">La boutique</h1>
              <h2 className="titre_boutique --2">Bicraveurs2Bass</h2>
          </Zoom>
        
            <div className="div_forme1">
              <Fade bottom>
                <div className="triangle">   
                  <p ></p>          
                </div>
              </Fade>

            </div>
            <h2 className='spanDecouvrez'><p className='test'>découvrez nos sons  </p><p className='test physique'>au format physique</p>  </h2> 
        </div>
        
        
        <div className="div_accroche">
          <Fade left>
            <p className="accroche">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed malesuada libero, ac sollicitudin lectus. Aliquam luctus, augue in hendrerit laoreet, nulla dui rutrum velit, a aliquam mi odio sed purus. Pellentesque quis ligula non nulla interdum rhoncus sed sit. 
            </p> 
          </Fade>   
        </div>
          <Fade left threshold='0.5'>
            <div className="div_articleS">
              <div className="div_article">
                <h3 className="titre_article">CD 001 - Aim 4 the stars</h3>
                  <span className='img_text'>
                    <img src={img_cd} className='img_article' alt="pochette du premier CD de B2B Records"></img>
                      <div className="div_desc_article">
                        <p className="texte_article">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed malesuada libero, ac sollicitudin lectus. </p>
                      </div>
                  </span>


                <div className="div_bouton">
                  <a href="https://soundcloud.com/user-698626032/sets/cd001-aim-4-the-stars" target="_blank"><button className="bouton --ecouter" >écouter la playlist</button></a>
                    {stockCD1> 0 ? <button className="bouton --ajouter" onClick={() => ajouterPanier("B2B CD001 - Aim 4 the stars", "9", "0", "physique")}>ajouter au panier</button>
                     : <button className="bouton --ajouter --epuise" >Vous l'avez épuisé!</button>}


                </div>
            </div>
        
          
          </div>
          </Fade>
    </div>
  );
}

export default AfficherPhysique;
