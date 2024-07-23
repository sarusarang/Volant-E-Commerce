import { Toast } from 'bootstrap';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import AdminOrders from '../Pages/AdminOrders';
import AdminProducts from '../Pages/AdminProducts';


function AdminNav() {

    const Navigate = useNavigate()

    const [Status, setStatus] = useState(true)

    // handle admin logout
    const AdminLogOut = () => {


        sessionStorage.removeItem("admin")
        sessionStorage.removeItem("Adminname")
        toast.success("Log out Success")

        setTimeout(() => {


            Navigate('/adminlog')

        }, 1000);


    }



    return (




        <>


            <section>



                <Navbar expand="lg" className="admin-bg p-4 shadow border">
                    <Container fluid>


                        <img
                            alt=""
                            src="/volantlogo-Logo.png"
                            width="12%"
                            height="50"
                            className="d-inline-block align-top me-4"
                        />


                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >

                                <Link onClick={() => { setStatus(!Status) }} className='nav-link'>

                                    <Nav.Link href="#action1" style={{ fontWeight: '700' }}>Products</Nav.Link>

                                </Link>

                                <Link onClick={() => { setStatus(!Status) }} className='nav-link'>

                                    <Nav.Link href="#action2" style={{ fontWeight: '700' }}>Orders</Nav.Link>


                                </Link>




                            </Nav>
                            <Form className="d-flex">

                                <Button variant="outline-success" onClick={AdminLogOut}>Log Out</Button>


                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>



                <div className='mt-4 w-100'>


                    {

                        Status ?


                            <AdminProducts />


                            :

                            <AdminOrders />



                    }


                </div>




            </section>

        </>





    )
}

export default AdminNav