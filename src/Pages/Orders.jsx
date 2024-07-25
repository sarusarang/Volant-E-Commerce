import React, { useEffect } from 'react'
import './Orders.css'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

function Orders() {


    const Navigate = useNavigate()

    useEffect(() => {

        // Checking if there is a user or not
        const checkUser = () => {

            const id = sessionStorage.getItem("_id")

            if (!id) {

                Navigate('/auth')

            }

        }

        checkUser()

    }, [])



    return (

        <>

            <section className="p-5 gradient-custom-2">


                <div className="container py-5 h-100">


                    <div className="row d-flex justify-content-center align-items-center h-100 ">

                        <div className="col-md-12 col-lg-12 col-xl-12">


                            <div className="card card-stepper bg-dark" style={{ borderRadius: '16px' }}>


                                <div className="card-header p-4 ">


                                    <div className="d-flex justify-content-between align-items-center">

                                        <div>
                                            <p className="text-white mb-2"> Order ID: <span className="fw-bold text-white ">1222528743</span></p>
                                            <p className="text-white mb-0"> Place On: <span className="fw-bold text-white">12,March 2019</span> </p>
                                        </div>

                                    </div>


                                </div>


                                <div className="card-body p-4">


                                    <div className="d-flex flex-row mb-4 pb-2">


                                        <div className="flex-fill">
                                            <h5 className="bold text-white">Headphones Bose 35 II</h5>
                                            <p className="text-white"> Qt: 1 item</p>
                                            <h4 className="mb-3 text-white"> $ 299 <span className="small text-white"> via (COD) </span></h4>
                                            <p className="text-white">Tracking Status on: <span className="text-white">11:30pm, Today</span></p>
                                        </div>


                                        <div>
                                            <img className="align-self-center img-fluid"
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp" width="250" />
                                        </div>


                                    </div>


                                    <ul id="progressbar-1" className="mx-0 mt-0 mb-5 px-0 pt-0 pb-4">
                                        <li className="step0 active" id="step1"><span
                                            style={{ marginLeft: '22px', marginTop: '12px' }}>PLACED</span></li>
                                        <li className="step0  text-center" id="step2"><span>SHIPPED</span></li>
                                        <li className="step0 text-muted text-end" id="step3"><span
                                            style={{ marginRight: '22px' }}>DELIVERED</span></li>
                                    </ul>


                                </div>



                                <div className="card-footer p-4">

                                    <div className="d-flex justify-content-between">


                                        <h5 className="fw-normal mb-0"><a className='btn btn-danger' href="#!">Cancel</a></h5>
                                        <div className="border-start h-100"></div>



                                    </div>

                                </div>



                            </div>


                        </div>


                    </div>


                </div>


            </section>




        </>





    )
}

export default Orders