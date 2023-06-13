import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';

import useLocoScroll from '../accueil/hooks/useLocoScroll.js';
import AfficherSons from './Sons/Afficher_sons.js'; 
import Panier from './Panier/Panier.js'; 

import Curseur from '../global/Curseur/Curseur.js'; 

 
import IcoPanier from './IcoPanier/IcoPanier.js'; 
import AfficherPhysique from './AfficherPhysique/AfficherPhysique.js';

import totalArticle from './Panier/Panier.js';



function Mainshop() {

  const [panier, updatePanier] = useState([]);
  const [voirPanier, setvoirPanier] = useState(false);
  const [voirForm, setvoirForm] = useState(false);
  

  document.querySelector('html').classList.remove('has-scroll-init');
  document.querySelector('html').classList.remove('has-scroll-smooth');
  const scrollbars = document.getElementsByClassName('c-scrollbar');
  for (let i = 0; i < scrollbars.length; i++) {
    scrollbars[i].remove();
  }





  useLocoScroll(0, true);


  return (
    

    <div className="App"  >
      <Helmet>
        <title>Boutique Bicraveurs2Bass</title>
        <meta name="description" content="Ici, on vend des CD, des sons en wav et bientôt du tekno wear" />
      </Helmet>
        <Curseur/>
      
        <div id="flou" className="flou_disabled">
          <AfficherPhysique panier={panier} updatePanier={updatePanier}/>
          <AfficherSons panier={panier} updatePanier={updatePanier} />
        </div >

      <IcoPanier totalArticle ={ totalArticle } panier={panier} voirPanier={voirPanier} setvoirPanier={setvoirPanier}/>
      <Panier panier={panier} updatePanier={updatePanier} setvoirPanier={setvoirPanier} voirPanier={voirPanier} voirForm={voirForm} setvoirForm={setvoirForm}/>
    </div>
    
  );
}

export default Mainshop;
export { totalArticle };


