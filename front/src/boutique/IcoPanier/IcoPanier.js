import './IcoPanier.css';
import icoPanier from './ico/icoPanier.png';




function IcoPanier({panier, isPlaying , voirPanier, setvoirPanier} ) {

  function classChanger(id_target, add , remove){
    if (document.getElementById(id_target) != null){
      let target = document.getElementById(id_target);
      target.classList.remove(remove);
      target.classList.add(add);
    }
  }

  function totalArticle(panier){
    if(isPlaying === true){
      classChanger('icopanier',  'icopanier_top', 'div_icopanier');
    }
    else {
      classChanger('icopanier',  'div_icopanier', 'icopanier_top');
    }
    const totalArticle = panier.reduce(
		(acc, article) => acc +  parseInt(article.nbr)  ,
		0
	)
    return(totalArticle);
  }



  function afficherPanier(){
  classChanger('flou', 'flou_active','flou_disabled'  );
  setvoirPanier(true);
  }




  return (
      <div>
        {!voirPanier && <div id ="icopanier" className="div_icopanier" onClick={()=>afficherPanier()}>
            <span>
              {panier.length>0 &&<span className='fond_nbrPanier'></span>}
              {panier.length>0 &&<span className='nbrPanier'> {totalArticle(panier)}</span>}
              <img src={icoPanier} className='iconePanier' alt="Bouton pour accéder au panier"></img>
          </span>
        </div>}
      </div>


  );

}

export default IcoPanier;
