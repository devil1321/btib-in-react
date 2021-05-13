import React from 'react'
import PageSheme from '../Components/PageSheme'
import Heading from '../Components/Heading'
import Breadcrumb from "../Components/Breadcrumb";
const Kontakt = (props) => {
    return (
        <div className="kontakt">
            <PageSheme>
                <Heading text="Kontakt"/>
                <Breadcrumb path="Kontakt" />
                <div className="kontakt__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2472.0163336773417!2d19.438262415348245!3d51.71444370336519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a345aa56e9fb1%3A0x7c027269466d00af!2zU3Rhcm9ydWR6a2EgMTJlLCA5My00MTggxYHDs2TFug!5e0!3m2!1spl!2spl!4v1620918074154!5m2!1spl!2spl" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                </div>

                <div className="kontakt__form"></div>
            </PageSheme>
        </div>
    )
}

export default Kontakt
