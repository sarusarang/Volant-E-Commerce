import { createSlice } from "@reduxjs/toolkit";



const initialState = {

    CartItems: [],
    CartStatus:[],
    OrderData: {

        Productname: "", Color: "", Size: "", price: "",image:"",gender:"",Cancel:false

    }

}



const CartSlice = createSlice({



    name: "Cart",
    initialState: initialState,

    reducers: {


        addCartItems: (state, action) => {

            state.CartItems = action.payload

        },
        ADDSTATUS:(state,action)=>{

            state.CartStatus = action.payload

        },BuyNow: (state, action) => {


            const{Productname,price,image,color,gender,size} = action.payload

            state.OrderData = { Productname:Productname, Color:color, Size:size, price:price,image:image,gender:gender,Cancel:false}
        }

    }

})

export default CartSlice.reducer
export const {addCartItems,ADDSTATUS,BuyNow} = CartSlice.actions