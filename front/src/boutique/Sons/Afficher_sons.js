import React, { useState } from 'react';
import listeSons from './listeSons.json';
import './Afficher_sons.css';
import logopanier from './icones/panier.png';
import logoplay from './icones/play.png';
import Zoom from 'react-reveal';
import { Slide } from 'react-reveal';



function Afficher_sons({panier, updatePanier, updatePlayer, isPlaying, setIsPlaying}) {

  const [genreTri, setGenreTri] = useState('');
  const trierParGenre = (sons, genre) => {
    return sons.filter((son) => son.genre.includes(genre));
  };

  const listeSonsTries = genreTri ? trierParGenre(listeSons, genreTri) : listeSons;


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

  function playSound(url) {
    window.open(url);
  } 




  return (
    
    <div className="container_global">

        <Zoom left><h2 className="sons_wav ami_dj"><Slide top cascade>DJ? retrouve nos sons en wav! </Slide></h2></Zoom>
        <Zoom right cascade>
        <span className='container_dj'>
       
        <span className='span_pass'><h3 className='wav_desc wav_desc--2 eligible'>Eligible au pass culture?</h3> <h3 className='wav_desc wav_desc--2 profitez'>Profitez-en, ça fait marcher l'asso!</h3><a href="https://passculture.app/recherche?date=null&hitsPerPage=20&locationFilter=%7B%22locationType%22%3A%22EVERYWHERE%22%7D&offerCategories=%5B%5D&offerSubcategories=%5B%5D&offerIsDuo=false&offerIsFree=false&offerIsNew=false&offerTypes=%7B%22isDigital%22%3Afalse%2C%22isEvent%22%3Afalse%2C%22isThing%22%3Afalse%7D&priceRange=%5B0%2C300%5D&query=%22bicraveurs2bass%22&tags=%5B%5D&timeRange=null&view=%22Results%22&searchId=%225f203173-3fce-4a81-9905-e4d93f0b351f%22" alt="bouton pour accéder à notre page sur Pass culture" className="logo_pass"></a></span>
      </span>
      </Zoom>
      <Slide left>
      <div className="container_tri">
          <span>Trier par genre:</span>
          <select onChange={(event) => setGenreTri(event.target.value)} className='option_tri'>
            <option value=''>Tous</option>
            <option  value='Gabber'>Gabber</option>
            <option  value='Hardcore'>Hardcore</option>
            <option  value='Tribe'>Tribe</option>
          </select>
      </div>
      </Slide>
     
    <div className="articlesContainer">
      <div className="itemContainer" >
      
        
        {listeSonsTries.map((son, index) => (
          <Zoom bottom index={index}>
          <div className="item">
            <img class="itemImg" src={son.img} alt={"pochette de la musique " +son.titre} />

            <h4 className="titre_son">{son.titre}</h4>
            {son.genre && <h5 className="genre">{son.genre.join(' / ')}</h5>}

            <span className="containerPrix">

            <img onClick={() => playSound(son.url)} className="icoItem  icoItem--play" alt="bouton pour écouter le son" src={logoplay}></img>
            <span className='item_panier_prix'>
             <span className='son--prix'>{son.prix}€ </span>


            <img className='icoItem boutonItem--panier' alt="bouton pour ajouter le son au panier" onClick={() => ajouterPanier(son.titre, son.prix, son.type, son.nbr)}  src={logopanier}></img>
            </span>
            </span>
          </div>
          
          </Zoom>  ))}
    </div>
      
 
        
      </div>
    
     
    </div>
    
  );
}

export default Afficher_sons;