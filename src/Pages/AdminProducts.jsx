import React, { useEffect, useState } from 'react'
import './AdminProducts.css'
import AddProducts from '../Components/AddProducts'
import { showproducts, Deleteproducts } from '../Services/AllApi'
import { toast } from 'sonner'

function AdminProducts() {

    const [Status, setStatus] = useState(true)

    const [Products, setProducts] = useState([])

    const [Delete,setDelete] = useState()


    // Get Products
    useEffect(() => {


        const getproducts = async () => {


            const res = await showproducts()

            if (res.status == 200) {


                setProducts(res.data)


            }


        }


        getproducts()

    }, [Delete])


    //   handle delete products
    const handleDelete = async(id)=>{

        try{


            const res = await Deleteproducts(id)


            if(res.status == 200){

                toast.success("Product Deleted Successfully...!")

                setDelete(res.data)


            }

        }

        catch(err){

            console.log(err);


        }

    }



    return (

        <>

            <section className='container'>


                <h1 className='text-center'>{Status ? "All Products" : " "}</h1>


                <button className='btn btn-success' onClick={() => { setStatus(!Status) }}>{Status ? "Add Product" : "Show Products"}</button>




                {

                    Status ?


                        <table className="table align-middle mb-0 bg-white mt-4">


                            <thead className="bg-light">

                                <tr>
                                    <th>Product Name</th>
                                    <th>Product Image</th>
                                    <th>Product Price</th>
                                    <th>Category</th>
                                    <th>Gender</th>
                                    <th></th>
                                </tr>
                            </thead>


                            <tbody>


                                {

                                    Products ?

                                        Products.map((item) => (


                                            <tr>



                                                <td>
                                                    <p className="fw-normal mb-1">{item.ProductName}</p>

                                                </td>

                                                <td>
                                                    <div className="d-flex align-items-center">

                                                        <img
                                                            src={item.variants[0].Image}
                                                            alt=""
                                                            style={{ width: '100px', height: '100px' }}


                                                        />

                                                    </div>


                                                </td>

                                                <td>
                                                    <p className="fw-normal mb-1 ms-4">{item.Price}</p>

                                                </td>


                                                <td>
                                                    {item.Category}
                                                </td>


                                                <td>{item.Gender}</td>


                                                <td>
                                                    <button type="button" className="btn btn-link btn-sm btn-rounded text-danger" onClick={()=>{handleDelete(item._id)}}>
                                                        <i class="fa-solid fa-trash fa-lg"></i>
                                                    </button>
                                                </td>



                                            </tr>


                                        ))

                                        :

                                        <h1>No Products</h1>


                                }

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