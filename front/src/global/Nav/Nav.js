import { NavLink } from 'react-router-dom';
import './Nav.css';
import logo_rond from './/images/logo_rond.png';
import home from './ico/home.png';
import musique from './ico/musique.png';
import shop from './ico/shop.png';
import calendrier from './ico/calendrier.png';

import InvitClick from './invitClick/invitClick';

function Nav() {
    return (

        <nav data-scroll-section>
           <InvitClick/>
        <div className="bloc_Nav">    
            <NavLink to="/">
            <img alt="bouton pour accéder a l'accueil" className="icones_Nav" src={home}/>
            </NavLink>
            <NavLink to="/musique">
            <img  alt="bouton pour accéder aux musiques du label" className="icones_Nav" src={musique}/>
            </NavLink>

            <NavLink to="/shop">
            <img  alt="bouton pour accéder a la boutique" className="icones_Nav" src={shop}/>
            </NavLink>

            <NavLink to="/events">
            <img alt="bouton pour accéder aux différents événements du label" className="icones_Nav" src={calendrier}/>
            </NavLink>



            <img className="logo_Rond_nav"  alt="logo du label" src={logo_rond}/>

            <div className="nav_full_width">

                
            <div className="div_titres">




            <NavLink
                id="navLink"
                to="/"
                className={({ isActive, isPending }) =>
                     isActive ? "active" : "pending"
                }
                >
                Accueil
                </NavLink>

 
            <NavLink
                id="navLink"
                to="/musique"
                className={({ isActive, isPending }) =>
                     isActive ? "active" : "pending"
                }
                >
                Musique
                </NavLink>

                <NavLink
                id="navLink"
                to="/shop"
                className={({ isActive, isPending }) =>
                     isActive ? "active" : "pending"
                }
                >
                Boutique
                </NavLink>

                <NavLink
                id="navLink"
                to="/events"
                className={({ isActive, isPending }) =>
                     isActive ? "active" : "pending"
                }
                >
                Events
                </NavLink>
            </div>
            </div>

        </div>
        </nav>

      );
    
}
export default Nav;




