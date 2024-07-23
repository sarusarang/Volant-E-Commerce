import React from 'react'

function AdminOrders() {
    return (


        <>

            <section className='container'>

                <h1 className='text-center'>Orders</h1>




                <table className="table align-middle mb-0 bg-white mt-4">


                    <thead className="bg-light">

                        <tr>
                            <th>Product Name</th>
                            <th>Product Image</th>
                            <th>Product Price</th>
                            <th>Address</th>
                            <th>Order Status</th>
                            <th>Ordered Date</th>
                            <th>Size</th>
                            <th>Color</th>

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
                                <p className="fw-normal mb-1 ms-4">PERALASSERY VADAKUMBAD</p>

                            </td>


                            <td>
                                <p className="fw-normal mb-1 ms-4">Order Placed</p>

                            </td>


                            <td>
                                <p className="fw-normal mb-1 ms-4">17-08-2024</p>

                            </td>





                            <td>
                                10
                            </td>






                            <td>Black</td>






                        </tr>

                    </tbody>


                </table>


            </section>




        </>


    )
}

export default AdminOrders