import React from 'react'
import PageSheme from '../Components/PageSheme'
import Heading from '../Components/Heading'
import Breadcrumb from "../Components/Breadcrumb";

const Kontakt = () => {
    return (
        <div className="kontakt">
            <PageSheme>
                <Heading text="Kontakt"/>
                <Breadcrumb path="Kontakt" />

            </PageSheme>
        </div>
    )
}

export default Kontakt
