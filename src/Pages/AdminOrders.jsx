import React, { useEffect, useState } from 'react'
import { AllOrders } from '../Services/AllApi'

function AdminOrders() {


    const [Odrers, SetOrders] = useState([])

    useEffect(() => {

        const getorders = async () => {

            try {

                const res = await AllOrders()

                if (res.status == 200) {

                    SetOrders(res.data)

                }


            }
            catch (err) {

                console.log(err);


            }

        }



        getorders()

    }, [])

    console.log(Odrers);



    return (


        <>

            <section className='container-fluid'>

                <h1 className='text-center'>Orders</h1>




                <table className="table align-middle mb-0 bg-white mt-4">


                    <thead className="bg-light">

                        <tr>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Size</th>
                            <th>Quanity</th>
                            <th>Color</th>
                            <th>User Name</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Ordered Date</th>
                            <th>Cancelation</th>



                        </tr>
                    </thead>


                    <tbody>


                        {

                            Odrers.length > 0 ?

                                Odrers.map((item) => (


                                    <tr>



                                        <td>
                                            <p className="fw-normal mb-1">{item.ProductName}</p>

                                        </td>



                                        <td>
                                            <div className="d-flex align-items-center">

                                                <img
                                                    src={item.Image}
                                                    alt=""
                                                    style={{ width: '100px', height: '100px' }}


                                                />

                                            </div>


                                        </td>



                                        <td>₹{item.Price}</td>



                                        <td>

                                            {item.Size}

                                        </td>

                                        <td>

                                            {item.Quanity}

                                        </td>


                                        <td>

                                            {item.Color}

                                        </td>


                                        <td>
                                            {item.Username}
                                        </td>


                                        <td style={{ width: '15%' }}>
                                            <p className="fw-normal">

                                                {item.Address}

                                            </p>

                                        </td>


                                        <td>
                                            {item.Status}
                                        </td>


                                        <td>{new Date(item.orderDate).toISOString().split('T')[0]}</td>


                                        <td>{item.Cancel ? "Canceled" : "Not yet"}</td>



                                    </tr>



                                ))

                                :

                                <h1>NO ORDERS </h1>

                        }

                    </tbody>


                </table>


            </section>




        </>


    )
}

export default AdminOrders