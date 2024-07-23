import React from 'react'


function AddProducts() {
    return (


        <>

            <section className='mt-1 w-100'>


                <div className='container shadow p-4' style={{ borderRadius: '0.5rem' , width:'70%' }}>


                    <div className='row'>


                        <div className='pro-img col-md-6' style={{margin:'auto'}}>

                            <img src="https://www.aputf.org/wp-content/uploads/2015/06/default-placeholder1-1024x1024-570x321.png" className='img-fluid' alt="" />

                        </div>



                        <form onSubmit={(e) => { e.preventDefault() }} className='col-md-6'>

                            <h1 className='text-center'>Add Products</h1>

                            <input type="text" placeholder='Enter Product Name' className='form-control' />


                            <select name="" id="" className='form-control mt-4'>

                                <option value="">Gender</option>
                                <option value="Gents">Gents</option>
                                <option value="Ladies">Ladies</option>
                                <option value="Kids">Kids</option>

                            </select>


                            <select name="" id="" className='form-control mt-4'>

                                <option value="">Category</option>
                                <option value="Sandals">Sandals</option>
                                <option value="Slipper And Flip Flops">Slipper And Flip Flops</option>
                                <option value="Flat Shoes">Flat Shoes</option>
                                <option value="Casual Shoes">Casual Shoes</option>
                                <option value="Specail Collections">Specail Collections</option>
                                <option value="Women Specail">Women Specail</option>
                                <option value="School Editions">School Editions</option>

                            </select>


                            <input type="number" placeholder='Enter Price ₹/-' className='form-control mt-4' />


                            <label htmlFor="" className='mt-4'>Product Image</label>
                            <input type="file" className='form-control' /> <br />

                           <textarea name="" className='form-control' placeholder='Enter Product Description' id=""></textarea>


                            <button type='submit' className='btn btn-info mt-4 text-white'>Submit</button>




                        </form>

                    </div>

                </div>



            </section>




        </>



    )
}

export default AddProducts