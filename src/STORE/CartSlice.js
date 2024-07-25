import { createSlice } from "@reduxjs/toolkit";



const initialState = {

    CartItems: [],
    CartStatus:[]

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

        }

    }

})

export default CartSlice.reducer
export const {addCartItems,ADDSTATUS} = CartSlice.actions