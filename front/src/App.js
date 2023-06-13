
import './App.css';
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Mainshop from './boutique/Mainshop.js';
import Musique from './musique/Musique.js';
import Events from './events/Events.js';
import Nav from './global/Nav/Nav.js'; 
import Footer from './global/Footer/Footer.js'; 
import ScrollToTop from './global/ScrollToTop.js';
import Accueil from './accueil/Accueil2.js';
import PaiementOk from './boutique/Panier/PaiementOK.js';
import Cgv from './boutique/CGV/Cgv.js';
import MentionsLegales from './global/Footer/Mentions_legales/Mentions_legales.js';

function App() {
  
  return (
    <div>
      <Nav/>
        <div className="App" id="main-container">
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"></meta>
            <AnimatePresence mode='wait'>
                <ScrollToTop/>
                <Routes>   
                  <Route path="/" element={ <Accueil/>}/> 
                  <Route path="/shop" element={ <Mainshop />}/>    
                      <Route path="/paiement/success" element={ <PaiementOk />}/> 
                  <Route path='/musique' element={ <Musique />}/>
                  <Route path='/events' element={ <Events />}/>

                  <Route element={<h1>NOT FOUND</h1>} />
                  <Route path="/shop/CGV" element={ <Cgv/>}/> 
                  <Route path="/Mentions_legales" element={ <MentionsLegales/>}/> 
                </Routes>  
            </AnimatePresence>
      </div>
      <Footer/>  
    </div>
  );
}

export default App;



