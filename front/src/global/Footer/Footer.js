import { Fade } from 'react-reveal';
import './Footer.css';
import logo from '../Nav/images/logo_rond.png';
import icoFb from './ico/icoFacebook.svg';
import icoInsta from './ico/icoInstagram.svg';
import icoSoundcloud from './ico/icoSoundcloud.svg';
import icoSpotify from './ico/icoSpotify.svg';
import icoDeezer from './ico/icoDeezer.svg';
import icoShotgun from './ico/icoShotgun.svg';


function Footer() {
    return (
        <Fade bottom  cascade>
        <footer className='contaner_footer'>
            <div className='foot1'>
                <img className='logo_b2b' alt="logo du label B2B records" src={logo}/>
                <h5 className='description_b2b'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet, libero eget bibendum sagittis, turpis erat venenatis sapien, quis porttitor nisi neque quis neque. Nam id odio risus. Sed id tellus interdum lorem consequat sollicitudin et at est. Nullam condimentum lacinia enim at consequat. Aliquam sed sapien sit amet eros congue eleifend a vel felis. Aenean porta in nisi nec pellentesque. Cras volutpat pulvinar dolor eu malesuada. Curabitur ut velit urna. Pellentesque lobortis accumsan arcu, nec suscipit felis sagittis eget."</h5>
            </div>

            <div className='foot2'>
                <span className='nous_suivre'>
                    <img alt="bouton du Facebook du label Bicraveurs2Bass" onClick={()=> window.open("https://www.facebook.com/b2b.recordz")} src={icoFb} className='icoHover icoFoot'/> 
                    <img alt="bouton du Instagram du label Bicraveurs2Bass" onClick={()=> window.open("https://www.instagram.com/b2b.recordz/")} src={icoInsta} className='icoHover icoFoot'/>        
                    <img alt="bouton du Soundcloud du label Bicraveurs2Bass" onClick={()=> window.open("https://soundcloud.com/user-698626032")} src={icoSoundcloud} className='icoHover icoFoot'/>      
                    <img alt="bouton du Spotify du label Bicraveurs2Bass" onClick={()=> window.open("https://open.spotify.com/playlist/1kAKlFqcpZ5KLggcM234Yx?si=R4PZLt8mQbaR-xJDgEvTfw&utm_medium=share&utm_source=linktree&nd=1")} src={icoSpotify} className='icoHover icoFoot'/>           
                    <img alt="bouton du Deezer du label Bicraveurs2Bass" onClick={()=> window.open("https://www.deezer.com/search/label%3A%22bicraveurs2bass%22")} src={icoDeezer} className='icoHover icoFoot'/>
                </span>
                <span className='container_grandIco'>    
                    <img alt="bouton de la billetterie "  onClick={()=> window.open("https://passculture.app/recherche?date=null&hitsPerPage=20&locationFilter=%7B%22locationType%22%3A%22EVERYWHERE%22%7D&offerCategories=%5B%5D&offerSubcategories=%5B%5D&offerIsDuo=false&offerIsFree=false&offerIsNew=false&offerTypes=%7B%22isDigital%22%3Afalse%2C%22isEvent%22%3Afalse%2C%22isThing%22%3Afalse%7D&priceRange=%5B0%2C300%5D&query=%22bicraveurs2bass%22&tags=%5B%5D&timeRange=null&view=%22Results%22&searchId=%225f203173-3fce-4a81-9905-e4d93f0b351f%22")} src="https://pass.culture.fr/wp-content/uploads/2020/11/R_PASS_CULTURE_HD.png" className='icoHover icoPass'/>    
                    <img alt="bouton pour accéder au pass culture du label" onClick={()=> window.open("https://shotgun.live/fr/venues/b2b-records")} src={icoShotgun} className='icoHover icoShotgun'/>   
                </span>           
            </div>

            <div className='foot3'>
                <span className='span_cgu'>
                    <a className='CGUect' href='/mentions_legales'>Mentions légales</a>
                    <a className='CGUect' href='/shop/CGV'> CGU/CGV</a>
                </span>
                <span className='CGUect siren'>Siren: 919736314</span>
            </div>
            <h5 className='concu'>Conçu par Charlie BEAUFILS</h5>
        </footer>  

        </Fade>
      );
    
}
export default Footer;




