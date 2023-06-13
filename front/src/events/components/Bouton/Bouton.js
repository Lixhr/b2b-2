
import './Bouton.css';

function Bouton({className,value, lien}) {
  return (
    <button className={`bouton_global ${className}`}  onClick={()=> window.open(lien)} >{value}</button>
  );
}

export default Bouton;



