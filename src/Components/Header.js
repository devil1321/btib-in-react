import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="header">
            <img src='/assets/logo.png'/>
            <div className="header__widget-wrapper">
                <div className="header__widget">
                    <i className="fa  fa-phone  fa-3x"></i>
                    <div className="widget__text">
                        <p>516-007-017</p>
                        <p>biuro@btib.pl</p>
                    </div>
                </div>
                <div className="header__widget">
                    <i class="fa fa-home fa-3x"></i>
                    <div className="widget__text">
                        <p>ul.Starorudzka 12E</p>
                        <p>93-418 Łódź</p>
                    </div>
                </div>
                <div className="header__widget">
                    <i class="fa fa-clock-o fa-3x"></i>
                    <div className="widget__text">
                        <p>Godziny Otwarcia</p>
                        <p>8:00-16:00</p>
                    </div>
                </div>        
                <Link to="">
                    <i class="fa  fa-facebook"></i> 
                </Link>
            </div>
        </div>
    )
}

export default Header
 