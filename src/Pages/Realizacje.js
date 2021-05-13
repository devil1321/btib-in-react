import React from 'react'
import PageSheme from '../Components/PageSheme'
import Heading from '../Components/Heading'
import Breadcrumb from "../Components/Breadcrumb";

const Realizacje = () => {
    return (
        <div className="realizacje">
            <PageSheme>
                <Heading text="Realizacje"/>
                <Breadcrumb path="Realizacje" />
                <div className="realizacje__content">
                    <p>Kadra Inżynierska naszej Firmy od wielu lat uczestniczy w realizacji wielu skomplikowanych robót budowlanych. Braliśmy udział w realizacjach obiektów inżynieryjno-drogowych, renowacjach, rozbudowach i przebudowach obiektów zabytkowych, budowach obiektow użyteczności publicznej, budowach specjalistycznych obiektów produkcyjno-magazynowych, rozbiórkach skomplikowanych obiektów przemysłowych. Realizujemy także budownictwo mieszkaniowe jedno i wielorodzinne.</p>
                    <p>Poniżej przedstawiamy kilka obiektów realizowanych przez Naszą kadrę techniczną.</p>
                </div>
            </PageSheme>
        </div>
    )
}

export default Realizacje
