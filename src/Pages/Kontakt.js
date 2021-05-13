import React from 'react'
import PageSheme from '../Components/PageSheme'
import Heading from '../Components/Heading'
import Breadcrumb from "../Components/Breadcrumb";
import {Link} from 'react-router-dom'
const Kontakt = (props) => {
    return (
        <div className="kontakt">
            <PageSheme>
                <Heading text="Kontakt"/>
                <Breadcrumb path="Kontakt" />
                <div className="kontakt__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2472.0163336773417!2d19.438262415348245!3d51.71444370336519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a345aa56e9fb1%3A0x7c027269466d00af!2zU3Rhcm9ydWR6a2EgMTJlLCA5My00MTggxYHDs2TFug!5e0!3m2!1spl!2spl!4v1620918074154!5m2!1spl!2spl" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="kontakt__form">
                    <h2 className="kontakt__heading">Kontakt</h2>
                    <div className="kontakt__text">
                        <h6><i></i>BTIB BAU-TECHNIK Inżynieria Budowlana Sp. z o. o.</h6>
                        <p>93-418 Łódź, ul. Starorudzka 12E</p>
                        <p>NIP: 729-273-24-16</p>
                        <p>REGON: 384768108</p>
                        <p><i></i>516-007-017</p>
                        <Link><i></i>biuro@btib.pl</Link>
                        <p><i></i>Godziny otwarcia</p>
                        <p>8:00-16:00</p>
                        <i></i>
                    </div>
                    <div className="kontakt__form">
                        <form action="" encType='multipart/form-data'>
                            <div className="kontakt__form-input">
                                <input type="text" />
                                <input type="text" />
                                <input type="text" />
                            </div>
                            <div className="kontakt__form-message">
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                                <p>Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o ochronie danych osobowych w związku z wysyłaniem zapytania przez formularz kontaktowy. Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem poinformowany, że do przysługuje mi prawo do dostępu do swoich danych, możliwość ich poprawienia, żądania zaprzestania ich przetwarzania. Administratorem danych osobowych jest BTIB - BAU TECHNIK Inżynieria Budowlana - Tomasz Zagozda, 97-403 Drużbice ul.Zalesie 3A.</p>
                                <button type="submit">WYSLIJ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </PageSheme>
        </div>
    )
}

export default Kontakt
