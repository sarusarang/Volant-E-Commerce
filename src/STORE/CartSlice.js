import { createSlice } from "@reduxjs/toolkit";



const initialState = {

    CartItems: [],
    CartStatus: [],
    OrderData: {

        Productname: "", Color: "", Size: "", price: "", image: "", gender: "", Cancel: false

    },
    HeaderData: { Gender: "", Category: "" }

}



const CartSlice = createSlice({



    name: "Cart",
    initialState: initialState,

    reducers: {


        addCartItems: (state, action) => {

            state.CartItems = action.payload

        },
        ADDSTATUS: (state, action) => {

            state.CartStatus = action.payload

        }, BuyNow: (state, action) => {


            const { Productname, price, image, color, gender, size } = action.payload

            state.OrderData = { Productname: Productname, Color: color, Size: size, price: price, image: image, gender: gender, Cancel: false }
        },
        AddHeader:(state,action)=>{

            const {gender,category} = action.payload

            state.HeaderData ={Gender:gender , Category:category}


        }

    }

})

export default CartSlice.reducer
export const { addCartItems, ADDSTATUS, BuyNow,AddHeader } = CartSlice.actions