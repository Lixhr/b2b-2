

import { Slide } from 'react-reveal';
import './musique.css';
import icoSoundcloud from '../global/Footer/ico/icoSoundcloud.svg';
import icoSpotify from '../global/Footer/ico/icoSpotify.svg';
import icoDeezer from '../global/Footer/ico/icoDeezer.svg';
import { Helmet } from 'react-helmet';
function Musique() {




  return (
    <div className='rideaunoir' data-scroll-section>
        <Helmet>
          <title>Les sons du label - B2B Records</title>
          <meta name="description" content="Retrouvez nos dernières sorties en streaming. De la techno au hardcore en passant par la doomcore et la gabber" />
        </Helmet>
    <Slide top duration={1000}>
      <div className='container_musique'>
        <div className="div_musique">
          <span className='intro_musique'>
            <h1 className='intro_musique--1'>Retrouvez tous les sons du label</h1>
            <h2 className='intro_musique--2'>HARDCORE/GABBER/DOOMCORE/TECHNO</h2>
          </span>
              <div className='container'>
              <span className="container_ico"></span>
                <span className='fond_ico' onClick={()=> window.open('https://soundcloud.com/user-698626032')}>
                  <img className='ico' src={icoSoundcloud} alt="Bouton vers le Soundcloud des Bicraveurs2bass" />
                </span>
                <span className='fond_ico' onClick={()=> window.open('https://open.spotify.com/playlist/1kAKlFqcpZ5KLggcM234Yx?si=R4PZLt8mQbaR-xJDgEvTfw&utm_medium=share&utm_source=linktree&nd=1')}>
                  <img className='ico' src={icoSpotify} alt="Bouton vers le Spotify des Bicraveurs2bass"/>  
                </span>
                <span className='fond_ico' onClick={()=> window.open('https://www.deezer.com/search/label%3A%22bicraveurs2bass%22')}>
                  <img className='ico' src={icoDeezer} alt="Bouton vers le Deezer des Bicraveurs2bass"/>          
                </span>
              </div>
          </div> 
      </div>
    </Slide>
    </div>


    
  );
}

export default Musique;



