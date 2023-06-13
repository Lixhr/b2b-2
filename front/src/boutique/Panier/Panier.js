import './Panier.css';
import icoClose from './ico/close.png';
import Paiement from "./Formulaire/Paiement/Paiement.js";
import Zoom from 'react-reveal';



function Panier({ panier, updatePanier, voirPanier, setvoirPanier, setvoirForm, voirForm }) {



	const totalMontant = panier.reduce(
		(acc, article) => acc + article.nbr * article.prix,
		0
	)
    const totalArticle = panier.reduce(
		(acc, article) => acc +  parseInt(article.nbr)  ,
		0
	)
function supprimerDuPanier(titre, nbr){ 
  const nouveauPanier = panier.map((article) => {
    if (article.titre === titre) {
      return {
        ...article,
        nbr:0,
        prix: article.prix
      };
    }
    return article;
  });
  updatePanier(nouveauPanier);

}

function viderPanier(){ 
  updatePanier([]);
}

function  modifierValue(titre, nbr, value, type){
  const nouveauPanier = panier.map((article) => {
    if (article.titre === titre) {

      if (article.type === "digital"){
        if(value >1){
          alert("impossible");
          return {  
            ...article,
            nbr:"1",
            prix: article.prix
          }
        }
        else{
          return {  
            ...article,
            nbr: 0,
            prix: article.prix
          }
        }
      }
      else{
        return {
          ...article,
          nbr:value,
          prix: article.prix
        }
      }
    }
    return article;
  });

  updatePanier(nouveauPanier);
}


function classChanger(id_target, add , remove){
  if (document.getElementById(id_target) != null){
    let target = document.getElementById(id_target);
    target.classList.add(add);
    target.classList.remove(remove);
  }
}









function closePanier() {
  classChanger('flou', 'flou_disable','flou_active');
  setvoirPanier(false);
  setvoirForm(false);
}





function classNamePanier(){
  if(voirPanier){
    return('container_panier panier_active');
  }
  else{
    return('container_panier panier_disabled');
  }
}





    return (

      <div id="panierContainer"  className={classNamePanier()} >
          <span className='titrePanier'>Panier</span>
          {totalArticle > 0 &&
          <div className='table_responsive'>
            <table className="tableau_container" border="0">
              <tr className='tableau_header'><th className="tableau_produit">Produit</th><th className="tableau_type">Type</th><th className="tableau_prix">Prix unit</th><th className='tableau_qte'>Qté</th><th className='tableau_total'>Total</th><th className='tableau_total'></th></tr>
                {panier.map((article, index) => (
                  
                article.nbr > 0 &&<Zoom right> <tr>
                
                <th className="tableau_produit">{article.titre}</th>
                <th className="tableau_type">{article.type === 'digital' ? 'digital' : 'physique'}</th>
                <th className="tableau_prix">{article.prix}€</th>
                <th className="tableau_qte"><input type="number" className='nbrValue' value={article.nbr} onChange={e => modifierValue(article.titre, article.nbr, e.target.value, article.type) }/></th>
                <th className='tableau_total'>{article.prix*article.nbr}€</th> 
                <th className='tableau_croix'><img src={icoClose} alt="bouton permettant de supprimer un élément du panier" className='icoDeleteItem' onClick={() => supprimerDuPanier(article.titre, article.nbr)}></img></th></tr></Zoom>
                ))  
                
              }
          </table>
        </div>
        }








        {!voirForm && voirPanier &&<img src={icoClose} alt="Bouton permettant de fermer le panier" className='boutonClose' onClick={() => 
            closePanier()
  
            }></img>}
          {totalMontant>0 && <button className='boutton_vider' onClick={()=>viderPanier()}> Vider le panier</button>}  
          {totalArticle<1 && <span className='vide'>Vous n'avez ajouté aucun article... </span>}
          {totalMontant>0 && 
          <div className='div_total'>
            <span className='total_prix'>Total:{totalMontant} €</span>
          <Paiement prix={totalMontant} panier={panier} />
          </div>
          }    
        </div>
      );
}
export default Panier;
