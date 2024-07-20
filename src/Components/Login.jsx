import React, { useState } from 'react'
import './Login.css'
import { UserRegister, UserLogin } from '../Services/AllApi'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

function Login() {


    // TO check Login and Register Status
    const [LoginStatus, setLoginStatus] = useState(true)


    const Navigate = useNavigate()


    //Login Data
    const [LoginData, SetLoginData] = useState({

        email: "", password: "", name: ""

    })



    // UserLogin
    const handleLogin = async () => {

        try {


            const { email, password } = LoginData


            if (!email || !password) {

                toast.warning("Empty Feild Please Try Again")


            }
            else {

                const res = await UserLogin({ email, password })

                if (res.status == 200) {

                    sessionStorage.setItem("token", res.data.token)
                    sessionStorage.setItem("user", res.data.user)
                    sessionStorage.setItem("_id", res.data._id)
                    toast.success("Login Success")

                    setTimeout(() => {

                        Navigate('/')

                    }, 1000)

                }
                else {

                    toast.error(res.response.data)


                }


            }



        }
        catch (err) {


            console.log(err);

        }


    }

    console.log(LoginData);


    // Handle Register 
    const handleRegister = async () => {


        try {


            const { email, password ,name } = LoginData


            if (!email || !password || !name) {

                toast.warning("Empty Feild Please Try Again")


            }
            else {

                const res = await UserRegister({ name,email, password})

                if (res.status == 200) {

                    sessionStorage.setItem("token", res.data.token)
                    sessionStorage.setItem("user", res.data.user)
                    sessionStorage.setItem("_id", res.data._id)
                    toast.success("Registration Success")

                    setTimeout(() => {

                        Navigate('/')

                    }, 1000)

                }
                else {

                    toast.error(res.response.data)

                }


            }

        }
        catch (err) {


            console.log(err);

        }

    }




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

                                    <input type="email" onChange={(e) => { SetLoginData({ ...LoginData, email: e.target.value }) }} className='form-control' placeholder='Enter your Email' /> <br />

                                    <input type="password" onChange={(e) => { SetLoginData({ ...LoginData, password: e.target.value }) }} className='form-control' placeholder='Enter Your Password' />

                                    <button type='submit' onClick={handleLogin} className='btn-login w-100 mt-3'>Login</button>

                                    <p className='text-center mt-3'>Don't have an account ? <a className='dont' onClick={() => { setLoginStatus(false) }}>Register</a></p>


                                </form>


                                :


                                <form onSubmit={(e) => { e.preventDefault() }} className='col-md-6 mt-2'>

                                    <h1>Sign Up</h1>

                                    <input type="text"  onChange={(e) => { SetLoginData({ ...LoginData, name: e.target.value }) }} className='form-control' placeholder='Enter your Name' /> <br />

                                    <input type="email"  onChange={(e) => { SetLoginData({ ...LoginData, email: e.target.value }) }} className='form-control' placeholder='Enter your Email' /> <br />

                                    <input type="password"  onChange={(e) => { SetLoginData({ ...LoginData, password: e.target.value }) }} className='form-control' placeholder='Enter Your Password' />

                                    <button type='submit' onClick={handleRegister} className='btn-login w-100 mt-3'>Register</button>

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