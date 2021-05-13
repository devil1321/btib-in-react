import React from 'react'
import PageSheme from '../Components/PageSheme'
import Heading from '../Components/Heading'
import Breadcrumb from "../Components/Breadcrumb";


const AktyPrawne = () => {
    return (
        <div className="akty-prawne">
            <PageSheme>
                <Heading text="Akty Prawne"/>
                <Breadcrumb path="Akty Prawne" />
                
            </PageSheme>
        </div>
    )
}

export default AktyPrawne
