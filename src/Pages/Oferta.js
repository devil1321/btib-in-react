import React from 'react'
import PageSheme from '../Components/PageSheme'
import Heading from '../Components/Heading'
import Breadcrumb from "../Components/Breadcrumb";

const Oferta = () => {
    return (
        <div className="oferta">
            <PageSheme>
                <Heading text="Oferta"/>
                <Breadcrumb path="Oferta" />
                <div className="oferta__content">
                    <p>Zakres działalności <span className="f-bold">BTIB - BAU TECHNIK Inżynieria Budowlana:</span></p>
                    <p>
                    1. Pomoc w wyborze odpowiedniej nieruchomości do realizacji zamierzonej Inwestycji Budowlanej.
                    <br />
                    2. Uzyskanie decyzji o Warunkach Zabudowy lub odpowiedniego wypisu z Tekstu Planu Zagozpodarowania Przestrzennego.
                    <br />
                    3. Uzyskanie Warunków Technicznych od Gestorów Mediów ( woda- kanalizacja, energia elektryczna, gaz, energia cieplna)
                    <br />
                    4. Projektowanie obiektów budowlanych wraz z uzyskaniem Decyzji o Pozwoleniu na budowę.
                    <br />
                    5. Realizacja obiektów budowlanych, wybór wykonawców robót budowlano-instalacyjnych.
                    <br />
                    6. Formalne zakończenie procesu budowlanego z uzyskaniem Decyzji o Pozwolenie na użytkowanie.
                    <br />
                    7. Przekazanie obiektu do eksploatacji.
                    <br />
                    8. Okresowe przeglądy techniczne obiektów budowlanych zgodnie z wymogami Nadzoru Budowlanego.
                    <br />
                    9. Ekspertyzy i doradztwo techniczno-budowlane.
                    <br />
                    10. Pełnienie samodzielnych funkcji technicznych w budownictwie.
                    <br />
                        <span>10.1 Kierownictwo Budowy</span>
                    <br />
                        <span>10.2 Inspektorzy Nadzoru Inwestorskiego</span>
                    <br />
                    11. Pełnienie funkcji Inwestora Zastępczego.
                    <br />
                    12. Wykonywanie kosztorysów budowlanych.
                    </p>
                    <p>Kadra techniczna <span className="f-bold">BTIB</span> posiada wymagane uprawnienia do realizacji powyższych zadań.</p>
                </div>
            </PageSheme>
        </div>
    )
}

export default Oferta
