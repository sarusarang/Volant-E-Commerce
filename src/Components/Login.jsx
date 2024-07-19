import React, { useState } from 'react'
import './Login.css'

function Login() {


    // TO check Login and Register Status
    const [LoginStatus, setLoginStatus] = useState(true)


    return (


        <>

            <section className='login'>

                <nav className='w-100 p-4'>

                    <div className='login-logo'>

                        <img src="/volantlogo-Logo.png" className='img-fluid' alt="" />

                    </div>

                </nav>


                {/* Login */}
                <div className='w-100 d-flex justify-content-center align-items-center'>

                    <div className='login-form row shadow border'>


                        <div className='col-md-6 form-img'>

                            <img src="https://static.vecteezy.com/system/resources/previews/006/912/004/non_2x/secure-login-and-sign-up-concept-illustration-vector.jpg" className='img-fluid' alt="" />

                        </div>



                        {

                            LoginStatus ?


                                <form onSubmit={(e) => { e.preventDefault() }} className='col-md-6 mt-2'>

                                    <h1>Login</h1>

                                    <input type="email" className='form-control' placeholder='Enter your Email' /> <br />

                                    <input type="password" className='form-control' placeholder='Enter Your Password' />

                                    <button type='submit' className='btn-login w-100 mt-3'>Login</button>

                                    <p className='text-center mt-3'>Don't have an account ? <a className='dont' onClick={() => { setLoginStatus(false) }}>Register</a></p>


                                </form>


                                :


                                <form onSubmit={(e) => { e.preventDefault() }} className='col-md-6 mt-2'>

                                    <h1>Sign Up</h1>

                                    <input type="text" className='form-control' placeholder='Enter your Name' /> <br />

                                    <input type="email" className='form-control' placeholder='Enter your Email' /> <br />

                                    <input type="password" className='form-control' placeholder='Enter Your Password' />

                                    <button type='submit' className='btn-login w-100 mt-3'>Register</button>

                                    <p className='text-center mt-3'>Already Registerd ? <a className='dont' onClick={() => { setLoginStatus(true) }}>Login</a></p>


                                </form>


                        }






                    </div>






                </div>


            </section>


        </>


    )
}

export default Login