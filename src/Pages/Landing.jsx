import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import GentsSlide from '../Components/GentsSlide';
import KidsSlide from '../Components/KidsSlide';
import LadiesSlide from '../Components/LadiesSlide';


function Landing() {



    return (

        <>

            <section className='w-100' >


                {/* Slider */}
                <div className='slider'>


                    <Carousel data-bs-theme="dark">

                        <Carousel.Item>


                            <img
                                className="d-block w-100"
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2bbcfa99737217.5ef9be3dbb9a9.jpg"
                                alt="First slide"
                            />

                        </Carousel.Item>


                        <Carousel.Item>


                            <img
                                className="d-block w-100"
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/d88ee699737217.5ef9be3dbcd42.jpg"
                                alt="Second slide"
                            />

                        </Carousel.Item>


                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1ff35f99737217.5ef9be3dbc07e.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>


                    </Carousel>


                </div>


                <div className='container mt-5 p-5 mb-5 Gents-slide'>


                    <h1>Gents Latest</h1>

                    <p>Walk in confidence with the Volant Footware newest collection</p>

                    <GentsSlide />

                </div>





                <div className='container mt-4 p-5 mb-5 Gents-slide'>


                    <h1>Ladies Latest</h1>

                    <p>Discover unparalleled comfort and sleek designs</p>

                    <LadiesSlide />

                </div>




                <div className='container mt-4 p-5 mb-5 Gents-slide'>


                    <h1>Boys & Girls, Kids</h1>

                    <p>Volant Footwear Keep your Kids always a step ahead</p>

                    <KidsSlide />

                </div>


            </section>


        </>

    )

}

export default Landing