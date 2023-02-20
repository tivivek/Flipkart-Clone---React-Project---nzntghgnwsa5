import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { apiProductData } from '../App';
import { useContext, useEffect, useState } from "react";

// export const fetchApiData = createAsyncThunk('fetchDatas', async () => {
//     const response = await fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products");
//     return response.json();
// });


//Getting cartdata form localstorage
// const getLocalCartData = () => {
//     const localData = localStorage.getItem("shoppingCart");
//     if (localData === [])
//         return [];
//     else
//         return JSON.parse(localData);
// }
// function datacall() {
//     const productData = useContext(apiProductData);
// }

// useEffect(() => {
//     datacall();
// }, []);

const initialState = {
    cart: [],
    // cart: getLocalCartData(),
    item: null,
    totalQuantity: 0,
    totalPrice: 0,
};


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        extraReducer: (builder) => {
            builder.addCase(fetchApiData.fulfilled, (state, action) => {
                state.item = action.payload;
            });
            builder.addCase(fetchApiData.rejected, (state, action) => {
                console.log("Error", action.payload);
            });
        }

    },
})


export default cartSlice.reducer;