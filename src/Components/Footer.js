import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage:'url(/assets/title-area-pattern.png)'}}>
            <div className="footer__widget">
                <h6 className="footer__widget-heading">O FIRMIE</h6>
                <img src="/assets/logo_footer.png" alt="" />
                <Link to="">CZYTAJ WIĘCEJ</Link>
            </div>
            <div className="footer__widget">
                <h6 className="footer__widget-heading">MENU</h6>
                <ul className="footer__widget-list">
                    <li className="footer__widget-list-item"><Link to="">Strona Główna</Link></li>
                    <li className="footer__widget-list-item"><Link to="">O firmie</Link></li>
                    <li className="footer__widget-list-item"><Link to="">Oferta</Link></li>
                    <li className="footer__widget-list-item"><Link to="">Realizacje</Link></li>
                    <li className="footer__widget-list-item"><Link to="">Akty Prawne</Link></li>
                    <li className="footer__widget-list-item"><Link to="">Współpraca</Link></li>
                    <li className="footer__widget-list-item"><Link to="">Kontakt</Link></li>
                </ul>
            </div>
            <div className="footer__widget">            
                <h6 className="footer__widget-heading">BTIB NA FACEBOOKU</h6>
                <p>Odwiedź Nasz profil na Facebooku</p>
                <button>Facebook</button>
                <img src="/assets/S0DDLRGO.png" alt="" />
            </div>
            <div className="footer__end">
                <p>Bautechnik - Wszelkie prawa zastrzeżone</p>
                <p>Wykonanie: <Link to="">Projektowanie stron - Wojoweb Kraków</Link><img src='/assets/wojoweb.png' /> &copy; 2015</p>
            </div>
        </div>
    )
}

export default Footer
