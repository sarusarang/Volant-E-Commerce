import React from 'react'
import './Cart.css'


function Cart() {



  return (


    <>

      <section className="mt-4 p-5 mb-5">


        <div className="container">


          <div className="row">

            <div className="col-lg-9">



              <div className="card border shadow-0">


                <div className="m-4 p-5">


                  <h4 className="card-title mb-4">Your shopping cart</h4>

                  <div className="row gy-3 mb-4">


                    <div className="col-lg-5">
                      <div className="me-lg-5">
                        <div className="d-flex">
                          <img src="https://www.volantfootwear.com/staticfiles/assets/images/ladies-01.jpg" className="border rounded me-3" style={{ width: '96px', height: '96px' }} />
                          <div className="">
                            <a href="#" className="nav-link">Winter jacket for men and lady</a>
                            <p className="text-muted">Yellow, Jeans</p>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">

                      <div className="">
                        

                        <select style={{ width: '100px' }} className="form-select me-4">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>


                      <div className="">
                        <text className="h6">$1156.00</text> <br />
                        <small className="text-muted text-nowrap"> $460.00 / per item </small>
                      </div>


                    </div>


                    <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                      <div className="float-md-end">
                       
                        <a href="#" className="btn btn-light border text-danger icon-hover-danger"> Remove  <i class="fa-solid fa-trash-can" style={{color:'red'}}></i></a>

                      </div>
                    </div>


                  </div>


                </div>



                <div className="border-top pt-4 mx-4 mb-4">

                  <p><i className="fas fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks</p>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                  </p>

                </div>



              </div>


            </div>



            <div className="col-lg-3">


              <div className="card shadow-0 border">

                <div className="card-body">


                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total Items:</p>
                    <p className="mb-2">5</p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total Price:</p>
                    <p className="mb-2 text-success">$60.00</p>
                  </div>


                  <hr />

                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2 fw-bold">$283.00</p>
                  </div>

                  <div className="mt-3">
                    <a href="#" className="btn btn-success w-100 shadow-0 mb-2"> Make Purchase </a>
                    <a href="#" className="btn btn-light w-100 border mt-2"> Back to shop </a>
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

export default Cart