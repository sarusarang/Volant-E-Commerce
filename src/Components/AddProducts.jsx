import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { addproducts } from '../Services/AllApi'
import { useNavigate } from 'react-router-dom'


function AddProducts() {


    // image preview 
    const [Preview, setPreview] = useState()
    const [Preview1, setPreview1] = useState()
    const [Preview2, setPreview2] = useState()

    const Navigate = useNavigate()

    // image status
    const [Status, setStatus] = useState(false)

    // Variants
    const [variants, setVariants] = useState([

        { color: '', image: null },
        { color: '', image: null },
        { color: '', image: null }

    ])


    // Handle Files
    const handleFileChange = (index, event) => {

        const file = event.target.files[0];

        setVariants(prevVariants => {
            const newVariants = [...prevVariants];
            newVariants[index].image = file;
            return newVariants;
        })

    }


    useEffect(() => {

        setPreview(variants[0].image ? URL.createObjectURL(variants[0].image) : null)
        setPreview1(variants[1].image ? URL.createObjectURL(variants[1].image) : null)
        setPreview2(variants[2].image ? URL.createObjectURL(variants[2].image) : null)


    }, [variants])




    console.log(Preview);


    // Handle color change
    const handleColorChange = (index, event) => {
        const color = event.target.value;
        setVariants(prevVariants => {
            const newVariants = [...prevVariants];
            newVariants[index].color = color;
            return newVariants;
        })
    }


    // Form data 
    const [Data, setData] = useState({

        name: "", gender: "", category: "", price: "", description: ""

    })



    // HandleForm Submit
    const handleSubmit = async () => {

        try {

            const { name, gender, category, price, description } = Data

            if (!name || !gender || !category || !price || !description || !variants) {

                toast.warning("Empty Feild...!")

            }
            else {


                const formdata = new FormData()

                formdata.append("name", name)
                formdata.append("gender", gender)
                formdata.append("category", category)
                formdata.append("price", price)
                formdata.append("description", description)
                variants.forEach((variant, index) => {

                    formdata.append('color', variant.color);
                    formdata.append('image', variant.image);
                });




                const reqheader = {

                    "Content-Type": "multipart/form-data"

                }

                const res = await addproducts(formdata, reqheader)

                if (res.status == 200) {

                    toast.success("Product Added Successfully...!")

                    setPreview(null)

                    setPreview1(null)

                    setPreview2(null)

                    setData({ ...Data, name: "", gender: "", category: "", price: "", description: "" })
                }
                else {

                    toast.warning(res.response.data)

                }

            }

        }
        catch (err) {



        }



    }





    return (


        <>

            <section className='mt-1 w-100'>


                <div className='container shadow p-4' style={{ borderRadius: '0.5rem', width: '70%' }}>


                    <div className='row'>


                        <div className='pro-img col-md-6' style={{ margin: 'auto' }}>

                            <img src={Preview ? Preview : "https://www.aputf.org/wp-content/uploads/2015/06/default-placeholder1-1024x1024-570x321.png"} className='img-fluid mb-2' alt="" />
                            {Status && <p className='text-danger text-center'>Invaild Image Fromat</p>}


                            <img src={Preview1 ? Preview1 : "https://www.aputf.org/wp-content/uploads/2015/06/default-placeholder1-1024x1024-570x321.png"} className='img-fluid mb-2' alt="" />
                            {Status && <p className='text-danger text-center'>Invaild Image Fromat</p>}


                            <img src={Preview2 ? Preview2 : "https://www.aputf.org/wp-content/uploads/2015/06/default-placeholder1-1024x1024-570x321.png"} className='img-fluid' alt="" />
                            {Status && <p className='text-danger text-center'>Invaild Image Fromat</p>}

                        </div>



                        <form className='col-md-6' onSubmit={(e) => { e.preventDefault() }}>

                            <h1 className='text-center'>Add Products</h1>

                            <input value={Data.name} onChange={(e) => { setData({ ...Data, name: e.target.value }) }} type="text" placeholder='Enter Product Name' className='form-control' />


                            <select value={Data.gender} name="" id="" className='form-control mt-4' onChange={(e) => { setData({ ...Data, gender: e.target.value }) }}>

                                <option value="">Gender</option>
                                <option value="Gents">Gents</option>
                                <option value="Ladies">Ladies</option>
                                <option value="Kids">Kids</option>

                            </select>


                            <select value={Data.category} name="" id="" className='form-control mt-4' onChange={(e) => { setData({ ...Data, category: e.target.value }) }}>

                                <option value="">Category</option>
                                <option value="Sandals">Sandals</option>
                                <option value="Slipper And Flip Flops">Slipper And Flip Flops</option>
                                <option value="Flat Shoes">Flat Shoes</option>
                                <option value="Casual Shoes">Casual Shoes</option>
                                <option value="Specail Collections">Specail Collections</option>
                                <option value="Women Specail">Women Specail</option>
                                <option value="School Editions">School Editions</option>

                            </select>





                            <input value={Data.price} type="number" placeholder='Enter Price ₹/-' className='form-control mt-4' onChange={(e) => { setData({ ...Data, price: e.target.value }) }} />



                            {

                                variants.map((item, index) => (


                                    <div>

                                        <label htmlFor="" className='mt-4'>variants {index + 1}</label>
                                        <input type="file" className='form-control' onChange={(e) => handleFileChange(index, e)} /> <br />

                                        <input type="Text" placeholder={`Enter Varint Color ${index + 1}`} className='form-control mt-0' onChange={(e) => handleColorChange(index, e)} />

                                    </div>



                                ))

                            }








                            <textarea value={Data.description} name="" className='form-control mt-4' placeholder='Enter Product Description' id="" onChange={(e) => { setData({ ...Data, description: e.target.value }) }}></textarea>


                            <button type='submit' onClick={handleSubmit} className='btn btn-info mt-4 text-white'>Submit</button>




                        </form>

                    </div>

                </div>



            </section>




        </>



    )
}

export default AddProducts