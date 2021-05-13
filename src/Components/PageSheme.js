import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
const PageSheme = ({children}) => {
    return (
        <div className="page-container">
            <Header />
            <Nav />
                {children}
            <Footer />
        </div>
    )
}

export default PageSheme
