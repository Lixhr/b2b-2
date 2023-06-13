
import './Accueil.css'
import useLocoScroll from './hooks/useLocoScroll.js';
import Fade from 'react-reveal/Fade';
import logo_rond from '../global/Nav/images/logo_rond.png';
import React, { useRef, useEffect, useState } from 'react';
import CarteArtiste from './CarteArtiste/CarteArtiste.js';
import { Helmet } from 'react-helmet';


function Accueil2() {
    const [preloader, setPreloader] = useState(true);
    useEffect(() => {
    
      }, []);
    useLocoScroll(!preloader);

    const [timer, setTimer] = useState(1);
    const id = useRef(null);

    const clear = ()=>{
        window.clearInterval(id.current);
        setPreloader(false);
    }

    useEffect(()=>{
        id.current = window.setInterval(()=>{
            setTimer((timer)=> timer-1)

        },1000 )

    }, [])

    useEffect(()=>{
        if(timer ===0){
            clear();
        }

    }, [timer])



    return(

        <span>
            <Helmet>
                <title>Bicraveurs2Bass RECORDS</title>
                <meta name="description" content="Site officiel du label B2B Records, orienté techno / hardcore. On y organise des events, vend des CD et prochainement des vinyles" />
            </Helmet>
            {preloader?(

            <div className='loader'>
                <h2> chargement</h2>

            </div>)
            :(

            <div id="main-container" className="main-container" data-scroll-section> 
                <div className='div_b2b_records' id="sec1" >
                    <span className='span_b2b' >
                        <h1 className='titre_b2b' data-scroll-position="top" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3">BICRAVEURS2BASS</h1>
                        <span className='titre_b2b titre_b2b--contour' data-scroll-position="top" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6">BICRAVEURS2BASS</span>
                        <span className='titre_b2b titre_b2b--contour' data-scroll-position="top" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-9">BICRAVEURS2BASS</span>
                    </span>
                    <span className='span_records' >
                        <h2 className='titre_b2b' data-scroll-position="top" data-scroll data-scroll-direction="horizontal" data-scroll-speed="3">RECORDS</h2>
                        <span className='titre_b2b titre_b2b--contour' data-scroll-position="top" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">RECORDS</span>
                        <span className='titre_b2b titre_b2b--contour' data-scroll-position="top" data-scroll data-scroll-direction="horizontal" data-scroll-speed="9">RECORDS</span>
                    </span>
                </div>
 
                <div className='section2' >
                    <Fade top >
                        <h3 className='label_ind blanc'  >LABEL INDÉ</h3> 
                    </Fade> 
                    <Fade bottom>    
                        <h3 className='label_ind'  >NORMAND</h3>
                    </Fade>
                </div>
                
                <div className='section3' >
                    <img className='logo_rond' src={logo_rond} alt="Logo du label Bicraveurs2Bass" data-scroll-position="top" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2"></img>
                </div>

                <div className='section4' >
                   <span id="sec4"   className='span_genre_accueil --1'>
                        <h3  className='genre_accueil --1' data-scroll-position="top" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3">HARDCORE</h3>
                        <h3  className='genre_accueil --1' data-scroll-position="top" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3">GABBER</h3>
                    </span>
                    <span  className='span_genre_accueil --2'>
                        <h3  className='genre_accueil --2'data-scroll-position="top" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3" >DOOMCORE</h3>
                        <h3  className='genre_accueil --2' data-scroll-position="top" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3">TECHNO</h3>
                    </span>
                </div>

                <div className='section5' >
                    <h4 className='titre_pres'data-scroll-position="top" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-0.1" >PRODUCTION</h4>
                    <h4 className='titre_pres' data-scroll-position="top" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-0.5">DJ SETS</h4>
                    <h4 className='titre_pres'data-scroll-position="top" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-1" >EVENTS</h4>
                </div>


                <div className='section6' >
                    <Fade left>
                    <h5 className='nos_artistes'>NOS ARTISTES</h5>
                    </Fade>                    
                    <div className='grid_artistes' >
                        <CarteArtiste 
                        nom="Pomox"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl elit, blandit quis purus a, viverra pharetra nisi. Phasellus neque purus, mollis efficitur tellus non, molestie venenatis massa. Nam ultrices nulla lorem, at varius ipsum. "
                        />
                        <CarteArtiste 
                        nom="Lich'ar"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl elit, blandit quis purus a, viverra pharetra nisi. Phasellus neque purus, mollis efficitur tellus non, molestie venenatis massa. Nam ultrices nulla lorem, at varius ipsum. "
                        />
                    </div>

                </div>
            </div>
            )}
        </span>

    )
}

export default Accueil2;
