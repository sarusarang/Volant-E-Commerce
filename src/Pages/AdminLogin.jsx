import React, { useState } from 'react'
import '../Components/Login.css'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'


function AdminLogin() {

    const [LogData, setLogData] = useState({

        name: "Admin", email: "", Password: "", admin: true

    })


    const Navigate = useNavigate()
    


    const handleLogin = () => {


        const {name , email,Password,admin} = LogData

        if(!email || !Password){

            toast.warning("Empty Feild...!")

        }
        else{

            if(email == "admin123@gmail.com" && Password == "12345"){


                toast.success("Login Success...!")

                sessionStorage.setItem("Adminname" , name)
                sessionStorage.setItem("admin" , admin)


                setTimeout(() => {
                    
                    Navigate('/admindash')

                }, 1000);


            }else{

                toast.error("Invaild Credentials")
            }


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


                        <form onSubmit={(e) => { e.preventDefault() }} className='col-md-6 mt-2'>

                            <h1>Admin Login</h1>

                            <input type="email" onChange={(e)=>{setLogData({...LogData,email:e.target.value})}} className='form-control' placeholder='Enter your Email' /> <br />

                            <input type="password" onChange={(e)=>{setLogData({...LogData,Password:e.target.value})}} className='form-control' placeholder='Enter Your Password' />

                            <button type='submit' onClick={handleLogin} className='btn-login w-100 mt-3'>Login</button>

                        </form>

                    </div>


                </div>


            </section>




        </>




    )






}

export default AdminLogin