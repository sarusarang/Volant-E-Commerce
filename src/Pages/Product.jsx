import React, { useState } from 'react'
import { useEffect } from 'react';
import './Product.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { showproducts, AddtoCart } from '../Services/AllApi';
import { ADDSTATUS } from '../STORE/CartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';



function Product() {



  // To get the Id of the Product
  const { id } = useParams()

  const [product_id, SetProduct_id] = useState(id)

  const Dispatch = useDispatch()


  const Navigate = useNavigate()

  // to set the product data
  const [Product, SetProduct] = useState({

    Category: "", Description: "", Gender: "", Price: "", ProductName: "", variants: [{ Image: "", color: "", _id: "" }, { Image: "", color: "", _id: "" }, { Image: "", color: "", _id: "" }], __v: "", _id: ""

  })

  // Similar Products
  const [Simliar, setSimliar] = useState([])

  // To set image
  const [ImgData, SetImgData] = useState("")


  // To set Color
  const [ColorData, SetColorData] = useState("")





  // To get the product
  useEffect(() => {

    const Getproducts = async () => {

      try {

        const res = await showproducts()

        if (res.status == 200) {


          const result = res.data.find((item) => (item._id == product_id))

          SetProduct(result)

          setSimliar(res.data.slice(0, 8))

          SetImgData(result.variants[0].Image)

          SetColorData(result.variants[0].color)


        }


      }
      catch (err) {


        console.log(err);

      }


    }

    // To Mount on the top
    window.scrollTo(0, 0);

    Getproducts()


  }, [product_id, id])

  console.log(product_id);

  // handleimge and color
  const handle = (image, color) => {

    SetImgData(image)
    SetColorData(color)

  }



  // handle Add to cart
  const handleCart = async (product, name, price, image, gender, category) => {

    try {

      const user = sessionStorage.getItem("_id")

      if (!user) {

        toast.warning("Please Login First...!!")

        setTimeout(() => {

          Navigate('/auth')


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


  console.log(Simliar);


  return (




    <>

      <section className="py-5">


        <div className="container">


          <div className="row gx-5 p-3">


            <aside className="col-lg-6">


              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <a data-fslightbox="mygalley" className="rounded-4 d-flex" target="_blank" data-type="image">
                  <img style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} className="rounded-4 fit" src={ImgData} />
                </a>
              </div>



              <div className="d-flex justify-content-center mb-3">


                {

                  Product &&

                  Product.variants.map((item) => (

                    <a data-fslightbox="mygalley" className="border mx-1 rounded-2 a-pointer" target="_blank" data-type="image" onClick={() => { handle(item.Image, item.color) }}>

                      <img width="60" height="60" className="rounded-2" src={item.Image} />

                    </a>


                  ))

                }





              </div>

            </aside>


            <main className="col-lg-6">


              <div className="ps-lg-3">

                <h4 className="title text-dark">{Product.ProductName}</h4>


                <div className="d-flex flex-row my-3">

                  <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span className="ms-1">
                      4.5
                    </span>
                  </div>

                  <span className="text-success ms-2">In stock</span>


                </div>

                <div className="mb-3">

                  <span className="h5">₹ {Product.Price}</span>

                </div>

                <p>{Product.Description}</p>

                <div className="row">


                  <dt className="col-3">Color</dt>

                  <dd className="col-9">{ColorData}</dd>

                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">Volant</dd>


                </div>

                <hr />

                <div className="row mb-4">


                  <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select className="form-select border border-secondary" style={{ height: '35px' }}>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>



                </div>

                <Link to={'/orderform'}>

                  <a className="btn btn-warning shadow-0 me-3"> Buy now </a>

                </Link>

                <a className="btn btn-primary shadow-0" onClick={() => { handleCart(Product._id, Product.ProductName, Product.Price, Product.variants[0].Image, Product.Gender, Product.Category,) }}> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>

              </div>
            </main>
          </div>
        </div>



        {/* Simlar Products */}
        <div className='container mt-5 border-top p-5'>

          <h3>Related Products</h3>

          <div className='row'>


            {
              Simliar &&

              Simliar.map((item) => (


                <div className='col-md-3'>

                  <div className="container page-wrapper">

                    <div className="page-inner">
                      <div className="row">
                        <div className="el-wrapper">
                          <div className="box-up" onClick={() => { SetProduct_id(item._id) }}>

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

                            <a className="cart" href="#">
                              <span className="price">Just ₹{item.Price}</span>

                              <span className="add-to-cart">
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



        </div>




      </section>


    </>




  )




}

export default Product