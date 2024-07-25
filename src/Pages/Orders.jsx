import React, { useEffect, useState } from 'react'
import './Orders.css'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { UserOrder,OrderCancel } from '../Services/AllApi'

function Orders() {


    const Navigate = useNavigate()

    const id = sessionStorage.getItem("_id")

    const [CancelStatus ,SetCancelStatus] = useState()

    const [OrderData, SetOrderData] = useState([])

    useEffect(() => {



        const ShowOrders = async () => {

            try {

                const Res = await UserOrder(id)

                if (Res.status == 200) {


                    SetOrderData(Res.data)


                }

            }

            catch (err) {

                console.log(err);
            }

        }



        // Checking if there is a user or not
        const checkUser = () => {



            if (!id) {

                Navigate('/auth')

            }

        }

        ShowOrders()

        checkUser()

    }, [CancelStatus])



    // Handle Cancel
    const handleCancel = async(id) => {

        try {


            const res = await OrderCancel(id)

            if(res.status == 200){

                toast.success("Order Canceled Successfully...!")

                SetCancelStatus(res.data)

            }
            else{


                toast.warning("Coulndn't find your order")
              
            }

        }
        catch (err) {


            console.log(err);

        }


    }



    return (

        <>

            <section className="p-5 gradient-custom-2" style={{ minHeight: '100vh' }}>


                <div className="container py-5 h-100">


                    <div className="row d-flex justify-content-center align-items-center h-100 ">



                        {

                            OrderData.length > 0 ?


                                OrderData.map((item) => (




                                    <div className="col-md-12 col-lg-12 col-xl-12 mb-4">


                                        <div className="card card-stepper bg-dark" style={{ borderRadius: '16px' }}>


                                            <div className="card-header p-4 ">


                                                <div className="d-flex justify-content-between align-items-center">

                                                    <div>
                                                        <p className="text-white mb-2"> Order ID: <span className="fw-bold text-white ">{item._id}</span></p>
                                                        <p className="text-white mb-0"> Place On: <span className="fw-bold text-white">{new Date(item.orderDate).toISOString().split('T')[0]}</span> </p>
                                                    </div>

                                                </div>


                                            </div>


                                            <div className="card-body p-4">


                                                <div className="d-flex flex-row mb-4 pb-2">


                                                    <div className="flex-fill">
                                                        <h5 className="bold text-white">{item.ProductName}</h5>
                                                        <p className="text-white"> Qt: {item.Quanity} item</p>
                                                        <h4 className="mb-3 text-white">  ₹ {item.Price} <span className="small text-white"> via {item.Payment} </span></h4>

                                                    </div>




                                                    <div>
                                                        <img className="align-self-center img-fluid"
                                                            src={item.Image} width="250" />
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

                                                    {

                                                        item.Cancel ?

                                                            <p className='text-danger'>Order Canceled</p>

                                                            :

                                                            <div>

                                                                <h5 className="fw-normal mb-0"><a className='btn btn-danger' onClick={()=>{handleCancel(item._id)}} >Cancel</a></h5>



                                                            </div>

                                                    }





                                                </div>

                                            </div>



                                        </div>


                                    </div>

                                ))

                                :

                                <h1 className='text-white text-center'>No Orders Yet</h1>


                        }

                    </div>


                </div>


            </section>




        </>





    )
}

export default Orders