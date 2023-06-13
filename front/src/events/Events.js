
import { Zoom, Fade} from 'react-reveal';
import './Events.css';
import imgRelease from './release_party/images/event.png';
import Bouton from './components/Bouton/Bouton.js'
import { Helmet } from 'react-helmet';

function isBefore(date) {
    const dateAjd = new Date();
    const dateVerif = new Date(date);
    return dateAjd.getTime() < dateVerif.getTime();
  }


function Events() {
  return (
    <div className="div_events">
        <Helmet>
            <title>Evenements Techno Hardcore</title>
            <meta name="description" content="Retrouvez toutes nos soirées techno / hardcore en Normandie et ailleurs" />
        </Helmet>
      <Fade onReveal={ () => document.getElementById("rideau").classList.add('down')  }>
        <h1 id="rideau" className='titre_page_events'>Nos events</h1>
      </Fade>
      <div className='container_event1'>
          
      <Zoom bottom cascade delay={700}>
        
          <span className='span_event'>
            <img src={imgRelease} className='img_event' alt="affiche de l'événement Release Party, organise par l'association"></img>

            {isBefore("2023-06-03") ? (<p className='paragraphe_event'>VOUS ETES ATTENDUS DE PIED FERME LE 03 JUIN DANS LE SUD MANCHE POUR FETER 1 AN DU LABEL ET PLUS ... !
            <ul className='li_event'>
                <li>Sonorisation par PPP Crew, Zodiak et Deglingotek</li>
                <li>Indoor</li>
                <li>Grosse line up sauce B2B !</li>
                <li>Big décos/mapping/lights !</li>
                <li>Stands bar/bouffe/cend'art !</li>
                <li>Stand B2B CD/Vinyles !</li>
                <span className='span_boutons'>
                <Bouton value={"EN SAVOIR PLUS"}   lien="https://www.instagram.com/p/Copt8Q7oEJP/" className={'bouton_noir'}></Bouton>
                <Bouton value={"BILLETTERIE"} lien="https://shotgun.live/fr/events/release-party-techno-to-hardcore#EventTickets" className={'bouton_blanc'}></Bouton>
              </span>
                </ul>
             </p>)  :(
            <span>
              <p className='paragraphe_event'>VOUS ARRIVEZ APRES LA GUERRE!
              <p className='li_event'> Pas de panique, d'autres évents arriveront prochainement!</p>
              <p className='li_event'> Suivez-nous pour être au courant des nouveautés du label</p>
             
            </p>
            <span className='span_boutons'>
              <Bouton value={"VOIR L'AFTERMOVIE"} lien="https://www.instagram.com/b2b.recordz/" className={'bouton_noir'}></Bouton>
              <Bouton value={"NOUS SUIVRE"}  lien="https://www.instagram.com/b2b.recordz/" className={'bouton_blanc'}></Bouton>
            </span>
          </span>    

             
             
             )}
        </span>
      </Zoom>          
    </div>
 
    </div>
    
  );
}

export default Events;



