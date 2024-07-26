import React from 'react'
import { useState, useEffect } from 'react';
import '../Components/Slide.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showproducts, AddtoCart } from '../Services/AllApi'
import { ADDSTATUS } from '../STORE/CartSlice';
import { toast } from 'sonner'

function List() {


    const Dispatch = useDispatch()

    const [Gents, SetGents] = useState([])

    const [Loading, SetLoading] = useState(true)

    const Naviagte = useNavigate()

    const { HeaderData } = useSelector((state) => state.CartRed)



    // Get Products Gents
    useEffect(() => {

        const gents = async () => {


            try {

                const res = await showproducts()

                if (res.status == 200) {

                    const gentsdata = res.data.filter((item) => (item.Gender == HeaderData.Gender && item.Category == HeaderData.Category))

                    SetGents(gentsdata)

                    SetLoading(false)

                    console.log(res.data);

                }


            }
            catch (err) {

                console.log(err);

            }
        }

        gents()


    }, [HeaderData])


    console.log(HeaderData);




    // handle Add to cart
    const handleCart = async (product, name, price, image, gender, category) => {

        try {

            const user = sessionStorage.getItem("_id")

            if (!user) {

                toast.warning("Please Login First...!!")

                setTimeout(() => {

                    Naviagte('/auth')


                }, 1000);


            }
            else {

                const res = await AddtoCart({ user, product, name, price, image, gender, category })

                if (res.status == 200) {

                    Dispatch(ADDSTATUS(res.data))

                    toast.success("Item Added To Cart Successfully")

                    // To Mount on the top
                    window.scrollTo(0, 0);

                } else {

                    toast.warning(res.response.data)

                }

            }



        }
        catch (err) {


            console.log(err);

        }



    }










    return (



        <>


            <section className='container mt-3 p-5'>


                <h1 className='text-center'>{HeaderData.Gender} {HeaderData.Category}</h1>


                <div className='row mt-3 list-border'>


                    {


                        Loading ?


                            <div className='d-flex justify-content-center align-items-center w-100 mt-5'>

                                <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>

                                <h3>Loading...</h3>

                            </div>

                            :



                            Gents.map((item) => (


                                <div className='col-md-3'>

                                    <div className="container page-wrapper">

                                        <div className="page-inner">
                                            <div className="row">
                                                <div className="el-wrapper">

                                                    <div className="box-up" onClick={() => { Naviagte(`/pro/${item._id}`) }}>

                                                        <img className="img-fluid img" src={item.variants[0].Image} alt="" style={{ height: '100%' }} />
                                                        <div className="img-info">
                                                            <div className="info-inner">
                                                                <span className="p-name">{item.ProductName}</span>
                                                                <span className="p-company">Volant</span>
                                                            </div>
                                                            <div className="a-size">Available sizes : <span className="size">6, 7 , 8, 9, 10, 11</span></div>
                                                        </div>

                                                    </div>

                                                    <div className="box-down" onClick={() => { handleCart(item._id, item.ProductName, item.Price, item.variants[0].Image, item.Gender, item.Category) }}>
                                                        <div className="h-bg">
                                                            <div className="h-bg-inner"></div>
                                                        </div>

                                                        <a className="cart">
                                                            <span className="price">Just  ₹{item.Price}</span>

                                                            <span className="add-to-cart" >
                                                                <span className="txt">Add in cart</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>


                            ))



                    }





                </div>








                {

                    Gents.length <= 0 && !Loading &&

                    <h1 className='text-center mt-5 p-3'>No Product's Found....</h1>

                }




            </section>





        </>


    )




}

export default List