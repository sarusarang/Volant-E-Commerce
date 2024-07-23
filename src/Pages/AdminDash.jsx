import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import AdminNav from '../Components/AdminNav'

function AdminDash() {


    const Navigate = useNavigate()

    // Checking if the admin is loged in or not
    useEffect(() => {


        const checkAdmin = () => {

            const Res = sessionStorage.getItem("admin")

            if (!Res) {


                toast.error("Please Login First...!")

                setTimeout(() => {

                    Navigate('/adminlog')

                }, 1000);

            }

        }

        checkAdmin()


    }, [])


    return (



        <>


            <section>


                <AdminNav/>



            </section>




        </>






    )




}

export default AdminDash