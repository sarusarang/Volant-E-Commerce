import React from 'react'
import './Slide.css'
import { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { showproducts, AddtoCart } from '../Services/AllApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { ADDSTATUS } from '../STORE/CartSlice';

function KidsSlide() {



  const Dispatch = useDispatch()

  const [Kids, SetKids] = useState([])


  const Naviagte = useNavigate()


  const [Loading, SetLoading] = useState(true)



  // Get Products Gents
  useEffect(() => {

    const gents = async () => {


      try {

        const res = await showproducts()

        if (res.status == 200) {

          const Kidsdata = res.data.filter((item) => (item.Gender == "Kids"))

          SetKids(Kidsdata)

          SetLoading(false)


        }


      }
      catch (err) {

        console.log(err);

      }
    }

    gents()


  }, [])




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





  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };




  return (



    <>


      <Carousel responsive={responsive}>



        {

          Loading ?

            <div className='d-flex justify-content-center align-items-center w-100'>

              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>

              <h3>Loading...</h3>

            </div>

            :

            Kids.map((item) => (


              <div>

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
                            <span className="price">Just ₹{item.Price}</span>

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





      </Carousel>





    </>






  )





}

export default KidsSlide