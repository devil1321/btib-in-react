import React from 'react'
import PageSheme from '../Components/PageSheme'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Home = () => {
    return (
        <div className="home">
            <PageSheme>
                <div className="home__carousel">
                    <Carousel 
                        autoPlay={true}
                        emulateTouch={true}
                        infiniteLoop={true}
                        interval={3000}
                        showStatus={false}
                        showThumbs={false}
                        stopOnHover={false}
                       
                    >
                    <div className='home__carousel-slide'>
                        <img src="assets/slide-2.jpg" alt="slide" />
                    </div>
                    <div className='home__carousel-slide'>
                        <img src="assets/slide-1.jpg" alt="slide" />
                    </div>
                    <div className='home__carousel-slide'>
                        <img src="assets/slide-3.jpg"  alt="slide"/>
                    </div>
                    </Carousel>
                </div>
                <h1 className="home__heading">BTIB BAU-TECHNIK Inżynieria Budowlana Sp. z o. o.</h1>
            </PageSheme>
        </div>
    )
}

export default Home
