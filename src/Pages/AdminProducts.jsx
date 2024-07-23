import React, { useState } from 'react'
import './AdminProducts.css'
import AddProducts from '../Components/AddProducts'

function AdminProducts() {

    const [Status, setStatus] = useState(true)



    return (

        <>

            <section className='container'>


                <h1 className='text-center'>{ Status? "All Products" : " "}</h1>


                <button className='btn btn-success' onClick={() => { setStatus(!Status) }}>{Status ? "Add Product" : "Show Products"}</button>




                {

                    Status ?


                        <table className="table align-middle mb-0 bg-white mt-4">


                            <thead className="bg-light">

                                <tr>
                                    <th>Product Name</th>
                                    <th>Product Image</th>
                                    <th>Product Price</th>
                                    <th>Brand</th>
                                    <th>Color</th>
                                    <th></th>
                                </tr>
                            </thead>


                            <tbody>


                                <tr>



                                    <td>
                                        <p className="fw-normal mb-1">Footware - Sandles</p>

                                    </td>

                                    <td>
                                        <div className="d-flex align-items-center">

                                            <img
                                                src="https://www.volantfootwear.com/staticfiles/assets/images/gents-01.jpg"
                                                alt=""
                                                style={{ width: '100px', height: '100px' }}


                                            />

                                        </div>


                                    </td>

                                    <td>
                                        <p className="fw-normal mb-1 ms-4">500$</p>

                                    </td>





                                    <td>
                                        Volant
                                    </td>






                                    <td>Black</td>


                                    <td>
                                        <button type="button" className="btn btn-link btn-sm btn-rounded text-danger">
                                            <i class="fa-solid fa-trash fa-lg"></i>
                                        </button>
                                    </td>



                                </tr>

                            </tbody>


                        </table>

                        :


                        <AddProducts />

                }





            </section>


        </>


    )
}

export default AdminProducts