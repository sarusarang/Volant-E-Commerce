import React from 'react'
import './Product.css'

function Product() {





  return (




    <>



      <section className="py-5">


        <div className="container">


          <div className="row gx-5 p-3">


            <aside className="col-lg-6">


              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <a data-fslightbox="mygalley" className="rounded-4 d-flex" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">
                  <img style={{ maxWidth: '70%', maxHeight: '100vh', margin: 'auto' }} className="rounded-4 fit" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" />
                </a>
              </div>



              <div className="d-flex justify-content-center mb-3">


                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp">
                  <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" />
                </a>
                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp" >
                  <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp" />
                </a>
                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp" >
                  <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp" />
                </a>
                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp" >
                  <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp" />
                </a>
                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">
                  <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" />
                </a>


              </div>

            </aside>


            <main className="col-lg-6">


              <div className="ps-lg-3">

                <h4 className="title text-dark">
                  Quality Men's Hoodie for Winter, Men's Fashion <br />
                  Casual Hoodie
                </h4>


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
                  <span className="h5">$75.00</span>

                </div>

                <p>
                  Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
                  men.
                </p>

                <div className="row">


                  <dt className="col-3">Color</dt>
                  <dd className="col-9">Brown</dd>

                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">Volant</dd>


                </div>

                <hr />

                <div className="row mb-4">


                  <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select className="form-select border border-secondary" style={{ height: '35px' }}>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>



                </div>


                <a href="#" className="btn btn-warning shadow-0 me-3"> Buy now </a>
                <a href="#" className="btn btn-primary shadow-0"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>

              </div>
            </main>
          </div>
        </div>



        {/* Simlar Products */}
        <div className='container mt-5 border-top p-5'>

          <h3>Related Products</h3>

          <div className='row'>

            <div className='col-md-3'>

              <div className="container page-wrapper">

                <div className="page-inner">
                  <div className="row">
                    <div className="el-wrapper">
                      <div className="box-up">

                        <img className="img-fluid img" src="https://www.volantfootwear.com/staticfiles/assets/images/ladies-01.jpg" alt="" />
                        <div className="img-info">
                          <div className="info-inner">
                            <span className="p-name">I feel like Pablo</span>
                            <span className="p-company">Volant</span>
                          </div>
                          <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                        </div>

                      </div>

                      <div className="box-down">
                        <div className="h-bg">
                          <div className="h-bg-inner"></div>
                        </div>

                        <a className="cart" href="#">
                          <span className="price">$120</span>

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


          </div>



        </div>




      </section>


    </>




  )




}

export default Product