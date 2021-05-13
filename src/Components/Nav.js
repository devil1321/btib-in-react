import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div className="nav">
            <ul className="nav__list">
                <Link to="/">
                    <li className="nav__item">STRONA GŁÓWNA</li>
                </Link>
                <Link to="/o-firmie">
                    <li className="nav__item">O FIRMIE</li>
                </Link>
                <Link to="/oferta">
                    <li className="nav__item">OFERTA</li>
                </Link>
                <Link to="/realizacje">
                    <li className="nav__item">REALIZACJE</li>
                </Link>
                <Link to="/akty-prawne">
                    <li className="nav__item">AKTY PRAWNE</li>
                </Link>
                <Link to="/wspolpraca">
                    <li className="nav__item">WSPÓŁPRACA</li>
                </Link>
                <Link to="kontakt">
                    <li className="nav__item">KONTAKT</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav
