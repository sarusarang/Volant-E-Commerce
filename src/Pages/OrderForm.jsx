import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import { AddOrder } from '../Services/AllApi'
import { useNavigate } from 'react-router-dom'

function OrderForm() {


    // Form Data
    const [Data, setData] = useState({

        Username: "", Phone: "", Quanity: "1", Address: "", Payment: "Cash on Delivery", Status: "Placed"

    })

    const Navigate = useNavigate()

    const UserId = sessionStorage.getItem('_id')

    const [Total, SetTotal] = useState()


    const { OrderData } = useSelector((state) => state.CartRed)

    // Check if the user is loged or not
    useEffect(() => {

        const check = () => {

            if (!UserId) [


                Navigate('/auth')

            ]
        }

        SetTotal(OrderData.price * Data.Quanity)

        check()


    }, [Data.Quanity])






    // Handle Submit 
    const handleSubmit = async () => {


        try {

            const { Username, Phone, Quanity, Address, Payment, Status } = Data

            const { Productname, Color, Size, price, image, gender,Cancel } = OrderData

            const TotalPrice = price * Quanity



            if (!Username || !Phone || !Quanity || !Payment || !Address) {

                toast.warning("Empty Feild...!")

            }
            else {


                const res = await AddOrder({ UserId, Username, Phone, Quanity, Address, Payment, Status, Productname, Color, Size, TotalPrice, image, gender,Cancel })

                if (res.status == 200) {

                    toast.success("Order placed Successfully...!")


                    setTimeout(() => {

                        Navigate('/ord')

                    }, 1000);


                } else {


                    toast.warning("error while placeing order")

                }

            }

        }
        catch (err) {


            console.log(err);

        }


    }




    return (




        <>

            <section >

                <div className="order-form m-4">



                    <div className="container pt-4 border shadow" style={{ backgroundColor: '#dee2e6', borderRadius: '3rem' }}>


                        <div className="row">

                            <div className="col-12 px-4">
                                <h1>Order Deatils</h1>
                                <span>Fill the Form</span>
                                <hr className="mt-1" />
                            </div>

                            <form onSubmit={(e) => { e.preventDefault() }}>

                                <div className="col-12">
                                    <div className="row mx-4">

                                        <div className="col-12">
                                            <label className="order-form-label">Name</label>
                                        </div>

                                        <div className="col-sm-12">
                                            <div data-mdb-input-init className="form-outline">

                                                <input onChange={(e) => { setData({ ...Data, Username: e.target.value }) }} type="text" id="form1" className="form-control order-form-input" placeholder='Enter Your Name' />

                                            </div>
                                        </div>

                                    </div>



                                    <div className="row mt-3 mx-4">


                                        <div className="col-12">
                                            <label className="order-form-label">Phone Number</label>
                                        </div>


                                        <div className="col-12">
                                            <div data-mdb-input-init className="form-outline">
                                                <input onChange={(e) => { setData({ ...Data, Phone: e.target.value }) }} type="text" id="form3" className="form-control order-form-input" placeholder='Enter Your Phone' />
                                            </div>
                                        </div>


                                    </div>



                                    <div className="row mt-3 mx-4">



                                        <div className="col-12">

                                            <div className="col-12">
                                                <label className="order-form-label" for="date-picker-example">Product Quanity</label>
                                            </div>

                                            <select name="" id="" className='form-control' onChange={(e) => { setData({ ...Data, Quanity: e.target.value }) }}>

                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>


                                            </select>

                                        </div>


                                    </div>


                                    <div className="row mt-3 mx-4">


                                        <div className="col-12">
                                            <label className="order-form-label" for="date-picker-example">Address</label>
                                        </div>


                                        <div className="col-12">

                                            <textarea name="" id="" onChange={(e) => { setData({ ...Data, Address: e.target.value }) }} placeholder='Enter your Street Address' className='form-control'></textarea>


                                        </div>


                                    </div>



                                    <div className="row mt-3 mx-4">


                                        <div className="col-12">
                                            <label className="order-form-label" for="date-picker-example">Payment Mode</label>
                                        </div>


                                        <div className="col-12">

                                            <select name="" id="" className='form-control' onChange={(e) => { setData({ ...Data, Payment: e.target.value }) }}>

                                                <option value="Cash on Delivery">Cash on Delivery</option>
                                                {/* <option value="Online">Online</option> */}

                                            </select>

                                        </div>

                                        <div className="col-12 mt-3">

                                            <h3>Total Amount: {Total}</h3>

                                        </div>



                                    </div>



                                    <div className="row mt-4">
                                        <div className="col-12">
                                            <button onClick={handleSubmit} type="button" data-mdb-button-init id="btnSubmit" data-mdb-ripple-init className="btn btn-success d-block mx-auto btn-submit w-50">Submit</button>
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div>


                    </div>

                </div>


            </section>


        </>





    )



}

export default OrderForm