import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (

    <>


      {/* <!-- Footer --> */}
      <footer class="text-center text-lg-start  text-muted">

        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks</span>
          </div>

          <div>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>

          </div>

        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">

            <div class="row mt-3">

              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">


                <div className='footer-logo'>

                  <img src="/volantlogo-Logo.png" className='img-fluid' alt="" />

                </div>

                <p>
                  Volant Footwear is a dynamic company dedicated to crafting high-quality,
                  stylish, and comfortable footwear for all occasions.
                </p>


              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  Navigation
                </h6>
                <p>
                  <Link to={'/'} className='foot-link'>Home</Link>
                </p>
                <p>
                  <Link to={'/auth'} className='foot-link'>Login</Link>
                </p>
                <p>
                  <Link to={'/adminlog'} className='foot-link'>Admin Login</Link>
                </p>
                <p>
                  <Link to={''} className='foot-link'>Contact US</Link>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  Shopping & Categories
                </h6>
                <p>
                  <Link className='foot-link'>Gent’s Shopping</Link>
                </p>
                <p>
                  <Link className='foot-link'>Ladie’s Shopping</Link>
                </p>
                <p>
                  <Link className='foot-link'>Kid's Shopping</Link>
                </p>
                <p>
                  <Link className='foot-link'>Boys & Girls Shopping</Link>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i class="fas fa-home me-3"></i>10/391 , Kakkanchery , Chelembra (P.O),Malappuaram , 673634
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  <a href="mailto:www.volantfootwear.com" target='_blank' className='foot-link'>www.volantfootwear.com</a>

                </p>
                <p><i class="fas fa-phone me-3"></i>

                  <a href="https://wa.me/+918589883308" target='_blank' className='foot-link'> +91 8589883308</a>

                </p>

              </div>

            </div>

          </div>
        </section>



        <div class="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}>
          © 2024 Copyright Volant All Rights Reserved.

        </div>

      </footer>




    </>




  )
}

export default Footer