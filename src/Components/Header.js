import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    const menuToggle = (e) =>{
        const burger = document.querySelector('.burger')
        const list = document.querySelector('.header__list')
        burger.classList.toggle('open')
        if(burger.classList.contains('open')){
            list.style.height = '290px'
            list.style.borderTop = '1px solid rgba(250, 250, 250, 0.12)';
        }else{
            list.style.height = '0px'
            list.style.borderTop = '0px';
        }
    }
    return (
        <div className="header">
            <img src='/assets/logo.png' alt="logo"/>
            <div className="header__menu-sm" onClick={()=>{menuToggle()}}>
                <p>MENU</p>
                <div className="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul className="header__list">
                <Link to="/">
                    <li className="header__item">STRONA GŁÓWNA</li>
                </Link>
                <Link to="/o-firmie">
                    <li className="header__item">O FIRMIE</li>
                </Link>
                <Link to="/oferta">
                    <li className="header__item">OFERTA</li>
                </Link>
                <Link to="/realizacje">
                    <li className="header__item">REALIZACJE</li>
                </Link>
                <Link to="/akty-prawne">
                    <li className="header__item">AKTY PRAWNE</li>
                </Link>
                <Link to="/wspolpraca">
                    <li className="header__item">WSPÓŁPRACA</li>
                </Link>
                <Link to="kontakt">
                    <li className="header__item">KONTAKT</li>
                </Link>
            </ul>
            <div className="header__widget-wrapper">
                <div className="header__widget">
                    <i className="fa  fa-phone  fa-3x"></i>
                    <div className="widget__text">
                        <p>516-007-017</p>
                        <p>biuro@btib.pl</p>
                    </div>
                </div>
                <div className="header__widget">
                    <i className="fa fa-home fa-3x"></i>
                    <div className="widget__text">
                        <p>ul.Starorudzka 12E</p>
                        <p>93-418 Łódź</p>
                    </div>
                </div>
                <div className="header__widget">
                    <i className="fa fa-clock-o fa-3x"></i>
                    <div className="widget__text">
                        <p>Godziny Otwarcia</p>
                        <p>8:00-16:00</p>
                    </div>
                </div>        
                <Link to="">
                    <i className="fa  fa-facebook"></i> 
                </Link>
            </div>
        </div>
    )
}

export default Header
 