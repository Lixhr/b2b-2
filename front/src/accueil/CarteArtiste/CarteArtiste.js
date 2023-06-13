
import './CarteArtiste.css'

import img_lichar from './images_dj/legroslichar.png';
import img_pomox from './images_dj/legrospomox.png';

import Rotate from 'react-reveal/Rotate';



 function CarteArtiste({nom, desc, speed}){
    function img(nom){
        if (nom==="Lich'ar"){
            return(img_lichar);
        }

        if (nom==="Pomox"){
            return(img_pomox);
        }
    }

    return(
        <Rotate bottom left>
            <div className='carte_artiste' style={{ backgroundImage: `url(${img(nom)})` }}>
                <h4 className='nom_artiste'>{nom}</h4>
                <p className='desc_artiste'>{desc}</p>
            </div>
        </Rotate>
    )
}

export default CarteArtiste;