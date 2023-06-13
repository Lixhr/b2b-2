import './PaiementOK.css'
import { Slide } from 'react-reveal';

function PaiementOK(){




  return (
    <div>            
        <div  className='div_valide'>
            <Slide top cascade>
                <h1 className='titre_paiement_val'>Paiement réussi!</h1>
                <p className='p_mail'>Vous recevrez un mail de confirmation prochainement.</p>
                <p className='p_mail'>Pensez à vérifier vos spams.</p>
                <p className='p_bientot'>A bientôt!</p>
            </Slide>
        </div>
    </div>
  );

};

export default PaiementOK;